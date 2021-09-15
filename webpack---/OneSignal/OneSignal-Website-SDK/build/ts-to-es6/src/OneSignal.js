import bowser from 'bowser';
import Environment from './Environment';
import {
    InvalidArgumentError,
    InvalidArgumentReason
} from './errors/InvalidArgumentError';
import {
    InvalidStateError,
    InvalidStateReason
} from './errors/InvalidStateError';
import {
    NotSubscribedError,
    NotSubscribedReason
} from './errors/NotSubscribedError';
import {
    SdkInitError,
    SdkInitErrorKind
} from './errors/SdkInitError';
import Event from './Event';
import EventHelper from './helpers/EventHelper';
import HttpHelper from './helpers/HttpHelper';
import InitHelper from './helpers/InitHelper';
import MainHelper from './helpers/MainHelper';
import SubscriptionHelper from './helpers/SubscriptionHelper';
import LimitStore from './LimitStore';
import AltOriginManager from './managers/AltOriginManager';
import LegacyManager from './managers/LegacyManager';
import SdkEnvironment from './managers/SdkEnvironment';
import Context from './models/Context';
import {
    NotificationPermission
} from './models/NotificationPermission';
import {
    WindowEnvironmentKind
} from './models/WindowEnvironmentKind';
import OneSignalApi from './OneSignalApi';
import Database from './services/Database';
import IndexedDb from './services/IndexedDb';
import {
    awaitOneSignalInitAndSupported,
    executeCallback,
    getConsoleStyle,
    isValidEmail,
    logMethodCall,
} from './utils';
import {
    ValidatorUtils
} from './utils/ValidatorUtils';
import {
    DeviceRecord
} from './models/DeviceRecord';
import TimedLocalStorage from './modules/TimedLocalStorage';
import {
    SecondaryChannelDeviceRecord
} from './models/SecondaryChannelDeviceRecord';
import Emitter from './libraries/Emitter';
import Log from './libraries/Log';
import ConfigManager from "./managers/ConfigManager";
import OneSignalUtils from "./utils/OneSignalUtils";
import {
    ProcessOneSignalPushCalls
} from "./utils/ProcessOneSignalPushCalls";
import {
    EnvironmentInfoHelper
} from './context/browser/helpers/EnvironmentInfoHelper';
import {
    SessionManager
} from './managers/sessionManager/page/SessionManager';
import OutcomesHelper from "./helpers/shared/OutcomesHelper";
import {
    OutcomeAttributionType
} from "./models/Outcomes";
import {
    DelayedPromptType
} from './models/Prompts';
import LocalStorage from './utils/LocalStorage';
import {
    AuthHashOptionsValidatorHelper
} from './helpers/page/AuthHashOptionsValidatorHelper';
export default class OneSignal {
    /**
     * Pass in the full URL of the default page you want to open when a notification is clicked.
     * @PublicApi
     */
    static async setDefaultNotificationUrl(url) {
        if (!ValidatorUtils.isValidUrl(url, {
                allowNull: true
            }))
            throw new InvalidArgumentError('url', InvalidArgumentReason.Malformed);
        await awaitOneSignalInitAndSupported();
        logMethodCall('setDefaultNotificationUrl', url);
        const appState = await Database.getAppState();
        appState.defaultNotificationUrl = url;
        await Database.setAppState(appState);
    }
    /**
     * Sets the default title to display on notifications. Will default to the site name provided
     * on the dashboard if you don't call this.
     * @remarks Either DB value defaultTitle or pageTitle is used when showing a notification title.
     * @PublicApi
     */
    static async setDefaultTitle(title) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('setDefaultTitle', title);
        const appState = await Database.getAppState();
        appState.defaultNotificationTitle = title;
        await Database.setAppState(appState);
    }
    /**
     * @PublicApi
     */
    static async setEmail(email, options) {
        if (!email) {
            throw new InvalidArgumentError('email', InvalidArgumentReason.Empty);
        }
        if (!isValidEmail(email)) {
            throw new InvalidArgumentError('email', InvalidArgumentReason.Malformed);
        }
        const authHash = AuthHashOptionsValidatorHelper.throwIfInvalidAuthHashOptions(options, ["identifierAuthHash", "emailAuthHash"]);
        logMethodCall('setEmail', email, options);
        await awaitOneSignalInitAndSupported();
        return await this.context.secondaryChannelManager.email.setIdentifier(email, authHash);
    }
    /**
     * @PublicApi
     */
    static async setSMSNumber(smsNumber, options) {
        if (!smsNumber) {
            throw new InvalidArgumentError('smsNumber', InvalidArgumentReason.Empty);
        }
        const authHash = AuthHashOptionsValidatorHelper.throwIfInvalidAuthHashOptions(options, ["identifierAuthHash"]);
        logMethodCall('setSMSNumber', smsNumber, options);
        await awaitOneSignalInitAndSupported();
        return await this.context.secondaryChannelManager.sms.setIdentifier(smsNumber, authHash);
    }
    /**
     * @PublicApi
     */
    static async logoutEmail() {
        await awaitOneSignalInitAndSupported();
        return await this.context.secondaryChannelManager.email.logout();
    }
    /**
     * @PublicApi
     */
    static async logoutSMS() {
        await awaitOneSignalInitAndSupported();
        return await this.context.secondaryChannelManager.sms.logout();
    }
    /**
     * Returns true if the current browser supports web push.
     * @PublicApi
     */
    static isPushNotificationsSupported() {
        logMethodCall('isPushNotificationsSupported');
        /*
          Push notification support is checked in the initial entry code. If in an unsupported environment, a stubbed empty
          version of the SDK will be loaded instead. This file will only be loaded if push notifications are supported.
         */
        return true;
    }
    static async initializeConfig(options) {
        const appConfig = await new ConfigManager().getAppConfig(options);
        Log.debug(`OneSignal: Final web app config: %c${JSON.stringify(appConfig, null, 4)}`, getConsoleStyle('code'));
        // TODO: environmentInfo is explicitly dependent on existence of OneSignal.config. Needs refactor.
        // Workaround to temp assign config so that it can be used in context.
        OneSignal.config = appConfig;
        OneSignal.environmentInfo = EnvironmentInfoHelper.getEnvironmentInfo();
        OneSignal.context = new Context(appConfig);
        OneSignal.config = OneSignal.context.appConfig;
    }
    /**
     * Initializes the SDK, called by the developer.
     * @PublicApi
     */
    static async init(options) {
        logMethodCall('init');
        await InitHelper.polyfillSafariFetch();
        InitHelper.errorIfInitAlreadyCalled();
        await OneSignal.initializeConfig(options);
        if (!OneSignal.config) {
            throw new Error("OneSignal config not initialized!");
        }
        if (bowser.safari && !OneSignal.config.safariWebId) {
            /**
             * Don't throw an error for missing Safari config; many users set up
             * support on Chrome/Firefox and don't intend to support Safari but don't
             * place conditional initialization checks.
             */
            Log.warn(new SdkInitError(SdkInitErrorKind.MissingSafariWebId));
            return;
        }
        if (OneSignal.config.userConfig.requiresUserPrivacyConsent) {
            const providedConsent = await Database.getProvideUserConsent();
            if (!providedConsent) {
                OneSignal.pendingInit = true;
                return;
            }
        }
        await OneSignal.delayedInit();
    }
    static async delayedInit() {
        OneSignal.pendingInit = false;
        // Ignore Promise as doesn't return until the service worker becomes active.
        OneSignal.context.workerMessenger.listen();
        async function __init() {
            if (OneSignal.__initAlreadyCalled)
                return;
            OneSignal.__initAlreadyCalled = true;
            OneSignal.emitter.on(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, EventHelper.onNotificationPermissionChange);
            OneSignal.emitter.on(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, EventHelper._onSubscriptionChanged);
            OneSignal.emitter.on(OneSignal.EVENTS.SDK_INITIALIZED, InitHelper.onSdkInitialized);
            if (OneSignalUtils.isUsingSubscriptionWorkaround()) {
                /**
                 * The user may have forgot to choose a subdomain in his web app setup.
                 *
                 * Or, the user may have an HTTP & HTTPS site while using an HTTPS-only
                 * config on both variants. This would cause the HTTPS site to work
                 * perfectly, while causing errors and preventing web push from working
                 * on the HTTP site.
                 */
                if (!OneSignal.config || !OneSignal.config.subdomain)
                    throw new SdkInitError(SdkInitErrorKind.MissingSubdomain);
                /**
                 * We'll need to set up page activity tracking events on the main page but we can do so
                 * only after the main initialization in the iframe is successful and a new session
                 * is initiated.
                 */
                OneSignal.emitter.on(OneSignal.EVENTS.SESSION_STARTED, SessionManager.setupSessionEventListenersForHttp);
                /**
                 * The iFrame may never load (e.g. OneSignal might be down), in which
                 * case the rest of the SDK's initialization will be blocked. This is a
                 * good thing! We don't want to access IndexedDb before we know which
                 * origin to store data on.
                 */
                OneSignal.proxyFrameHost = await AltOriginManager.discoverAltOrigin(OneSignal.config);
            }
            window.addEventListener('focus', () => {
                // Checks if permission changed every time a user focuses on the page,
                //     since a user has to click out of and back on the page to check permissions
                MainHelper.checkAndTriggerNotificationPermissionChanged();
            });
            await InitHelper.initSaveState();
            await InitHelper.saveInitOptions();
            if (SdkEnvironment.getWindowEnv() === WindowEnvironmentKind.CustomIframe)
                await Event.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
            else
                await InitHelper.internalInit();
        }
        if (document.readyState === 'complete' || document.readyState === 'interactive')
            await __init();
        else {
            Log.debug('OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing' +
                ' initialization...');
            window.addEventListener('DOMContentLoaded', () => {
                __init();
            });
            document.onreadystatechange = () => {
                if (document.readyState === 'complete' || document.readyState === 'interactive')
                    __init();
            };
        }
    }
    /**
     * Call after user accepts your user consent agreement
     * @PublicApi
     */
    static async provideUserConsent(consent) {
        await Database.setProvideUserConsent(consent);
        if (consent && OneSignal.pendingInit)
            await OneSignal.delayedInit();
    }
    /**
     * Prompts the user to subscribe using the remote local notification workaround for HTTP sites.
     * @PublicApi
     */
    static async showHttpPermissionRequest(options) {
        Log.debug('Called showHttpPermissionRequest(), redirecting to HTTP prompt.');
        OneSignal.showHttpPrompt(options).catch(e => Log.info(e));
    }
    /**
     * Shows a sliding modal prompt on the page for users to trigger the HTTP popup window to subscribe.
     * @PublicApi
     */
    static async showHttpPrompt(options) {
        await OneSignal.showSlidedownPrompt(options);
    }
    /**
     * Shows a native browser prompt.
     * @PublicApi
     */
    static async showNativePrompt() {
        await awaitOneSignalInitAndSupported();
        await OneSignal.context.promptsManager.internalShowNativePrompt();
    }
    /**
     * Shows a sliding modal prompt on the page for users.
     * @PublicApi
     */
    static async showSlidedownPrompt(options) {
        await awaitOneSignalInitAndSupported();
        await OneSignal.context.promptsManager.internalShowParticularSlidedown(DelayedPromptType.Push, options);
    }
    static async showCategorySlidedown(options) {
        await awaitOneSignalInitAndSupported();
        const isPushEnabled = LocalStorage.getIsPushNotificationsEnabled();
        await OneSignal.context.promptsManager.internalShowCategorySlidedown(Object.assign(Object.assign({}, options), {
            isInUpdateMode: isPushEnabled
        }));
    }
    static async showSmsSlidedown(options) {
        await awaitOneSignalInitAndSupported();
        await OneSignal.context.promptsManager.internalShowSmsSlidedown(Object.assign({}, options));
    }
    static async showEmailSlidedown(options) {
        await awaitOneSignalInitAndSupported();
        await OneSignal.context.promptsManager.internalShowEmailSlidedown(Object.assign({}, options));
    }
    static async showSmsAndEmailSlidedown(options) {
        await awaitOneSignalInitAndSupported();
        await OneSignal.context.promptsManager.internalShowSmsAndEmailSlidedown(Object.assign({}, options));
    }
    /**
     * Prompts the user to subscribe.
     * @PublicApi
     */
    static async registerForPushNotifications(options) {
        if (!OneSignal.initialized) {
            await new Promise((resolve, _reject) => {
                OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, async () => {
                    await InitHelper.registerForPushNotifications(options);
                    return resolve();
                });
            });
        } else
            return await InitHelper.registerForPushNotifications(options);
    }
    /**
     * Returns a promise that resolves to the browser's current notification permission as
     *    'default', 'granted', or 'denied'.
     * @param callback A callback function that will be called when the browser's current notification permission
     *           has been obtained, with one of 'default', 'granted', or 'denied'.
     * @PublicApi
     */
    static async getNotificationPermission(onComplete) {
        await awaitOneSignalInitAndSupported();
        return OneSignal.privateGetNotificationPermission(onComplete);
    }
    static async privateGetNotificationPermission(onComplete) {
        const permission = await OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId);
        if (onComplete)
            onComplete(permission);
        return permission;
    }
    /**
     * @PublicApi
     */
    static async getTags(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getTags', callback);
        const {
            appId
        } = await Database.getAppConfig();
        const {
            deviceId
        } = await Database.getSubscription();
        if (!deviceId) {
            // TODO: Throw an error here in future v2; for now it may break existing client implementations.
            Log.info(new NotSubscribedError(NotSubscribedReason.NoDeviceId));
            return null;
        }
        const {
            tags
        } = await OneSignalApi.getPlayer(appId, deviceId);
        executeCallback(callback, tags);
        return tags;
    }
    /**
     * @PublicApi
     */
    static async sendTag(key, value, callback) {
        const tag = {};
        tag[key] = value;
        return await OneSignal.sendTags(tag, callback);
    }
    /**
     * @PublicApi
     */
    static async sendTags(tags, callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('sendTags', tags, callback);
        if (!tags || Object.keys(tags).length === 0) {
            // TODO: Throw an error here in future v2; for now it may break existing client implementations.
            Log.info(new InvalidArgumentError('tags', InvalidArgumentReason.Empty));
            return null;
        }
        // Our backend considers false as removing a tag, so convert false -> "false" to allow storing as a value
        Object.keys(tags).forEach(key => {
            if (tags[key] === false)
                tags[key] = "false";
        });
        await this.context.updateManager.sendTagsUpdate(tags);
        executeCallback(callback, tags);
        return tags;
    }
    /**
     * @PublicApi
     */
    static async deleteTag(tag) {
        return await OneSignal.deleteTags([tag]);
    }
    /**
     * @PublicApi
     */
    static async deleteTags(tags, callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('deleteTags', tags, callback);
        if (!ValidatorUtils.isValidArray(tags))
            throw new InvalidArgumentError('tags', InvalidArgumentReason.Malformed);
        if (tags.length === 0) {
            // TODO: Throw an error here in future v2; for now it may break existing client implementations.
            Log.info(new InvalidArgumentError('tags', InvalidArgumentReason.Empty));
        }
        const tagsToSend = {};
        for (const tag of tags) {
            tagsToSend[tag] = '';
        }
        const deletedTags = await OneSignal.sendTags(tagsToSend);
        if (deletedTags) {
            const deletedTagKeys = Object.keys(deletedTags);
            executeCallback(callback, deletedTagKeys);
            return deletedTagKeys;
        }
        return [];
    }
    /**
     * @PublicApi
     */
    static async setExternalUserId(externalUserId, authHash) {
        await awaitOneSignalInitAndSupported();
        logMethodCall("setExternalUserId");
        await OneSignal.privateSetExternalUserId(externalUserId, authHash);
    }
    static async privateSetExternalUserId(externalUserId, authHash) {
        AuthHashOptionsValidatorHelper.throwIfInvalidAuthHash(authHash, "authHash");
        await OneSignal.database.setExternalUserId(externalUserId, authHash);
        await OneSignal.context.updateManager.sendExternalUserIdUpdate(externalUserId, authHash);
    }
    /**
     * @PublicApi
     */
    static async getExternalUserId() {
        await awaitOneSignalInitAndSupported();
        logMethodCall("getExternalUserId");
        return await OneSignal.database.getExternalUserId();
    }
    /**
     * @PublicApi
     */
    static async removeExternalUserId() {
        await awaitOneSignalInitAndSupported();
        logMethodCall("removeExternalUserId");
        await OneSignal.privateSetExternalUserId(undefined);
    }
    /**
     * @PublicApi
     */
    static async addListenerForNotificationOpened(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('addListenerForNotificationOpened', callback);
        OneSignal.emitter.once(OneSignal.EVENTS.NOTIFICATION_CLICKED, notification => {
            executeCallback(callback, notification);
        });
        if (OneSignal.config) {
            EventHelper.fireStoredNotificationClicks(OneSignal.config.pageUrl || OneSignal.config.userConfig.pageUrl);
        }
    }
    /**
     * @PublicApi
     * @Deprecated
     */
    static async getIdsAvailable(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getIdsAvailable', callback);
        const {
            deviceId,
            subscriptionToken
        } = await Database.getSubscription();
        const bundle = {
            userId: deviceId,
            registrationId: subscriptionToken
        };
        executeCallback(callback, bundle);
        return bundle;
    }
    /**
     * Returns a promise that resolves to true if all required conditions
     * for push messaging are met; otherwise resolves to false.
     * @param callback A callback function that will be called when the current subscription status has been obtained.
     * @PublicApi
     */
    static async isPushNotificationsEnabled(callback) {
        await awaitOneSignalInitAndSupported();
        return OneSignal.privateIsPushNotificationsEnabled(callback);
    }
    static async privateIsPushNotificationsEnabled(callback) {
        logMethodCall('isPushNotificationsEnabled', callback);
        const context = OneSignal.context;
        const subscriptionState = await context.subscriptionManager.getSubscriptionState();
        executeCallback(callback, subscriptionState.subscribed && !subscriptionState.optedOut);
        return subscriptionState.subscribed && !subscriptionState.optedOut;
    }
    /**
     * @PublicApi
     */
    static async setSubscription(newSubscription) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('setSubscription', newSubscription);
        const appConfig = await Database.getAppConfig();
        const {
            appId
        } = appConfig;
        const subscription = await Database.getSubscription();
        const {
            deviceId
        } = subscription;
        if (!appConfig.appId)
            throw new InvalidStateError(InvalidStateReason.MissingAppId);
        if (!ValidatorUtils.isValidBoolean(newSubscription))
            throw new InvalidArgumentError('newSubscription', InvalidArgumentReason.Malformed);
        if (!deviceId) {
            // TODO: Throw an error here in future v2; for now it may break existing client implementations.
            Log.info(new NotSubscribedError(NotSubscribedReason.NoDeviceId));
            return;
        }
        const options = {
            notification_types: MainHelper.getNotificationTypeFromOptIn(newSubscription)
        };
        const authHash = await Database.getExternalUserIdAuthHash();
        if (!!authHash) {
            options.external_user_id_auth_hash = authHash;
        }
        subscription.optedOut = !newSubscription;
        await OneSignalApi.updatePlayer(appId, deviceId, options);
        await Database.setSubscription(subscription);
        EventHelper.onInternalSubscriptionSet(subscription.optedOut);
        EventHelper.checkAndTriggerSubscriptionChanged();
    }
    /**
     * @PendingPublicApi
     */
    static async isOptedOut(callback) {
        await awaitOneSignalInitAndSupported();
        return OneSignal.internalIsOptedOut(callback);
    }
    static async internalIsOptedOut(callback) {
        logMethodCall('isOptedOut', callback);
        const {
            optedOut
        } = await Database.getSubscription();
        executeCallback(callback, optedOut);
        return optedOut;
    }
    /**
     * Returns a promise that resolves once the manual subscription override has been set.
     * @private
     * @PendingPublicApi
     */
    static async optOut(doOptOut, callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('optOut', doOptOut, callback);
        if (!ValidatorUtils.isValidBoolean(doOptOut))
            throw new InvalidArgumentError('doOptOut', InvalidArgumentReason.Malformed);
        await OneSignal.setSubscription(!doOptOut);
        executeCallback(callback);
    }
    /**
     * Returns a promise that resolves to the stored OneSignal email ID if one is set; otherwise null.
     * @param callback A function accepting one parameter for the OneSignal email ID.
     * @PublicApi
     */
    static async getEmailId(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getEmailId', callback);
        const emailProfile = await Database.getEmailProfile();
        const emailId = emailProfile.subscriptionId;
        executeCallback(callback, emailId);
        return emailId;
    }
    /**
     * Returns a promise that resolves to the stored OneSignal SMS ID if one is set; otherwise undefined.
     * @param callback A function accepting one parameter for the OneSignal SMS ID.
     * @PublicApi
     */
    static async getSMSId(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getSMSId', callback);
        const profile = await Database.getSMSProfile();
        const {
            subscriptionId
        } = profile;
        executeCallback(callback, subscriptionId);
        return subscriptionId;
    }
    /**
     * Returns a promise that resolves to the stored OneSignal user ID if one is set; otherwise null.
     * @param callback A function accepting one parameter for the OneSignal user ID.
     * @PublicApi
     */
    static async getUserId(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getUserId', callback);
        const subscription = await Database.getSubscription();
        const deviceId = subscription.deviceId;
        executeCallback(callback, deviceId);
        return deviceId;
    }
    /**
     * Returns a promise that resolves to the stored push token if one is set; otherwise null.
     * @PublicApi
     */
    static async getRegistrationId(callback) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('getRegistrationId', callback);
        const subscription = await Database.getSubscription();
        const subscriptionToken = subscription.subscriptionToken;
        executeCallback(callback, subscriptionToken);
        return subscriptionToken;
    }
    /**
     * Returns a promise that resolves to false if setSubscription(false) is "in effect". Otherwise returns true.
     * This means a return value of true does not mean the user is subscribed, only that the user did not call
     * setSubcription(false).
     * @private
     * @PublicApi (given to customers)
     */
    static async getSubscription(callback) {
        await awaitOneSignalInitAndSupported();
        return await OneSignal.privateGetSubscription(callback);
    }
    // TO DO: consider renaming to something like privateGetOptedStatus
    static async privateGetSubscription(callback) {
        logMethodCall('getSubscription', callback);
        const subscription = await Database.getSubscription();
        const subscriptionStatus = !subscription.optedOut;
        executeCallback(callback, subscriptionStatus);
        return subscriptionStatus;
    }
    /**
     * @PublicApi
     */
    static async sendSelfNotification(title = 'OneSignal Test Message', message = 'This is an example notification.', url = `${new URL(location.href).origin}?_osp=do_not_open`, icon, data, buttons) {
        await awaitOneSignalInitAndSupported();
        logMethodCall('sendSelfNotification', title, message, url, icon, data, buttons);
        const appConfig = await Database.getAppConfig();
        const subscription = await Database.getSubscription();
        if (!appConfig.appId)
            throw new InvalidStateError(InvalidStateReason.MissingAppId);
        if (!(await OneSignal.isPushNotificationsEnabled()))
            throw new NotSubscribedError(NotSubscribedReason.NoDeviceId);
        if (!ValidatorUtils.isValidUrl(url))
            throw new InvalidArgumentError('url', InvalidArgumentReason.Malformed);
        if (!ValidatorUtils.isValidUrl(icon, {
                allowEmpty: true,
                requireHttps: true
            }))
            throw new InvalidArgumentError('icon', InvalidArgumentReason.Malformed);
        if (subscription.deviceId) {
            await OneSignalApi.sendNotification(appConfig.appId, [subscription.deviceId], {
                en: title
            }, {
                en: message
            }, url, icon, data, buttons);
        }
    }
    /**
     * Used to load OneSignal asynchronously from a webpage
     * Allows asynchronous function queuing while the SDK loads in the browser with <script src="..." async/>
     * @PublicApi
     * @param item - Ether a function or an arry with a OneSignal function name followed by it's parameters
     * @Example
     *  OneSignal.push(["functionName", param1, param2]);
     *  OneSignal.push(function() { OneSignal.functionName(param1, param2); });
     */
    static push(item) {
        ProcessOneSignalPushCalls.processItem(OneSignal, item);
    }
    /**
     * Used to subscribe to OneSignal events such as "subscriptionChange"
     * Fires each time the event occurs
     * @param event - Event name to subscribe to
     * @param listener - Listener to fire when event happens
     * @PublicApi
     */
    static on(event, listener) {
        return this.emitter.on(event, listener);
    }
    /**
     * Used to un-subscribe from OneSignal events such as "subscriptionChange"
     * @param event - Event name to un-subscribe from
     * @param listener - Event listener to remove from the collection for a specified event
     * @PublicApi
     */
    static off(event, listener) {
        return this.emitter.off(event, listener);
    }
    /**
     * Used to subscribe to OneSignal events such as "subscriptionChange"
     * Fires only once
     * @param event - Event name to subscribe to
     * @param listener - Listener to fire when event happens
     * @PublicApi
     */
    static once(event, listener) {
        return this.emitter.once(event, listener);
    }
    static async sendOutcome(outcomeName, outcomeWeight) {
        const config = OneSignal.config.userConfig.outcomes;
        if (!config) {
            Log.error(`Could not send ${outcomeName}. No outcomes config found.`);
            return;
        }
        const outcomesHelper = new OutcomesHelper(OneSignal.config.appId, config, outcomeName, false);
        if (typeof outcomeWeight !== "undefined" && typeof outcomeWeight !== "number") {
            Log.error("Outcome weight can only be a number if present.");
            return;
        }
        if (!await outcomesHelper.beforeOutcomeSend()) {
            return;
        }
        const outcomeAttribution = await outcomesHelper.getAttribution();
        await outcomesHelper.send({
            type: outcomeAttribution.type,
            notificationIds: outcomeAttribution.notificationIds,
            weight: outcomeWeight
        });
    }
    static async sendUniqueOutcome(outcomeName) {
        const config = OneSignal.config.userConfig.outcomes;
        if (!config) {
            Log.error(`Could not send ${outcomeName}. No outcomes config found.`);
            return;
        }
        const outcomesHelper = new OutcomesHelper(OneSignal.config.appId, config, outcomeName, true);
        if (!await outcomesHelper.beforeOutcomeSend()) {
            return;
        }
        const outcomeAttribution = await outcomesHelper.getAttribution();
        if (outcomeAttribution.type === OutcomeAttributionType.NotSupported) {
            Log.warn("You are on a free plan. Please upgrade to use this functionality.");
            return;
        }
        // all notifs in attribution window
        const {
            notificationIds
        } = outcomeAttribution;
        // only new notifs that ought to be attributed
        const newNotifsToAttributeWithOutcome = await outcomesHelper.getNotifsToAttributeWithUniqueOutcome(notificationIds);
        if (!outcomesHelper.shouldSendUnique(outcomeAttribution, newNotifsToAttributeWithOutcome)) {
            Log.warn(`'${outcomeName}' was already reported for all notifications.`);
            return;
        }
        await outcomesHelper.send({
            type: outcomeAttribution.type,
            notificationIds: newNotifsToAttributeWithOutcome,
        });
    }
}
OneSignal.VERSION = Environment.version();
OneSignal._VERSION = Environment.version();
OneSignal.sdkEnvironment = SdkEnvironment;
OneSignal._notificationOpenedCallbacks = [];
OneSignal._idsAvailable_callback = [];
OneSignal._defaultLaunchURL = null;
OneSignal.config = null;
OneSignal._sessionInitAlreadyRunning = false;
OneSignal._isNotificationEnabledCallback = [];
OneSignal._subscriptionSet = true;
OneSignal.modalUrl = null;
OneSignal._windowWidth = 650;
OneSignal._windowHeight = 568;
OneSignal._isNewVisitor = false;
OneSignal._channel = null;
OneSignal.timedLocalStorage = TimedLocalStorage;
OneSignal.initialized = false;
OneSignal._didLoadITILibrary = false;
OneSignal.notifyButton = null;
OneSignal.store = LimitStore;
OneSignal.environment = Environment;
OneSignal.database = Database;
OneSignal.event = Event;
OneSignal.browser = bowser;
OneSignal.slidedown = null;
OneSignal.log = Log;
OneSignal.api = OneSignalApi;
OneSignal.indexedDb = IndexedDb;
OneSignal.mainHelper = MainHelper;
OneSignal.subscriptionHelper = SubscriptionHelper;
OneSignal.httpHelper = HttpHelper;
OneSignal.eventHelper = EventHelper;
OneSignal.initHelper = InitHelper;
OneSignal.pendingInit = true;
OneSignal.emitter = new Emitter();
OneSignal.cache = {};
/**
 * The additional path to the worker file.
 *
 * Usually just the filename (in case the file is named differently), but also supports cases where the folder
 * is different.
 *
 * However, the init options 'path' should be used to specify the folder path instead since service workers will not
 * auto-update correctly on HTTPS site load if the config init options 'path' is not set.
 */
