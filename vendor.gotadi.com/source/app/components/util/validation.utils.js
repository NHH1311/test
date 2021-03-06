(function() {
    /*jshint bitwise: false*/
    'use strict';

    angular
        .module('B2B2CGatewayApp')
        .factory('ValidationUtils', ValidationUtils);

    ValidationUtils.$inject = ['$log', '$uibModal', '$translate', '$state', 'DataService', 'TRANS_TIME_OUT', 'DialogService', 'GlobalSrv'];

    function ValidationUtils($log, $uibModal, $translate, $state, DataService, TRANS_TIME_OUT, DialogService, GlobalSrv) {

        var service = {
            checkSearchTimeout: checkSearchTimeout,
            checkBookingTimeout: checkBookingTimeout

                ,
            validateFlightSearch: validateFlightSearch

                ,
            isMobileDevice: isMobileDevice,
            isIE: isIE
        };

        var modalInstance = null;

        var resetModal = function() {
            modalInstance = null;
        };

        var toSearch = function() {
            resetModal();
            $state.go('flight-search');
        };

        return service;


        function isMobileDevice() {
            var isMobile = false; //initiate as false
            // device detection
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

            return isMobile;
        }

        function isIE() {
            // var isIE = false; //initiate as false

            var userAgent = navigator.userAgent;
            return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;

            // $log.log('iversion = ' + v);
            // return isIE;
        }

        /** Below is a function that will return a numerical value of which Internet Explorer the user is on. If on Microsoft Edge it returns the number 12.
         * https://stackoverflow.com/questions/31757852/how-can-i-detect-internet-explorer-ie-and-microsoft-edge-using-javascript/32107845
         * **/
        function Check_Version() {
            var rv = -1; // Return value assumes failure.

            if (navigator.appName == 'Microsoft Internet Explorer') {

                var ua = navigator.userAgent,
                    re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

                if (re.exec(ua) !== null) {
                    rv = parseFloat(RegExp.$1);
                }
            } else if (navigator.appName == "Netscape") {
                /// in IE 11 the navigator.appVersion says 'trident'
                /// in Edge the navigator.appVersion does not say trident
                if (navigator.appVersion.indexOf('Trident') === -1) rv = 12;
                else rv = 11;
            }

            return rv;
        }




        function checkBookingTimeout(bookingModel, paymentModel, ignoreTimeout) {
            // ignoreTimeout: true -> ignore timeout check, only check for dirty link

            var message = 'Th??ng tin booking ???? b??? thay ?????i. Qu?? kh??ch vui l??ng ti???n h??nh t??m ki???m l???i chuy???n bay v?? ?????t l???i v??.';

            var duration = moment.duration(moment(new Date()).diff(moment(DataService.getStartTransactionTime())));
            var minutes = duration.asMinutes();

            if (bookingModel && bookingModel.bookingNumber && ((minutes < TRANS_TIME_OUT) || ignoreTimeout)) {
                return true;
            } else {

                var error = {
                    "title": "Trang h???t hi???u l???c",
                    "message": message
                };

                if (modalInstance !== null) return;
                modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/dialogs/timeout.dialog.html',
                    controller: 'TimeoutDialogController',
                    controllerAs: 'vm',
                    resolve: {
                        translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('login');
                            return $translate.refresh();
                        }],
                        error: function() {
                            return error;
                        }
                    }
                });
                modalInstance.result.then(
                    resetModal,
                    resetModal
                );

                return false;
            }
        }

        function checkSearchTimeout(searchOptions, searchResult) {
            var message = 'Gi?? c??c chuy???n bay th?????ng xuy??n thay ?????i. Qu?? kh??ch vui l??ng load l???i trang ????? ch???c ch???n r???ng gi?? b???n ??ang th???y l?? m???i nh???t.';

            var duration = moment.duration(moment(new Date()).diff(moment(DataService.getStartTransactionTime())));
            var minutes = duration.asMinutes();

            if (searchOptions && searchOptions.searchType && minutes < TRANS_TIME_OUT) {
                return true;
            } else {

                var error = {
                    "title": "Trang h???t hi???u l???c",
                    "message": message
                };

                if (modalInstance !== null) return;
                modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/dialogs/timeout.dialog.html',
                    controller: 'TimeoutDialogController',
                    controllerAs: 'vm',
                    resolve: {
                        translatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('login');
                            return $translate.refresh();
                        }],
                        error: function() {
                            return error;
                        }
                    }
                });
                modalInstance.result.then(
                    resetModal,
                    resetModal
                );

                return false;
            }
        }

        function validateFlightSearch(searchOptions) {
            // VALIDATION
            if (searchOptions.searchType == 'roundtrip') {
                if (moment(searchOptions.departureDate, 'DD-MM-YYYY').diff(moment(searchOptions.returnDate, 'DD-MM-YYYY')) > 0) {
                    DialogService.openAlertDialog({
                        "title": "Error",
                        "message": "Ng??y ?????n ph???i sau Ng??y Kh???i H??nh."
                    });
                    return false;
                }
            }
            if (searchOptions.toAirPort == searchOptions.fromAirPort) {
                DialogService.openAlertDialog({
                    "title": "Error",
                    "message": "??i???m Kh???i H??nh v?? ??i???m ?????n ph???i kh??c nhau."
                });
                return false;
            }

            // validate passenger quantity
            var passengerValid = false;
            $log.log("searchOptions.adultNo=" + searchOptions.adultNo);
            $log.log("searchOptions.childrenNo=" + searchOptions.childrenNo);
            $log.log("searchOptions.newBornNo=" + searchOptions.newBornNo);
            if (parseInt(searchOptions.adultNo) == 1) {
                if (parseInt(searchOptions.childrenNo) <= 4 && parseInt(searchOptions.newBornNo) <= parseInt(searchOptions.adultNo)) {
                    passengerValid = true;
                }
            } else if (parseInt(searchOptions.adultNo) <= 9) {
                if ((parseInt(searchOptions.childrenNo) + parseInt(searchOptions.adultNo) <= 9) && (parseInt(searchOptions.newBornNo) <= parseInt(searchOptions.adultNo))) {
                    passengerValid = true;
                }
            }
            if (!passengerValid) {
                DialogService.openAlertDialog({
                    "title": "Error",
                    "message": "S??? h??nh kh??ch kh??ng tho??? m??n qui ?????nh ?????t v??!"
                });
                return false;
            }

            // validate airports
            var vnAirports = GlobalSrv.getVnAirports();
            var destMatch = false;
            var orgMatch = false;

            angular.forEach(vnAirports, function(item) {
                if (searchOptions.toAirPort == item.code) {
                    destMatch = true;
                }
            });

            angular.forEach(vnAirports, function(item) {
                if (searchOptions.fromAirPort == item.code) {
                    orgMatch = true;
                }
            });

            if (searchOptions.dtype == 'international') {
                if (destMatch && orgMatch) {
                    DialogService.openAlertDialog({
                        "title": "Error",
                        "message": "B???n ph???i nh???p ??i???m kh???i h??nh ho???c ??i???m ?????n qu???c t???."
                    });
                    return false;
                }
            }


            // OK
            return true;
        }
    }
})();