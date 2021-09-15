(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var f, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        g;
    if ("function" == typeof Object.setPrototypeOf) g = Object.setPrototypeOf;
    else {
        var m;
        a: {
            var da = {
                    a: !0
                },
                ea = {};
            try {
                ea.__proto__ = da;
                m = ea.a;
                break a
            } catch (a) {}
            m = !1
        }
        g = m ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var fa = g,
        n = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (fa) fa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Jc = b.prototype
        },
        p = this || self,
        ha = function() {},
        ia = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        r = function(a) {
            var b = ia(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = "closure_uid_" + (1E9 * Math.random() >>>
            0),
        ja = 0,
        ka = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        la = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        v = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = ka : v = la;
            return v.apply(null, arguments)
        },
        w = function(a, b) {
            a =
                a.split(".");
            var c = p;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        ma = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Jc = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Mc = function(d, e, h) {
                for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
                return b.prototype[e].apply(d, k)
            }
        },
        x = function(a) {
            return a
        };
    var chrome = chrome || window.chrome || {};
    chrome.cast = chrome.cast || {};
    chrome.cast.media = chrome.cast.media || {};
    var mojo = {};
    chrome.cast.VERSION = [1, 2];
    w("chrome.cast.VERSION", chrome.cast.VERSION);
    chrome.cast.Lc = !0;
    w("chrome.cast.usingPresentationApi", chrome.cast.Lc);
    chrome.cast.gb = function(a, b) {
        this.credentials = a;
        this.credentialsType = void 0 === b ? "web" : b
    };
    w("chrome.cast.CredentialsData", chrome.cast.gb);
    chrome.cast.Error = function(a, b, c) {
        this.code = a;
        this.description = b || null;
        this.details = c || null
    };
    w("chrome.cast.Error", chrome.cast.Error);
    chrome.cast.Ib = function(a) {
        this.platform = a;
        this.packageId = this.url = null
    };
    w("chrome.cast.SenderApplication", chrome.cast.Ib);
    chrome.cast.Image = function(a) {
        this.url = a;
        this.width = this.height = null
    };
    w("chrome.cast.Image", chrome.cast.Image);
    chrome.cast.Volume = function(a, b) {
        this.level = void 0 === a ? null : a;
        this.muted = void 0 === b ? null : b
    };
    w("chrome.cast.Volume", chrome.cast.Volume);
    chrome.cast.na = {
        CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
        ORIGIN_SCOPED: "origin_scoped",
        PAGE_SCOPED: "page_scoped"
    };
    w("chrome.cast.AutoJoinPolicy", chrome.cast.na);
    chrome.cast.qa = {
        CREATE_SESSION: "create_session",
        CAST_THIS_TAB: "cast_this_tab"
    };
    w("chrome.cast.DefaultActionPolicy", chrome.cast.qa);
    chrome.cast.Y = {
        VIDEO_OUT: "video_out",
        AUDIO_OUT: "audio_out",
        VIDEO_IN: "video_in",
        AUDIO_IN: "audio_in",
        MULTIZONE_GROUP: "multizone_group"
    };
    w("chrome.cast.Capability", chrome.cast.Y);
    chrome.cast.D = {
        CANCEL: "cancel",
        TIMEOUT: "timeout",
        API_NOT_INITIALIZED: "api_not_initialized",
        INVALID_PARAMETER: "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
        EXTENSION_MISSING: "extension_missing",
        RECEIVER_UNAVAILABLE: "receiver_unavailable",
        SESSION_ERROR: "session_error",
        CHANNEL_ERROR: "channel_error",
        LOAD_MEDIA_FAILED: "load_media_failed"
    };
    w("chrome.cast.ErrorCode", chrome.cast.D);
    chrome.cast.T = {
        AVAILABLE: "available",
        UNAVAILABLE: "unavailable"
    };
    w("chrome.cast.ReceiverAvailability", chrome.cast.T);
    chrome.cast.Jb = {
        CHROME: "chrome",
        IOS: "ios",
        ANDROID: "android"
    };
    w("chrome.cast.SenderPlatform", chrome.cast.Jb);
    chrome.cast.Ea = {
        CAST: "cast",
        DIAL: "dial",
        HANGOUT: "hangout",
        CUSTOM: "custom"
    };
    w("chrome.cast.ReceiverType", chrome.cast.Ea);
    chrome.cast.ib = {
        RUNNING: "running",
        STOPPED: "stopped",
        ERROR: "error"
    };
    w("chrome.cast.DialAppState", chrome.cast.ib);
    chrome.cast.Eb = {
        CAST: "cast",
        STOP: "stop"
    };
    w("chrome.cast.ReceiverAction", chrome.cast.Eb);
    chrome.cast.N = {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected",
        STOPPED: "stopped"
    };
    w("chrome.cast.SessionStatus", chrome.cast.N);
    chrome.cast.Xb = {
        ATTENUATION: "attenuation",
        FIXED: "fixed",
        MASTER: "master"
    };
    w("chrome.cast.VolumeControlType", chrome.cast.Xb);

    function y(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, y);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    ma(y, Error);
    y.prototype.name = "CustomError";
    var z = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        y.call(this, c + a[d])
    };
    ma(z, y);
    z.prototype.name = "AssertionError";
    var na = function(a, b) {
        throw new z("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var oa = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++) h in e && b.call(c, e[h], h, a)
    };

    function pa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    var A;
    var qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        wa = /[\x00&<>"']/;
    var B;
    a: {
        var xa = p.navigator;
        if (xa) {
            var ya = xa.userAgent;
            if (ya) {
                B = ya;
                break a
            }
        }
        B = ""
    }
    var C = function(a) {
        return -1 != B.indexOf(a)
    };
    var E = function(a, b, c) {
        this.g = c === D ? a : ""
    };
    E.prototype.toString = function() {
        return this.g.toString()
    };
    var za = function(a) {
            if (a instanceof E && a.constructor === E) return a.g;
            na("expected object of type SafeHtml, got '" + a + "' of type " + ia(a));
            return "type_error:SafeHtml"
        },
        D = {},
        Aa = new E(p.trustedTypes && p.trustedTypes.emptyHTML || "", 0, D);
    var Ba = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Ca = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = za(Aa);
            return !b.parentElement
        });
    var Ea = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = p.document.createElement("div");
            return a.replace(Da, function(d, e) {
                var h = b[d];
                if (h) return h;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (h = String.fromCharCode(e)));
                if (!h) {
                    h = d + " ";
                    if (void 0 === A) {
                        e = null;
                        var k = p.trustedTypes;
                        if (k && k.createPolicy) {
                            try {
                                e = k.createPolicy("goog#html", {
                                    createHTML: x,
                                    createScript: x,
                                    createScriptURL: x
                                })
                            } catch (l) {
                                p.console && p.console.error(l.message)
                            }
                            A = e
                        } else A = e
                    }
                    h = (e = A) ? e.createHTML(h) : h;
                    h = new E(h, null, D);
                    if (c.tagName && Ba[c.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + c.tagName + ".");
                    if (Ca())
                        for (; c.lastChild;) c.removeChild(c.lastChild);
                    c.innerHTML = za(h);
                    h = c.firstChild.nodeValue.slice(0, -1)
                }
                return b[d] = h
            })
        },
        Fa = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        Da = /&([^;\s<&]+);?/g;
    chrome.cast.bb = function(a, b, c, d, e) {
        this.sessionRequest = a;
        this.sessionListener = b;
        this.receiverListener = c;
        this.autoJoinPolicy = d || chrome.cast.na.TAB_AND_ORIGIN_SCOPED;
        this.defaultActionPolicy = e || chrome.cast.qa.CREATE_SESSION;
        this.customDialLaunchCallback = null;
        this.invisibleSender = !1;
        this.additionalSessionRequests = []
    };
    w("chrome.cast.ApiConfig", chrome.cast.bb);
    chrome.cast.lb = function(a, b) {
        this.appName = a;
        this.launchParameter = b || null
    };
    w("chrome.cast.DialRequest", chrome.cast.lb);
    chrome.cast.jb = function(a, b, c) {
        this.receiver = a;
        this.appState = b;
        this.extraData = c || null
    };
    w("chrome.cast.DialLaunchData", chrome.cast.jb);
    chrome.cast.kb = function(a, b) {
        this.doLaunch = a;
        this.launchParameter = b || null
    };
    w("chrome.cast.DialLaunchResponse", chrome.cast.kb);
    chrome.cast.Kb = function(a, b, c, d, e) {
        c = void 0 === c ? chrome.cast.timeout.requestSession : c;
        this.appId = a;
        this.capabilities = Array.isArray(b) ? b : [chrome.cast.Y.VIDEO_OUT, chrome.cast.Y.AUDIO_OUT];
        this.requestSessionTimeout = c;
        this.dialRequest = this.language = null;
        this.androidReceiverCompatible = void 0 === d ? !1 : d;
        this.credentialsData = void 0 === e ? null : e
    };
    w("chrome.cast.SessionRequest", chrome.cast.Kb);
    chrome.cast.Db = function(a, b, c, d) {
        this.label = a;
        a = b;
        wa.test(a) && (-1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;")));
        this.friendlyName = a;
        this.capabilities = c || [];
        this.volume = d || null;
        this.receiverType = chrome.cast.Ea.CAST;
        this.displayStatus = this.isActiveInput = null
    };
    w("chrome.cast.Receiver", chrome.cast.Db);
    chrome.cast.Fb = function(a, b) {
        this.statusText = a;
        this.appImages = b;
        this.showStop = null
    };
    w("chrome.cast.ReceiverDisplayStatus", chrome.cast.Fb);
    chrome.cast.Ha = function() {
        this.requestSession = 6E4;
        this.getDialAppInfo = this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
    };
    w("chrome.cast.Timeout", chrome.cast.Ha);
    chrome.cast.timeout = new chrome.cast.Ha;
    w("chrome.cast.timeout", chrome.cast.timeout);
    chrome.cast.ab = "auto-join";
    chrome.cast.xb = "cast-session_";
    chrome.cast.media.qb = {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    };
    w("chrome.cast.media.HdrType", chrome.cast.media.qb);
    chrome.cast.media.rb = {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    };
    w("chrome.cast.media.HlsSegmentFormat", chrome.cast.media.rb);
    chrome.cast.media.sb = {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    };
    w("chrome.cast.media.HlsVideoSegmentFormat", chrome.cast.media.sb);
    chrome.cast.media.vb = {
        PAUSE: "pause",
        SEEK: "seek",
        STREAM_VOLUME: "stream_volume",
        STREAM_MUTE: "stream_mute"
    };
    w("chrome.cast.media.MediaCommand", chrome.cast.media.vb);
    chrome.cast.media.Bb = {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    };
    w("chrome.cast.media.QueueType", chrome.cast.media.Bb);
    chrome.cast.media.aa = {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    };
    w("chrome.cast.media.ContainerType", chrome.cast.media.aa);
    chrome.cast.media.I = {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    };
    w("chrome.cast.media.MetadataType", chrome.cast.media.I);
    chrome.cast.media.H = {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    };
    w("chrome.cast.media.PlayerState", chrome.cast.media.H);
    chrome.cast.media.ba = {
        OFF: "REPEAT_OFF",
        ALL: "REPEAT_ALL",
        SINGLE: "REPEAT_SINGLE",
        ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    };
    w("chrome.cast.media.RepeatMode", chrome.cast.media.ba);
    chrome.cast.media.Gb = {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    };
    w("chrome.cast.media.ResumeState", chrome.cast.media.Gb);
    chrome.cast.media.Ga = {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        OTHER: "OTHER"
    };
    w("chrome.cast.media.StreamType", chrome.cast.media.Ga);
    chrome.cast.media.tb = {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    };
    w("chrome.cast.media.IdleReason", chrome.cast.media.tb);
    chrome.cast.media.Sb = {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    };
    w("chrome.cast.media.TrackType", chrome.cast.media.Sb);
    chrome.cast.media.Pb = {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    };
    w("chrome.cast.media.TextTrackType", chrome.cast.media.Pb);
    chrome.cast.media.Lb = {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    };
    w("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Lb);
    chrome.cast.media.Qb = {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    };
    w("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Qb);
    chrome.cast.media.Mb = {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    };
    w("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Mb);
    chrome.cast.media.Nb = {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    };
    w("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Nb);
    chrome.cast.media.Tb = {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW"
    };
    w("chrome.cast.media.UserAction", chrome.cast.media.Tb);
    chrome.cast.media.sa = function() {
        this.customData = null
    };
    w("chrome.cast.media.GetStatusRequest", chrome.cast.media.sa);
    chrome.cast.media.wa = function() {
        this.customData = null
    };
    w("chrome.cast.media.PauseRequest", chrome.cast.media.wa);
    chrome.cast.media.ya = function() {
        this.customData = null
    };
    w("chrome.cast.media.PlayRequest", chrome.cast.media.ya);
    chrome.cast.media.Hb = function() {
        this.customData = this.resumeState = this.currentTime = null
    };
    w("chrome.cast.media.SeekRequest", chrome.cast.media.Hb);
    chrome.cast.media.Fa = function() {
        this.customData = null
    };
    w("chrome.cast.media.StopRequest", chrome.cast.media.Fa);
    chrome.cast.media.Yb = function(a) {
        this.volume = a;
        this.customData = null
    };
    w("chrome.cast.media.VolumeRequest", chrome.cast.media.Yb);
    chrome.cast.media.ub = function(a) {
        this.type = "LOAD";
        this.requestId = 0;
        this.sessionId = null;
        this.media = a;
        this.activeTrackIds = null;
        this.autoplay = !0;
        this.atvCredentialsType = this.atvCredentials = this.credentialsType = this.credentials = void 0;
        this.customData = this.currentTime = null;
        this.queueData = this.playbackRate = void 0
    };
    w("chrome.cast.media.LoadRequest", chrome.cast.media.ub);
    chrome.cast.media.yb = function(a) {
        this.type = "PRECACHE";
        this.requestId = 0;
        this.precacheData = a
    };
    chrome.cast.media.mb = function(a, b) {
        this.requestId = 0;
        this.activeTrackIds = a || null;
        this.textTrackStyle = b || null
    };
    w("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.mb);
    chrome.cast.media.Z = function(a) {
        this.containerType = a = void 0 === a ? chrome.cast.media.aa.GENERIC_CONTAINER : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    w("chrome.cast.media.ContainerMetadata", chrome.cast.media.Z);
    chrome.cast.media.u = function(a) {
        this.metadataType = this.type = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0
    };
    w("chrome.cast.media.MediaMetadata", chrome.cast.media.u);
    chrome.cast.media.ra = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.GENERIC);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0
    };
    n(chrome.cast.media.ra, chrome.cast.media.u);
    w("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.ra);
    chrome.cast.media.ua = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.MOVIE);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0
    };
    n(chrome.cast.media.ua, chrome.cast.media.u);
    w("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.ua);
    chrome.cast.media.Ia = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.TV_SHOW);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0
    };
    n(chrome.cast.media.Ia, chrome.cast.media.u);
    w("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ia);
    chrome.cast.media.va = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.MUSIC_TRACK);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0
    };
    n(chrome.cast.media.va, chrome.cast.media.u);
    w("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.va);
    chrome.cast.media.xa = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.PHOTO);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0
    };
    n(chrome.cast.media.xa, chrome.cast.media.u);
    w("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.xa);
    chrome.cast.media.ma = function() {
        chrome.cast.media.Z.call(this, chrome.cast.media.aa.AUDIOBOOK_CONTAINER);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    n(chrome.cast.media.ma, chrome.cast.media.Z);
    w("chrome.cast.media.AudiobookContainerMetadata", chrome.cast.media.ma);
    chrome.cast.media.la = function() {
        chrome.cast.media.u.call(this, chrome.cast.media.I.AUDIOBOOK_CHAPTER);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.title = this.chapterTitle = void 0
    };
    n(chrome.cast.media.la, chrome.cast.media.u);
    w("chrome.cast.media.AudiobookChapterMediaMetadata", chrome.cast.media.la);
    chrome.cast.media.wb = function(a, b) {
        this.contentId = a;
        this.contentUrl = void 0;
        this.streamType = chrome.cast.media.Ga.BUFFERED;
        this.contentType = b;
        this.metadata = null;
        this.atvEntity = this.entity = void 0;
        this.duration = null;
        this.startAbsoluteTime = void 0;
        this.customData = this.textTrackStyle = this.tracks = null;
        this.userActionStates = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.vmapAdsRequest = this.breakClips = this.breaks = void 0
    };
    w("chrome.cast.media.MediaInfo", chrome.cast.media.wb);
    chrome.cast.media.Aa = function(a) {
        this.itemId = null;
        this.media = a;
        this.autoplay = !0;
        this.startTime = 0;
        this.playbackDuration = null;
        this.preloadTime = 0;
        this.customData = this.activeTrackIds = null
    };
    w("chrome.cast.media.QueueItem", chrome.cast.media.Aa);
    chrome.cast.media.hb = "CC1AD845";
    w("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.hb);
    chrome.cast.media.timeout = {};
    chrome.cast.media.timeout.load = 0;
    w("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
    chrome.cast.media.timeout.V = 0;
    w("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.V);
    chrome.cast.media.timeout.play = 0;
    w("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
    chrome.cast.media.timeout.pause = 0;
    w("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
    chrome.cast.media.timeout.seek = 0;
    w("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
    chrome.cast.media.timeout.stop = 0;
    w("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
    chrome.cast.media.timeout.X = 0;
    w("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.X);
    chrome.cast.media.timeout.U = 0;
    w("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.U);
    chrome.cast.media.timeout.A = 0;
    w("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.A);
    chrome.cast.media.Rb = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = null;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = null
    };
    w("chrome.cast.media.Track", chrome.cast.media.Rb);
    chrome.cast.media.Ob = function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
    };
    w("chrome.cast.media.TextTrackStyle", chrome.cast.media.Ob);
    chrome.cast.media.Ab = function(a) {
        this.type = "QUEUE_LOAD";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.startIndex = 0;
        this.repeatMode = chrome.cast.media.ba.OFF;
        this.customData = null
    };
    w("chrome.cast.media.QueueLoadRequest", chrome.cast.media.Ab);
    chrome.cast.media.za = function(a) {
        this.type = "QUEUE_INSERT";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = this.insertBefore = null
    };
    w("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.za);
    chrome.cast.media.Cb = function(a) {
        this.type = "QUEUE_UPDATE";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = null
    };
    w("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.Cb);
    chrome.cast.media.S = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
    };
    w("chrome.cast.media.QueueJumpRequest", chrome.cast.media.S);
    chrome.cast.media.Da = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.repeatMode = this.sessionId = this.requestId = null
    };
    w("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.Da);
    chrome.cast.media.Ba = function(a) {
        this.type = "QUEUE_REMOVE";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = null
    };
    w("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.Ba);
    chrome.cast.media.Ca = function(a) {
        this.type = "QUEUE_REORDER";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = this.insertBefore = null
    };
    w("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.Ca);
    chrome.cast.media.cb = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.isEmbedded = void 0
    };
    w("chrome.cast.media.Break", chrome.cast.media.cb);
    chrome.cast.media.eb = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    w("chrome.cast.media.BreakClip", chrome.cast.media.eb);
    chrome.cast.media.Vb = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    w("chrome.cast.media.VastAdsRequest", chrome.cast.media.Vb);
    chrome.cast.media.fb = function() {
        this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0
    };
    w("chrome.cast.media.BreakStatus", chrome.cast.media.fb);
    chrome.cast.media.ta = function(a, b, c, d) {
        this.start = a;
        this.end = b;
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    w("chrome.cast.media.LiveSeekableRange", chrome.cast.media.ta);
    chrome.cast.media.zb = function(a, b, c, d, e, h, k) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = h;
        this.startTime = k;
        this.containerMetadata = void 0
    };
    w("chrome.cast.media.QueueData", chrome.cast.media.zb);
    chrome.cast.media.Ub = function(a) {
        this.userAction = a;
        this.customData = void 0
    };
    w("chrome.cast.media.UserActionState", chrome.cast.media.Ub);
    chrome.cast.media.Wb = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    w("chrome.cast.media.VideoInformation", chrome.cast.media.Wb);
    chrome.cast.media.h = function(a, b) {
        this.sessionId = a;
        this.mediaSessionId = b;
        this.media = null;
        this.videoInfo = this.queueData = void 0;
        this.playbackRate = 1;
        this.playerState = chrome.cast.media.H.IDLE;
        this.currentTime = 0;
        this.g = -1;
        this.supportedMediaCommands = [];
        this.volume = new chrome.cast.Volume;
        this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
        this.repeatMode = chrome.cast.media.ba.OFF;
        this.breakStatus = void 0;
        this.l = !1;
        this.j = [];
        this.liveSeekableRange =
            void 0
    };
    f = chrome.cast.media.h.prototype;
    f.V = function(a, b, c) {
        a || (a = new chrome.cast.media.sa);
        F.s(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.V)
    };
    f.play = function(a, b, c) {
        this.Oa(F, a, b, c)
    };
    f.Oa = function(a, b, c, d) {
        b || (b = new chrome.cast.media.ya);
        a.s(this, "PLAY", b, c, d, chrome.cast.media.timeout.play)
    };
    f.pause = function(a, b, c) {
        this.Na(F, a, b, c)
    };
    f.Na = function(a, b, c, d) {
        b || (b = new chrome.cast.media.wa);
        a.s(this, "PAUSE", b, c, d, chrome.cast.media.timeout.pause)
    };
    f.seek = function(a, b, c) {
        F.s(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
    };
    f.stop = function(a, b, c) {
        a || (a = new chrome.cast.media.Fa);
        F.s(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
    };
    f.X = function(a, b, c) {
        F.s(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.X)
    };
    f.U = function(a, b, c) {
        F.s(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.U)
    };
    f.pc = function(a, b, c) {
        F.s(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.A)
    };
    f.oc = function(a, b, c) {
        F.s(this, "QUEUE_INSERT", new chrome.cast.media.za([a]), b, c, chrome.cast.media.timeout.A)
    };
    f.zc = function(a, b, c) {
        F.s(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.A)
    };
    f.uc = function(a, b) {
        var c = new chrome.cast.media.S;
        c.jump = -1;
        F.s(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.A)
    };
    f.tc = function(a, b) {
        var c = new chrome.cast.media.S;
        c.jump = 1;
        F.s(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.A)
    };
    f.qc = function(a, b, c) {
        if (!(0 > G(this, a))) {
            var d = new chrome.cast.media.S;
            d.currentItemId = a;
            F.s(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.A)
        }
    };
    f.yc = function(a, b, c) {
        var d = new chrome.cast.media.Da;
        d.repeatMode = a;
        F.s(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.A)
    };
    f.wc = function(a, b, c) {
        F.s(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.A)
    };
    f.vc = function(a, b, c) {
        0 > G(this, a) || F.s(this, "QUEUE_REMOVE", new chrome.cast.media.Ba([a]), b, c, chrome.cast.media.timeout.A)
    };
    f.xc = function(a, b, c) {
        F.s(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.A)
    };
    f.sc = function(a, b, c, d) {
        var e = G(this, a);
        if (!(0 > e))
            if (0 > b) d && d(new chrome.cast.Error(chrome.cast.D.INVALID_PARAMETER));
            else if (e == b) c && c();
        else {
            var h = null;
            b = b > e ? b + 1 : b;
            b < this.items.length && (h = this.items[b]);
            a = new chrome.cast.media.Ca([a]);
            a.insertBefore = h ? h.itemId : null;
            F.s(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.A)
        }
    };
    f.Kc = function(a) {
        return -1 < this.supportedMediaCommands.indexOf(a)
    };
    f.ic = function() {
        if (this.playerState == chrome.cast.media.H.PLAYING && 0 <= this.g) {
            var a = this.currentTime + (Date.now() - this.g) / 1E3 * this.playbackRate;
            this.media && null != this.media.duration && a > this.media.duration && -1 != this.media.duration && (a = this.media.duration);
            0 > a && (a = 0);
            return a
        }
        return this.currentTime
    };
    f.fc = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakTime) return this.playerState == chrome.cast.media.H.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakTime
    };
    f.ec = function() {
        if (this.breakStatus && void 0 !== this.breakStatus.currentBreakClipTime) return this.playerState == chrome.cast.media.H.PLAYING && 0 <= this.g ? this.breakStatus.currentBreakClipTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakClipTime
    };
    f.hc = function() {
        if (this.liveSeekableRange && void 0 !== this.liveSeekableRange.start && void 0 !== this.liveSeekableRange.end) {
            if (this.playerState == chrome.cast.media.H.PLAYING && 0 <= this.g) {
                var a = (Date.now() - this.g) / 1E3,
                    b = new chrome.cast.media.ta;
                b.isMovingWindow = this.liveSeekableRange.isMovingWindow;
                b.isLiveDone = this.liveSeekableRange.isLiveDone;
                b.start = b.isMovingWindow ? this.liveSeekableRange.start + a : this.liveSeekableRange.start;
                b.end = b.isLiveDone ? this.liveSeekableRange.end : this.liveSeekableRange.end + a;
                return b
            }
            return this.liveSeekableRange
        }
    };
    f.ea = function(a) {
        this.O(F, a)
    };
    f.O = function(a, b) {
        a.ac(this, b)
    };
    f.ha = function(a) {
        this.R(F, a)
    };
    f.R = function(a, b) {
        F.Bc(this, b)
    };
    var G = function(a, b) {
        return pa(a.items, function(c) {
            return c.itemId == b
        })
    };
    w("chrome.cast.media.Media", chrome.cast.media.h);
    chrome.cast.media.h.prototype.removeUpdateListenerWithContext = chrome.cast.media.h.prototype.R;
    chrome.cast.media.h.prototype.removeUpdateListener = chrome.cast.media.h.prototype.ha;
    chrome.cast.media.h.prototype.addUpdateListenerWithContext = chrome.cast.media.h.prototype.O;
    chrome.cast.media.h.prototype.addUpdateListener = chrome.cast.media.h.prototype.ea;
    chrome.cast.media.h.prototype.getEstimatedLiveSeekableRange = chrome.cast.media.h.prototype.hc;
    chrome.cast.media.h.prototype.getEstimatedBreakClipTime = chrome.cast.media.h.prototype.ec;
    chrome.cast.media.h.prototype.getEstimatedBreakTime = chrome.cast.media.h.prototype.fc;
    chrome.cast.media.h.prototype.getEstimatedTime = chrome.cast.media.h.prototype.ic;
    chrome.cast.media.h.prototype.supportsCommand = chrome.cast.media.h.prototype.Kc;
    chrome.cast.media.h.prototype.queueMoveItemToNewIndex = chrome.cast.media.h.prototype.sc;
    chrome.cast.media.h.prototype.queueReorderItems = chrome.cast.media.h.prototype.xc;
    chrome.cast.media.h.prototype.queueRemoveItem = chrome.cast.media.h.prototype.vc;
    chrome.cast.media.h.prototype.queueRemoveItems = chrome.cast.media.h.prototype.wc;
    chrome.cast.media.h.prototype.queueSetRepeatMode = chrome.cast.media.h.prototype.yc;
    chrome.cast.media.h.prototype.queueJumpToItem = chrome.cast.media.h.prototype.qc;
    chrome.cast.media.h.prototype.queueNext = chrome.cast.media.h.prototype.tc;
    chrome.cast.media.h.prototype.queuePrev = chrome.cast.media.h.prototype.uc;
    chrome.cast.media.h.prototype.queueUpdateItems = chrome.cast.media.h.prototype.zc;
    chrome.cast.media.h.prototype.queueAppendItem = chrome.cast.media.h.prototype.oc;
    chrome.cast.media.h.prototype.queueInsertItems = chrome.cast.media.h.prototype.pc;
    chrome.cast.media.h.prototype.editTracksInfo = chrome.cast.media.h.prototype.U;
    chrome.cast.media.h.prototype.setVolume = chrome.cast.media.h.prototype.X;
    chrome.cast.media.h.prototype.stop = chrome.cast.media.h.prototype.stop;
    chrome.cast.media.h.prototype.seek = chrome.cast.media.h.prototype.seek;
    chrome.cast.media.h.prototype.pauseWithContext = chrome.cast.media.h.prototype.Na;
    chrome.cast.media.h.prototype.pause = chrome.cast.media.h.prototype.pause;
    chrome.cast.media.h.prototype.playWithContext = chrome.cast.media.h.prototype.Oa;
    chrome.cast.media.h.prototype.play = chrome.cast.media.h.prototype.play;
    chrome.cast.media.h.prototype.getStatus = chrome.cast.media.h.prototype.V;
    var F = null;
    var Ga = function(a, b, c) {
        this.sessionId = a;
        this.namespaceName = b;
        this.message = c
    };
    var Ha = function(a, b) {
        this.type = "SET_VOLUME";
        this.requestId = 0;
        this.volume = a;
        this.expectedVolume = b || null
    };
    var Ia = function(a) {
        this.type = "STOP";
        this.requestId = 0;
        this.sessionId = a || null
    };
    chrome.cast.i = function(a, b, c, d, e) {
        this.sessionId = a;
        this.appId = b;
        this.displayName = c;
        this.statusText = null;
        this.appImages = d;
        this.receiver = e;
        this.senderApps = [];
        this.namespaces = [];
        this.media = [];
        this.status = chrome.cast.N.CONNECTED;
        this.transportId = ""
    };
    f = chrome.cast.i.prototype;
    f.Ic = function(a, b, c) {
        this.Wa(F, a, b, c)
    };
    f.Wa = function(a, b, c, d) {
        b = new Ha(new chrome.cast.Volume(b, null), this.receiver.volume);
        a.setReceiverVolume(this.sessionId, b, c, d)
    };
    f.Hc = function(a, b, c) {
        this.Va(F, a, b, c)
    };
    f.Va = function(a, b, c, d) {
        a = new Ha(new chrome.cast.Volume(null, b), this.receiver.volume);
        F.setReceiverVolume(this.sessionId, a, c, d)
    };
    f.getDialAppInfo = function(a, b) {
        this.Ma(F, a, b)
    };
    f.Ma = function(a, b, c) {
        a.getDialAppInfo(b, c)
    };
    f.kc = function(a, b) {
        F.leaveSession(this.sessionId, a, b)
    };
    f.stop = function(a, b) {
        this.Ya(F, a, b)
    };
    f.Ya = function(a, b, c) {
        a.Sa(new Ia(this.sessionId), b, c, chrome.cast.timeout.stopSession)
    };
    f.sendMessage = function(a, b, c, d) {
        this.Ua(F, a, b, c, d)
    };
    f.Ua = function(a, b, c, d, e) {
        a.Ec(new Ga(this.sessionId, b, c), d, e)
    };
    f.ea = function(a) {
        this.O(F, a)
    };
    f.O = function(a, b) {
        a.cc(this.sessionId, b)
    };
    f.ha = function(a) {
        this.R(F, a)
    };
    f.R = function(a, b) {
        a.Dc(this.sessionId, b)
    };
    f.bc = function(a, b) {
        this.Ka(F, a, b)
    };
    f.Ka = function(a, b, c) {
        a.Zb(this.sessionId, b, c)
    };
    f.ca = function(a) {
        this.Ja(F, a)
    };
    f.Ja = function(a, b) {
        a.ca(this.sessionId, b)
    };
    f.fa = function(a) {
        this.Pa(F, a)
    };
    f.Pa = function(a, b) {
        a.fa(this.sessionId, b)
    };
    f.Cc = function(a, b) {
        this.Qa(F, a, b)
    };
    f.Qa = function(a, b, c) {
        a.Ac(this.sessionId, b, c)
    };
    f.lc = function(a, b, c) {
        a.sessionId = this.sessionId;
        F.Ta(a, "LOAD", b, c)
    };
    f.rc = function(a, b, c) {
        a.sessionId = this.sessionId;
        F.Ta(a, "QUEUE_LOAD", b, c)
    };
    w("chrome.cast.Session", chrome.cast.i);
    chrome.cast.i.prototype.queueLoad = chrome.cast.i.prototype.rc;
    chrome.cast.i.prototype.loadMedia = chrome.cast.i.prototype.lc;
    chrome.cast.i.prototype.removeMessageListenerWithContext = chrome.cast.i.prototype.Qa;
    chrome.cast.i.prototype.removeMessageListener = chrome.cast.i.prototype.Cc;
    chrome.cast.i.prototype.removeMediaListenerWithContext = chrome.cast.i.prototype.Pa;
    chrome.cast.i.prototype.removeMediaListener = chrome.cast.i.prototype.fa;
    chrome.cast.i.prototype.addMediaListenerWithContext = chrome.cast.i.prototype.Ja;
    chrome.cast.i.prototype.addMediaListener = chrome.cast.i.prototype.ca;
    chrome.cast.i.prototype.addMessageListenerWithContext = chrome.cast.i.prototype.Ka;
    chrome.cast.i.prototype.addMessageListener = chrome.cast.i.prototype.bc;
    chrome.cast.i.prototype.removeUpdateListenerWithContext = chrome.cast.i.prototype.R;
    chrome.cast.i.prototype.removeUpdateListener = chrome.cast.i.prototype.ha;
    chrome.cast.i.prototype.addUpdateListenerWithContext = chrome.cast.i.prototype.O;
    chrome.cast.i.prototype.addUpdateListener = chrome.cast.i.prototype.ea;
    chrome.cast.i.prototype.sendMessageWithContext = chrome.cast.i.prototype.Ua;
    chrome.cast.i.prototype.sendMessage = chrome.cast.i.prototype.sendMessage;
    chrome.cast.i.prototype.stopWithContext = chrome.cast.i.prototype.Ya;
    chrome.cast.i.prototype.stop = chrome.cast.i.prototype.stop;
    chrome.cast.i.prototype.leave = chrome.cast.i.prototype.kc;
    chrome.cast.i.prototype.getDialAppInfoWithContext = chrome.cast.i.prototype.Ma;
    chrome.cast.i.prototype.getDialAppInfo = chrome.cast.i.prototype.getDialAppInfo;
    chrome.cast.i.prototype.setReceiverMutedWithContext = chrome.cast.i.prototype.Va;
    chrome.cast.i.prototype.setReceiverMuted = chrome.cast.i.prototype.Hc;
    chrome.cast.i.prototype.setReceiverVolumeLevelWithContext = chrome.cast.i.prototype.Wa;
    chrome.cast.i.prototype.setReceiverVolumeLevel = chrome.cast.i.prototype.Ic;
    var H = "StopIteration" in p ? p.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        I = function() {};
    I.prototype.next = function() {
        throw H;
    };
    I.prototype.F = function() {
        return this
    };
    var Ja = function(a) {
            if (a instanceof I) return a;
            if ("function" == typeof a.F) return a.F(!1);
            if (r(a)) {
                var b = 0,
                    c = new I;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw H;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        J = function(a, b) {
            if (r(a)) try {
                oa(a, b, void 0)
            } catch (c) {
                if (c !== H) throw c;
            } else {
                a = Ja(a);
                try {
                    for (;;) b.call(void 0, a.next(), void 0, a)
                } catch (c) {
                    if (c !== H) throw c;
                }
            }
        };
    var K = function(a, b) {
        this.g = {};
        this.o = [];
        this.l = this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof K)
                for (L(a), c = a.o.concat(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    K.prototype.P = function() {
        L(this);
        for (var a = [], b = 0; b < this.o.length; b++) a.push(this.g[this.o[b]]);
        return a
    };
    K.prototype.clear = function() {
        this.g = {};
        this.l = this.j = this.o.length = 0
    };
    K.prototype.remove = function(a) {
        return M(this.g, a) ? (delete this.g[a], this.j--, this.l++, this.o.length > 2 * this.j && L(this), !0) : !1
    };
    var L = function(a) {
        if (a.j != a.o.length) {
            for (var b = 0, c = 0; b < a.o.length;) {
                var d = a.o[b];
                M(a.g, d) && (a.o[c++] = d);
                b++
            }
            a.o.length = c
        }
        if (a.j != a.o.length) {
            var e = {};
            for (c = b = 0; b < a.o.length;) d = a.o[b], M(e, d) || (a.o[c++] = d, e[d] = 1), b++;
            a.o.length = c
        }
    };
    K.prototype.get = function(a, b) {
        return M(this.g, a) ? this.g[a] : b
    };
    K.prototype.set = function(a, b) {
        M(this.g, a) || (this.j++, this.o.push(a), this.l++);
        this.g[a] = b
    };
    K.prototype.F = function(a) {
        L(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new I;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.o.length) throw H;
            var h = d.o[b++];
            return a ? h : d.g[h]
        };
        return e
    };
    var M = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var N = function(a, b) {
        this.requestId = a;
        this.m = b;
        this.Za = null
    };
    N.prototype.j = function() {};
    var Ka = function() {
            this.g = new K
        },
        La = function(a, b) {
            a.g.set(b.requestId, b);
            b.Za = setTimeout(function() {
                a.g.remove(b.requestId);
                b.j()
            }, b.m)
        },
        Ma = function(a, b) {
            var c = a.g.get(b);
            if (!c) return null;
            clearTimeout(c.Za);
            a.g.remove(b);
            return c
        };
    var O = function(a, b, c, d) {
        N.call(this, a, d || 6E5);
        this.l = b;
        this.g = c
    };
    n(O, N);
    O.prototype.j = function() {
        this.g(new chrome.cast.Error(chrome.cast.D.TIMEOUT))
    };
    var P = function(a, b, c, d) {
        this.type = a;
        this.message = b;
        this.sequenceNumber = void 0 !== c ? c : -1;
        this.timeoutMillis = d || 0;
        this.clientId = ""
    };
    var Q = function(a) {
            this.l = a;
            this.j = String(Date.now()) + String(Math.floor(1E5 * Math.random()));
            this.g = null
        },
        Na = function(a, b) {
            if (!a.g) return "No active session";
            b.clientId = a.j;
            b = JSON.stringify(b);
            if (32768 < b.length) return "Message length over limit";
            a.g.send(b);
            return null
        };
    Q.prototype.connect = function(a) {
        this.g = a;
        this.g.onmessage = v(this.m, this);
        Na(this, new P("client_connect", this.j))
    };
    Q.prototype.disconnect = function() {
        this.g.close();
        this.g = null
    };
    Q.prototype.m = function(a) {
        a = JSON.parse(a.data);
        if (a.clientId == this.j) this.l.onMessage(a)
    };
    var Oa = function(a, b, c) {
            this.l = a;
            this.j = b;
            this.g = c
        },
        Pa = function(a) {
            var b = "cast-dial:" + a.l,
                c = new URLSearchParams;
            a.j && c.set("dialPostData", a.j);
            a.g && c.set("clientId", a.g);
            (a = c.toString()) && (b += "?" + a);
            return b
        };
    var Qa = function(a, b, c, d, e, h, k, l, q, t, Ya, Za) {
            this.L = a;
            this.g = b || null;
            this.l = c || null;
            this.C = d || null;
            this.G = void 0 !== e ? e : null;
            this.j = h || null;
            this.K = k || null;
            this.J = l || !1;
            this.v = q || null;
            this.m = t || null;
            this.M = Ya ? ["WEB", "ANDROID_TV"] : ["WEB"];
            this.B = Za || null
        },
        Ra = function(a) {
            var b = a.L.map(function(c) {
                var d = "cast:" + c.appId,
                    e = new URLSearchParams;
                c.capabilities && 0 < c.capabilities.length && e.set("capabilities", c.capabilities.join(","));
                a.g && e.set("clientId", a.g);
                a.l && e.set("autoJoinPolicy", a.l);
                a.C && e.set("defaultActionPolicy",
                    a.C);
                null != a.G && e.set("launchTimeout", String(a.G));
                a.J && e.set("invisibleSender", "true");
                a.v && (e.set("broadcastNamespace", a.v), e.set("broadcastId", String(Math.random())));
                a.m && e.set("broadcastMessage", encodeURIComponent(JSON.stringify(a.m)));
                e.set("supportedAppTypes", a.M.join(","));
                c = e.set;
                var h = JSON,
                    k = h.stringify,
                    l = {
                        launchCheckerParams: {}
                    };
                a.B && (l.launchCheckerParams.credentialsData = a.B);
                c.call(e, "appParams", k.call(h, l));
                return d + "?" + e.toString()
            });
            a.j && b.push(Pa(new Oa(a.j, a.K, a.g)));
            return b
        };
    var Sa = function() {
            this.g = {};
            this.j = {}
        },
        Ta = function(a, b, c) {
            var d = a.g[b];
            return d ? (d.status = c, d.media.forEach(function(e) {
                delete a.j[e.sessionId + "#" + e.mediaSessionId]
            }), delete a.g[b], !0) : !1
        },
        Va = function(a, b) {
            var c = a.g[b.sessionId];
            if (c) return c.statusText = b.statusText, c.namespaces = b.namespaces || [], c.receiver.volume = b.receiver.volume, c;
            c = new chrome.cast.i(b.sessionId, b.appId, b.displayName, b.appImages, b.receiver);
            for (var d in b) "media" == d ? c.media = b.media.map(function(e) {
                    e = Ua(a, e);
                    e.m = !1;
                    e.l = !0;
                    return e
                }) :
                b.hasOwnProperty(d) && (c[d] = b[d]);
            return a.g[b.sessionId] = c
        },
        Ua = function(a, b) {
            var c = b.sessionId + "#" + b.mediaSessionId,
                d = a.j[c];
            d || (d = new chrome.cast.media.h(b.sessionId, b.mediaSessionId), a.j[c] = d, (a = a.g[b.sessionId]) && a.media.push(d));
            a = d;
            a.currentItemId = null;
            a.loadingItemId = null;
            a.preloadedItemId = null;
            for (var e in b) "items" != e && b.hasOwnProperty(e) && ("volume" == e ? (a.volume.level = b.volume.level, a.volume.muted = b.volume.muted) : a[e] = b[e]);
            e = ba(["idleReason", "extendedStatus"]);
            for (c = e.next(); !c.done; c = e.next()) c =
                c.value, b.hasOwnProperty(c) || (a[c] = null);
            "currentTime" in b && (a.g = Date.now());
            if (a.playerState == chrome.cast.media.H.IDLE && null == a.loadingItemId) a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null;
            else if (b.hasOwnProperty("items") && b.items) {
                e = [];
                var h = a.items;
                c = {};
                if (h)
                    for (var k = 0; k < h.length; k++) c[h[k].itemId] = k;
                b = ba(b.items);
                for (h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    if (!h.media) {
                        k = h.itemId;
                        var l = a.items ? a.items[c[k]] : null;
                        l && l.media ? h.media = l.media : k == a.currentItemId &&
                            a.media && (h.media = a.media)
                    }
                    k = e;
                    l = k.push;
                    var q = void 0,
                        t = new chrome.cast.media.Aa(h.media);
                    for (q in h) h.hasOwnProperty(q) && (t[q] = h[q]);
                    l.call(k, t)
                }
                a.items = e
            }
            return d
        },
        Wa = function(a, b) {
            delete a.j[b.sessionId + "#" + b.mediaSessionId];
            if (a = a.g[b.sessionId]) b = a.media.indexOf(b), -1 != b && a.media.splice(b, 1)
        };
    var R = function() {
        this.v = this.v
    };
    R.prototype.v = !1;
    R.prototype.isDisposed = function() {
        return this.v
    };
    var Xa = C("Opera"),
        $a = C("Gecko") && !(-1 != B.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        ab = -1 != B.toLowerCase().indexOf("webkit") && !C("Edge");
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {};
    var bb = function(a, b) {
        if ("function" !== typeof a)
            if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0)
    };
    var S = function(a, b, c) {
        R.call(this);
        this.G = null != c ? a.bind(c) : a;
        this.C = b;
        this.m = null;
        this.j = !1;
        this.l = 0;
        this.g = null
    };
    n(S, R);
    S.prototype.B = function(a) {
        this.m = arguments;
        this.g || this.l ? this.j = !0 : T(this)
    };
    S.prototype.stop = function() {
        this.g && (p.clearTimeout(this.g), this.g = null, this.j = !1, this.m = null)
    };
    S.prototype.pause = function() {
        this.l++
    };
    S.prototype.resume = function() {
        this.l--;
        this.l || !this.j || this.g || (this.j = !1, T(this))
    };
    var T = function(a) {
        a.g = bb(function() {
            a.g = null;
            a.j && !a.l && (a.j = !1, T(a))
        }, a.C);
        var b = a.m;
        a.m = null;
        a.G.apply(null, b)
    };
    var cb = C("Safari") && !((C("Chrome") || C("CriOS")) && !C("Edge") || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android")) && !(C("iPhone") && !C("iPod") && !C("iPad") || C("iPad") || C("iPod"));
    var db = {},
        U = null,
        eb = $a || ab && !cb || Xa || "function" == typeof p.btoa,
        fb = function(a) {
            if (eb) var b = p.btoa(a);
            else {
                b = [];
                for (var c = 0, d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    255 < e && (b[c++] = e & 255, e >>= 8);
                    b[c++] = e
                }
                a = void 0;
                void 0 === a && (a = 0);
                if (!U)
                    for (U = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var h = c.concat(d[e].split(""));
                        db[e] = h;
                        for (var k = 0; k < h.length; k++) {
                            var l = h[k];
                            void 0 === U[l] && (U[l] = k)
                        }
                    }
                a = db[a];
                c = [];
                for (d = 0; d < b.length; d +=
                    3) {
                    var q = b[d],
                        t = (e = d + 1 < b.length) ? b[d + 1] : 0;
                    l = (h = d + 2 < b.length) ? b[d + 2] : 0;
                    k = q >> 2;
                    q = (q & 3) << 4 | t >> 4;
                    t = (t & 15) << 2 | l >> 6;
                    l &= 63;
                    h || (l = 64, e || (t = 64));
                    c.push(a[k], a[q], a[t] || "", a[l] || "")
                }
                b = c.join("")
            }
            return b
        };
    var gb = function(a) {
        if (a.P && "function" == typeof a.P) return a.P();
        if ("string" === typeof a) return a.split("");
        if (r(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    };
    var hb = function() {
            this.g = new K
        },
        ib = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (Object.prototype.hasOwnProperty.call(a, u) && a[u] || (a[u] = ++ja)) : b.substr(0, 1) + a
        };
    f = hb.prototype;
    f.add = function(a) {
        this.g.set(ib(a), a)
    };
    f.removeAll = function(a) {
        a = gb(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    f.remove = function(a) {
        return this.g.remove(ib(a))
    };
    f.clear = function() {
        this.g.clear()
    };
    f.contains = function(a) {
        a = ib(a);
        return M(this.g.g, a)
    };
    f.P = function() {
        return this.g.P()
    };
    f.F = function() {
        return this.g.F(!1)
    };
    var V = function() {
            this.B = new Q(this);
            this.g = null;
            this.J = new Sa;
            this.j = 0;
            this.M = new Ka;
            this.C = new K;
            this.pa = !1;
            this.v = new K;
            this.K = new K;
            this.L = [];
            this.ob = this.dc.bind(this);
            this.l = null;
            this.G = 0;
            this.m = null;
            this.nb = new S(this.pb, 200, this);
            this.oa = null
        },
        jb = function(a) {
            var b = new chrome.cast.Error(chrome.cast.D.INVALID_PARAMETER, "Already requesting session");
            a && a(b)
        },
        W = function(a, b, c, d) {
            c && La(a.M, c);
            void 0 !== d ? b.sequenceNumber = d : (b.sequenceNumber = a.j, a.j = (a.j + 1) % 9007199254740992);
            d = Na(a.B, b);
            c && d && (a =
                Ma(a.M, b.sequenceNumber), b = new chrome.cast.Error(chrome.cast.D.INVALID_PARAMETER, d), (a = a.g) && a(b))
        };
    V.prototype.W = function(a, b) {
        var c = this;
        F = this;
        this.g = a;
        a.invisibleSender || (a = new PresentationRequest(X(this)), a.getAvailability().then(function(d) {
            d.onchange = function() {
                c.pa = !!d.value;
                c.g.receiverListener(d.value ? chrome.cast.T.AVAILABLE : chrome.cast.T.UNAVAILABLE)
            };
            d.onchange()
        }, function() {
            c.g.receiverListener(chrome.cast.T.AVAILABLE)
        }), a.onconnectionavailable = function(d) {
            Y(c, d.connection)
        }, this.oa = (p.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.ab).then(function(d) {
                Y(c, d)
            },
            ha));
        b && b(void 0)
    };
    V.prototype.ja = function(a) {
        a.navigator.presentation.defaultRequest = this.oa
    };
    var Y = function(a, b, c) {
            c = void 0 === c ? null : c;
            b.onclose = function(d) {
                a.l = null;
                switch (d.reason) {
                    case "closed":
                        kb(a, chrome.cast.N.DISCONNECTED);
                        break;
                    case "error":
                        c && (d = new chrome.cast.Error(chrome.cast.D.SESSION_ERROR), c && c(d))
                }
            };
            b.onterminate = function() {
                kb(a, chrome.cast.N.STOPPED)
            };
            "connected" == b.state ? a.B.connect(b) : b.onconnect = function() {
                a.B.connect(b)
            }
        },
        nb = function(a) {
            var b = Z;
            lb.has(a.type) && b.pa && (b.m ? (a.sessionId = b.m, mb(b, null, a.type, a, function() {}, function() {})) : b.nb.B(X(b, void 0, "urn:x-cast:com.google.cast.media",
                a)))
        };
    V.prototype.pb = function(a) {
        (a = (new PresentationRequest(a)).getAvailability()) && a.then(function() {}, function() {})
    };
    V.prototype.requestSession = function(a, b, c) {
        var d = this;
        this.l ? jb(b) : (c = X(this, c), this.l = a, (new PresentationRequest(c)).start().then(function(e) {
            Y(d, e, b)
        }).catch(function(e) {
            d.l = null;
            e = new chrome.cast.Error("AbortError" == e.name || "NotAllowedError" == e.name ? chrome.cast.D.CANCEL : chrome.cast.D.SESSION_ERROR);
            b && b(e)
        }))
    };
    var X = function(a, b, c, d) {
        var e = null,
            h = null,
            k = b || a.g.sessionRequest,
            l = k.dialRequest;
        l && (e = l.appName, (h = l.launchParameter) && !h.match(ob) && (h = fb(h)));
        var q = [];
        q.push({
            appId: k.appId,
            capabilities: k.capabilities
        });
        b || oa(a.g.additionalSessionRequests, function(t) {
            q.push({
                appId: t.appId,
                capabilities: t.capabilities
            })
        });
        return Ra(new Qa(q, a.B.j, a.g.autoJoinPolicy, a.g.defaultActionPolicy, k.requestSessionTimeout, e, h, a.g.invisibleSender, c, d, k.androidReceiverCompatible, k.credentialsData))
    };
    V.prototype.Ta = function(a, b, c, d) {
        var e = this;
        this.G++;
        mb(this, null, b, a, function(h) {
            e.G--;
            h.l = !0;
            c && c(h)
        }, function(h) {
            e.G--;
            d(h)
        }, chrome.cast.media.timeout.load)
    };
    V.prototype.s = function(a, b, c, d, e, h) {
        var k = this;
        mb(this, a, b, c, function(l) {
            k.La(l);
            d && d(void 0)
        }, e, h)
    };
    var mb = function(a, b, c, d, e, h, k) {
        d.type = c;
        null != b && (d.mediaSessionId = b.mediaSessionId, d.sessionId = b.sessionId);
        a.Sa(d, function(l) {
            l.status && 1 == l.status.length ? e && e(l.status[0]) : (l = new chrome.cast.Error(chrome.cast.D.SESSION_ERROR), h && h(l))
        }, h, k)
    };
    f = V.prototype;
    f.setReceiverVolume = function(a, b, c, d) {
        b.sessionId = a;
        W(this, new P("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), new O(this.j, c, d, chrome.cast.timeout.sendCustomMessage))
    };
    f.getDialAppInfo = function(a, b) {
        W(this, new P("dial_app_info", void 0, void 0, chrome.cast.timeout.getDialAppInfo), new O(this.j, a, b, chrome.cast.timeout.sendCustomMessage))
    };
    f.ia = function(a) {
        var b = this;
        (new PresentationRequest(X(this))).reconnect(chrome.cast.xb + a).then(function(c) {
            Y(b, c)
        }, ha)
    };
    f.leaveSession = function(a, b, c) {
        W(this, new P("leave_session", a, void 0, chrome.cast.timeout.leaveSession), new O(this.j, b, c, chrome.cast.timeout.leaveSession))
    };
    f.Ec = function(a, b, c) {
        W(this, new P("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), new O(this.j, b, c, chrome.cast.timeout.sendCustomMessage))
    };
    f.Sa = function(a, b, c, d) {
        W(this, new P("v2_message", a, void 0, d), new O(this.j, b, c, d))
    };
    var pb = function(a, b, c) {
        var d = a.get(b);
        d || (d = new hb, a.set(b, d));
        d.add(c)
    };
    f = V.prototype;
    f.cc = function(a, b) {
        pb(this.C, a, b)
    };
    f.Dc = function(a, b) {
        (a = this.C.get(a)) && a.remove(b)
    };
    f.da = function(a) {
        this.L.push(a)
    };
    f.ga = function(a) {
        a = this.L.indexOf(a);
        0 <= a && this.L.splice(a, 1)
    };
    f.Zb = function(a, b, c) {
        var d = this.v.get(a);
        d || (d = new K, this.v.set(a, d));
        a = d.get(b);
        a || (a = new hb, d.set(b, a));
        a.add(c)
    };
    f.Ac = function(a, b, c) {
        (a = this.v.get(a)) && (b = a.get(b)) && b.remove(c)
    };
    f.ca = function(a, b) {
        pb(this.K, a, b)
    };
    f.fa = function(a, b) {
        (a = this.K.get(a)) && a.remove(b)
    };
    f.ac = function(a, b) {
        -1 == a.j.indexOf(b) && a.j.push(b)
    };
    f.Bc = function(a, b) {
        b = a.j.indexOf(b); - 1 != b && a.j.splice(b, 1)
    };
    f.La = function(a) {
        if (a.l) {
            var b = a.playerState != chrome.cast.media.H.IDLE || null != a.loadingItemId;
            a.j.forEach(function(d) {
                d(b)
            });
            b || Wa(this.J, a)
        } else if (!(0 < this.G)) {
            a.l = !0;
            var c = this.K.get(a.sessionId);
            c && J(c.F(), function(d) {
                d(a)
            })
        }
    };
    f.dc = function(a) {
        return Ua(this.J, a)
    };
    var kb = function(a, b) {
        if (a.m) {
            var c = a.m;
            a.m = null;
            a.B.disconnect();
            var d = b != chrome.cast.N.STOPPED;
            Ta(a.J, c, b) && (a.v.remove(c), a.K.remove(c), b = a.C.get(c)) && (a.C.remove(c), J(b.F(), function(e) {
                e(d)
            }))
        }
    };
    V.prototype.onMessage = function(a) {
        switch (a.type) {
            case "new_session":
            case "update_session":
                a.message = Va(this.J, a.message);
                break;
            case "v2_message":
                var b = a.message;
                b && "MEDIA_STATUS" == b.type && b.status && (b.status = b.status.map(this.ob))
        }
        if (b = Ma(this.M, a.sequenceNumber)) "error" == a.type ? (b = b.g) && b(a.message) : (b = b.l) && b(a.message);
        if (b = a.message) switch (a.type) {
            case "receiver_action":
                qb(this, b);
                break;
            case "new_session":
                this.m = b.sessionId;
                this.l ? (this.l(b), this.l = null) : this.g && this.g.sessionListener(b);
                break;
            case "update_session":
                rb(this, b);
                break;
            case "app_message":
                sb(this, b);
                break;
            case "v2_message":
                "MEDIA_STATUS" == b.type && b.status.forEach(this.La.bind(this));
                break;
            case "custom_dial_launch":
                tb(this, a.sequenceNumber, b)
        }
    };
    var rb = function(a, b) {
            (a = a.C.get(b.sessionId)) && J(a.F(), function(c) {
                c(!0)
            })
        },
        qb = function(a, b) {
            a.L.forEach(function(c) {
                c(b.receiver, b.action)
            })
        },
        sb = function(a, b) {
            (a = a.v.get(b.sessionId)) && (a = a.get(b.namespaceName)) && J(a.F(), function(c) {
                c(b.namespaceName, b.message)
            })
        },
        ub = function(a, b, c) {
            W(a, new P("custom_dial_launch", c, void 0, chrome.cast.timeout.sendCustomMessage), null, b)
        },
        tb = function(a, b, c) {
            a.g.customDialLaunchCallback ? a.g.customDialLaunchCallback(c).then(function(d) {
                    ub(a, b, d)
                }, function() {
                    ub(a, b)
                }) :
                ub(a, b)
        },
        ob = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        lb = new Set(["PRECACHE"]),
        Z = new V;
    chrome.cast.W = function(a, b, c) {
        Z.W(a, b, c)
    };
    w("chrome.cast.initialize", chrome.cast.W);
    chrome.cast.jc = function(a, b, c) {
        var d = new V;
        d.W(a, b, c);
        return d
    };
    w("chrome.cast.initializeWithContext", chrome.cast.jc);
    chrome.cast.ja = function(a) {
        Z.ja(a)
    };
    w("chrome.cast.setPageContext", chrome.cast.ja);
    chrome.cast.requestSession = function(a, b, c) {
        Z.requestSession(a, b, c)
    };
    w("chrome.cast.requestSession", chrome.cast.requestSession);
    chrome.cast.nc = function(a) {
        nb(new chrome.cast.media.yb(a))
    };
    w("chrome.cast.precache", chrome.cast.nc);
    chrome.cast.ia = function(a) {
        chrome.cast.Ra(Z, a)
    };
    w("chrome.cast.requestSessionById", chrome.cast.ia);
    chrome.cast.Ra = function(a, b) {
        a.ia(b)
    };
    w("chrome.cast.requestSessionByIdWithContext", chrome.cast.Ra);
    chrome.cast.da = function(a) {
        Z.da(a)
    };
    w("chrome.cast.addReceiverActionListener", chrome.cast.da);
    chrome.cast.ga = function(a) {
        Z.ga(a)
    };
    w("chrome.cast.removeReceiverActionListener", chrome.cast.ga);
    chrome.cast.mc = function() {};
    w("chrome.cast.logMessage", chrome.cast.mc);
    chrome.cast.Fc = function(a, b) {
        b()
    };
    w("chrome.cast.setCustomReceivers", chrome.cast.Fc);
    chrome.cast.Gc = function(a, b) {
        b()
    };
    w("chrome.cast.setReceiverDisplayStatus", chrome.cast.Gc);
    chrome.cast.unescape = function(a) {
        return -1 != a.indexOf("&") ? "document" in p ? Ea(a) : Fa(a) : a
    };
    w("chrome.cast.unescape", chrome.cast.unescape);
    chrome.cast.isAvailable = !1;
    w("chrome.cast.isAvailable", chrome.cast.isAvailable);
    chrome.cast.Xa = !1;
    chrome.cast.ka = function() {
        if (!chrome.cast.Xa) {
            chrome.cast.Xa = !0;
            chrome.cast.isAvailable = !0;
            var a = window.__onGCastApiAvailable;
            a && "function" == typeof a && a(!0)
        }
    };
    "complete" == document.readyState ? chrome.cast.ka() : (window.addEventListener("load", chrome.cast.ka, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ka, !1));
}).call(this);