OneSignal.SERVICE_WORKER_UPDATER_PATH = 'OneSignalSDKUpdaterWorker.js';
OneSignal.SERVICE_WORKER_PATH = 'OneSignalSDKWorker.js';
/**
 * By default, the service worker is expected to be accessible at the root scope. If the service worker is only
 * available with in a sub-directory, SERVICE_WORKER_PARAM must be changed to the sub-directory (with a trailing
 * slash). This would allow pages to function correctly as not to block the service worker ready call, which would
 * hang indefinitely if we requested root scope registration but the service was only available in a child scope.
 */
OneSignal.SERVICE_WORKER_PARAM = {
    scope: '/'
};
OneSignal._LOGGING = false;
OneSignal.LOGGING = false;
OneSignal._usingNativePermissionHook = false;
OneSignal._initCalled = false;
OneSignal.__initAlreadyCalled = false;
OneSignal.checkAndWipeUserSubscription = function() {};
OneSignal.DeviceRecord = DeviceRecord;
OneSignal.SecondaryChannelDeviceRecord = SecondaryChannelDeviceRecord;
OneSignal.notificationPermission = NotificationPermission;
/**
 * Used by Rails-side HTTP popup. Must keep the same name.
 * @InternalApi
 */
OneSignal._initHttp = HttpHelper.initHttp;
/**
 * Used by Rails-side HTTP popup. Must keep the same name.
 * @InternalApi
 */
OneSignal._initPopup = () => OneSignal.subscriptionPopup.subscribe();
OneSignal.POSTMAM_COMMANDS = {
    CONNECTED: 'connect',
    REMOTE_NOTIFICATION_PERMISSION: 'postmam.remoteNotificationPermission',
    REMOTE_DATABASE_GET: 'postmam.remoteDatabaseGet',
    REMOTE_DATABASE_GET_ALL: 'postmam.remoteDatabaseGetAll',
    REMOTE_DATABASE_PUT: 'postmam.remoteDatabasePut',
    REMOTE_DATABASE_REMOVE: 'postmam.remoteDatabaseRemove',
    REMOTE_OPERATION_COMPLETE: 'postman.operationComplete',
    REMOTE_RETRIGGER_EVENT: 'postmam.remoteRetriggerEvent',
    MODAL_LOADED: 'postmam.modalPrompt.loaded',
    MODAL_PROMPT_ACCEPTED: 'postmam.modalPrompt.accepted',
    MODAL_PROMPT_REJECTED: 'postmam.modalPrompt.canceled',
    POPUP_LOADED: 'postmam.popup.loaded',
    POPUP_ACCEPTED: 'postmam.popup.accepted',
    POPUP_REJECTED: 'postmam.popup.canceled',
    POPUP_CLOSING: 'postman.popup.closing',
    REMOTE_NOTIFICATION_PERMISSION_CHANGED: 'postmam.remoteNotificationPermissionChanged',
    IFRAME_POPUP_INITIALIZE: 'postmam.iframePopupInitialize',
    UNSUBSCRIBE_FROM_PUSH: 'postmam.unsubscribeFromPush',
    SET_SESSION_COUNT: 'postmam.setSessionCount',
    REQUEST_HOST_URL: 'postmam.requestHostUrl',
    WINDOW_TIMEOUT: 'postmam.windowTimeout',
    FINISH_REMOTE_REGISTRATION: 'postmam.finishRemoteRegistration',
    FINISH_REMOTE_REGISTRATION_IN_PROGRESS: 'postmam.finishRemoteRegistrationInProgress',
    POPUP_BEGIN_MESSAGEPORT_COMMS: 'postmam.beginMessagePortComms',
    SERVICEWORKER_COMMAND_REDIRECT: 'postmam.command.redirect',
    MARK_PROMPT_DISMISSED: 'postmam.markPromptDismissed',
    IS_SUBSCRIBED: 'postmam.isSubscribed',
    UNSUBSCRIBE_PROXY_FRAME: 'postman.unsubscribeProxyFrame',
    GET_EVENT_LISTENER_COUNT: 'postmam.getEventListenerCount',
    SERVICE_WORKER_STATE: 'postmam.serviceWorkerState',
    GET_WORKER_VERSION: 'postmam.getWorkerVersion',
    SUBSCRIPTION_EXPIRATION_STATE: 'postmam.subscriptionExpirationState',
    PROCESS_EXPIRING_SUBSCRIPTIONS: 'postmam.processExpiringSubscriptions',
    GET_SUBSCRIPTION_STATE: 'postmam.getSubscriptionState',
    SESSION_UPSERT: 'postmam.sessionUpsert',
    SESSION_DEACTIVATE: 'postmam.sessionDeactivate',
    ARE_YOU_VISIBLE_REQUEST: 'postmam.areYouVisibleRequest',
    ARE_YOU_VISIBLE_RESPONSE: 'postmam.areYouVisibleResponse',
};
OneSignal.EVENTS = {
    /**
     * Occurs when the user clicks the "Continue" or "No Thanks" button on the HTTP popup or HTTPS modal prompt.
     * For HTTP sites (and HTTPS sites using the modal prompt), this event is fired before the native permission
     * prompt is shown. This event is mostly used for HTTP sites.
     */
    CUSTOM_PROMPT_CLICKED: 'customPromptClick',
    /**
     * Occurs when the user clicks "Allow" or "Block" on the native permission prompt on Chrome, Firefox, or Safari.
     * This event is used for both HTTP and HTTPS sites and occurs after the user actually grants notification
     * permissions for the site. Occurs before the user is actually subscribed to push notifications.
     */
    NATIVE_PROMPT_PERMISSIONCHANGED: 'notificationPermissionChange',
    /**
     * Occurs after the user is officially subscribed to push notifications. The service worker is fully registered
     * and activated and the user is eligible to receive push notifications at any point after this.
     */
    SUBSCRIPTION_CHANGED: 'subscriptionChange',
    /**
     * Occurs after a POST call to OneSignal's server to send the welcome notification has completed. The actual
     * notification arrives shortly after.
     */
    WELCOME_NOTIFICATION_SENT: 'sendWelcomeNotification',
    /**
     * Occurs when a notification is displayed.
     */
    NOTIFICATION_DISPLAYED: 'notificationDisplay',
    /**
     * Occurs when a notification is dismissed by the user either clicking 'X' or clearing all notifications
     * (available in Android). This event is NOT called if the user clicks the notification's body or any of the
     * action buttons.
     */
    NOTIFICATION_DISMISSED: 'notificationDismiss',
    /**
     * New event replacing legacy addNotificationOpenedHandler(). Used when the notification was clicked.
     */
    NOTIFICATION_CLICKED: 'notificationClick',
    /**
     * Occurs after the document ready event fires and, for HTTP sites, the iFrame to subdomain.onesignal.com has
     * loaded.
     * Before this event, IndexedDB access is not possible for HTTP sites.
     */
    SDK_INITIALIZED: 'initializeInternal',
    /**
     * Occurs after the SDK finishes its final internal initialization. The final initialization event.
     */
    SDK_INITIALIZED_PUBLIC: 'initialize',
    /**
     * Occurs after the user subscribes to push notifications and a new user entry is created on OneSignal's server,
     * and also occurs when the user begins a new site session and the last_session and last_active is updated on
     * OneSignal's server.
     */
    REGISTERED: 'register',
    /**
     * Occurs as the HTTP popup is closing.
     */
    POPUP_CLOSING: 'popupClose',
    /**
     * Occurs when the native permission prompt is displayed.
     */
    PERMISSION_PROMPT_DISPLAYED: 'permissionPromptDisplay',
    /**
     * For internal testing only. Used for all sorts of things.
     */
    TEST_INIT_OPTION_DISABLED: 'testInitOptionDisabled',
    TEST_WOULD_DISPLAY: 'testWouldDisplay',
    TEST_FINISHED_ALLOW_CLICK_HANDLING: 'testFinishedAllowClickHandling',
    POPUP_WINDOW_TIMEOUT: 'popupWindowTimeout',
    SESSION_STARTED: "os.sessionStarted",
};
LegacyManager.ensureBackwardsCompatibility(OneSignal);
Log.info(`%cOneSignal Web SDK loaded (version ${OneSignal._VERSION},
  ${SdkEnvironment.getWindowEnv().toString()} environment).`, getConsoleStyle('bold'));
Log.debug(`Current Page URL: ${typeof location === "undefined" ? "NodeJS" : location.href}`);
Log.debug(`Browser Environment: ${bowser.name} ${bowser.version}`);
//# sourceMappingURL=OneSignal.js.map