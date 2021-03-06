(function() {
    'use strict';

    angular
        .module('B2B2CGatewayApp')
        .controller('ExternalBookingResultController', ExternalBookingResultController);

    ExternalBookingResultController.$inject = ['$log', '$state', 'DataService', 'CustomerService', 'FlightUtils', 'Base64', 'partnerID'];

    function ExternalBookingResultController($log, $state, DataService, CustomerService, FlightUtils, Base64, partnerID) {

        var vm = this;

        // Dynamic string will be get from URL
        vm.payMethod = 'ViettelPay';
        vm.payType = '';
        vm.partnerID = null;
        vm.backUrl = null;
        vm.errorCode = null;
        vm.returnBookingModel = {};

        // Define states will be display in UI.
        vm.uiStates = {
            paymentRefund: "[ExternalBookingResult] Payment REFUNDED",
            paymentFailed: "[ExternalBookingResult] Payment FAILED",
            paymentSuccess: "[ExternalBookingResult] Payment SUCESS",
            paymentPending: "[ExternalBookingResult] Payment PENDING",
            paymentExpired: "[ExternalBookingResult] Payment EXPIRED",
            paymentSuccessOnprocess: "[ExternalBookingResult] Payment SUCCESS-ONPROGRESS",
            notfound: "[ExternalBookingResult] NOTFOUND",
            error: "[ExternalBookingResult] ERROR",
            loading: "[ExternalBookingResult] LOADING",
        };

        vm.displayType = {
            hotel: "[ExternalBookingResult] HOTEL",
            flight: "[ExternalBookingResult] FLIGHT",
        };

        vm.errorMessageDict = {};


        vm.currentDisplayType = "";

        vm.updateUIState = updateUIState;
        vm.udpateType = udpateType;
        vm.getBooking = getBooking;
        vm.initController = initController;
        vm.initErrorMessageDict = initErrorMessageDict;

        // Set default UI State
        vm.currentUIState = vm.uiStates.loading;

        $log.log('------- ExternalBookingResultController - $state.params:');
        $log.log($state.params);

        vm.parram = $state.params;

        vm.bookingNumber = null;

        vm.initController();

        function initController() {
            try {
                vm.bookingNumber = vm.parram.order_id || vm.parram.booking_number;

                vm.partnerID = vm.parram.partner_id || partnerID;

                vm.backUrl = vm.parram.back_url || "#";

                vm.errorCode = vm.parram.error_code || null;

                $log.log("vm.partnerID");
                $log.log(vm.partnerID);

                switch (vm.partnerID) {
                    case "VIETTEL":
                        vm.payMethod = "ViettelPay";
                        vm.payType = 'v?? ??i???n t???';
                        break;
                    case "LIENVIETBANK":
                        vm.payMethod = "V?? Vi???t";
                        vm.payType = 'v?? ??i???n t???';
                        break;
                    default:
                        vm.payMethod = vm.partnerID;
                        vm.payType = 't??i kho???n';
                        break;
                }

                if (vm.bookingNumber !== null) {
                    // vm.bookingNumber = Base64.decodeString(vm.bookingNumber);
                    vm.getBooking(vm.bookingNumber);
                }
            } catch (error) {
                vm.updateUIState(vm.uiStates.notfound);
            }
            vm.initErrorMessageDict();
        }

        function initErrorMessageDict() {
            vm.errorMessageDict = {
                "INVALID_SIGNATURE": "Sai th??ng tin ch??? k?? ??i???n t??? ",
                "PAY-0001": "T??i kho???n ngu???n kh??ng t???n t???i",
                "PAY-0002": "T??i kho???n ngu???n ???? b??? ????ng",
                "PAY-0003": "T??i kho???n ngu???n ???? b??? kh??a do kh??ch h??ng y??u c???u",
                "PAY-0004": "T??i kho???n ngu???n ???? b??? kh??a b???i h??? th???ng",
                "PAY-0005": "T??i kho???n ngu???n ???? b??? ????ng b??ng",
                "PAY-0006": "T??i kho???n ngu???n ??ang ??? tr???ng th??i ch??? duy???t",
                "PAY-0007": "T??i kho???n ngu???n kh??ng ????? ti???n",
                "PAY-0008": "T??i kho???n ngu???n kh??ng ???????c ph??p ghi n???",
                "PAY-0009": "T??i kho???n th??? h?????ng kh??ng h???p l???",
                "PAY-0010": "T??i kho???n ngu???n tr??ng t??i kho???n th??? h?????ng",
                "PAY-0011": "T??i kho???n ????ng nh???p ???? b??? ????ng ho???c kh??ng t???n t???i. H??? th???ng s??? t??? ?????ng ????ng xu???t",
                "PAY-0012": "T??i kho???n ????ng nh???p ??ang ??? tr???ng th??i ch??? duy???t. H??? th???ng s??? t??? ?????ng ????ng xu???t",
                "PAY-0013": "T??i kho???n ????ng nh???p ???? b??? kh??a. H??? th???ng s??? t??? ?????ng ????ng xu???t",
                "PAY-0014": "Kh??ch h??ng ??ang ??? tr???ng th??i ch??? duy???t. H??? th???ng s??? t??? ?????ng ????ng xu???t",
                "PAY-0015": "Kh??ch h??ng ???? b??? kh??a. H??? th???ng s??? t??? ?????ng ????ng xu???t",
                "PAY-0016": "H??? th???ng ??ang t???m ng???ng cung c???p d???ch v???",
                "PAY-0017": "ch v??? ??ang ???????c n??ng c???p, vui l??ng th??? l???i sau",
                "PAY-0018": "L???i x??? l?? giao d???ch",
                "PAY-0019": "S??? ti???n thanh to??n v?????t qu?? h???n m???c/giao d???ch",
                "PAY-0020": "T??i kho???n ???? th???c hi???n v?????t qu?? h???n m???c/ng??y",
                "PAY-0021": "T??i kho???n th???c hi???n qu?? s??? l???n giao d???ch/ng??y",
                "PAY-0022": "S??? ti???n th???c hi???n nh??? h??n h???n m???c t???i thi???u t??i kho???n",
                "PAY-0023": "S??? ti???n chuy???n v?????t qu?? h???n m???c t???i ??a t??i kho???n th??? h?????ng",
                "PAY-0024": "Th???i gian th???c hi???n giao d???ch ???? h???t",
                "PAY-0025": "Qu?? kh??ch nh???p sai OTP qu?? 3 l???n",
                "PAY-0026": "Giao d???ch c?? m?? " + vm.bookingNumber + " ???? b??? h???y ho???c kh??ng t???n t???i",
                "PAY-0027": "Qu?? kh??ch ???? nh???p sai m???t kh???u 5 l???n, T??i kho???n ????ng nh???p b??? kh??a",
            };
        }


        function getBooking(bookingNumber) {
            CustomerService.getFinalBookingByNumber(bookingNumber).then(function(result) {

                switch (result.supplierType) {
                    case 'HOTEL':
                        handleHotel(result);
                        break;

                    default:
                        handleFlight(result);
                        break;
                }

            }, function error(result) {
                $log.log('flight-search');
                vm.updateUIState(vm.uiStates.notfound);
            });
        }

        function udpateType(type) {
            vm.currentDisplayType = type;
            switch (vm.currentDisplayType) {
                case vm.displayType.hotel:
                    vm.typeName = "ph??ng";
                    break;

                case vm.displayType.flight:
                    vm.typeName = "v??";
                    break;

                default:
                    vm.typeName = "d???ch v???";
                    break;
            }
        }

        function handleHotel(result) {
            vm.udpateType(vm.displayType.hotel);
            vm.bkgroup = result;
            $log.log("+++++ vm.bkgroup = ");
            $log.log(vm.bkgroup);

            vm.selectedHotel = vm.bkgroup.hotelAvailability;
            vm.selectedHotelProduct = vm.bkgroup.hotelAvailability.products[0];
            vm.selectedHotelRoom = vm.bkgroup.hotelAvailability.products[0].rooms[0];

            $log.log("+++ Hotel booking +++");
            //$log.log("selectedHotel=" + JSON.stringify(vm.selectedHotel));
            //$log.log("selectedHotelProduct=" + JSON.stringify(vm.selectedHotelProduct));
            //$log.log("selectedHotelRoom=" + JSON.stringify(vm.selectedHotelRoom));
            $log.log("selectedHotel=" + vm.selectedHotel);
            $log.log(vm.selectedHotel);
            $log.log("selectedHotelProduct=" + vm.selectedHotelProduct);
            $log.log(vm.selectedHotelProduct);
            $log.log("selectedHotelRoom=" + vm.selectedHotelRoom);
            $log.log(vm.selectedHotelRoom);

            var bookingStatus = result.bookingInfo.status;
            var paymentStatus = result.bookingInfo.paymentStatus;
            var issueStatus = result.bookingInfo.issuedStatus;
            var supplierBookingStatus = result.supplierBookingStatus;
            switch (paymentStatus) {
                case "FAILED":
                    vm.updateUIState(vm.uiStates.paymentFailed);
                    break;
                case "SUCCEEDED":
                    if (issueStatus === "SUCCEEDED") {
                        vm.updateUIState(vm.uiStates.paymentSuccess);
                        break;
                    }
                    if (issueStatus === "TICKET_ON_PROCESS") {
                        vm.updateUIState(vm.uiStates.paymentSuccessOnprocess);
                        break;
                    }
                    vm.updateUIState(vm.uiStates.paymentFailed);
                    break;
                case "REFUNDED":
                    vm.updateUIState(vm.uiStates.paymentRefund);
                    break;
                case "PENDING":
                    if (vm.errorCode) {
                        vm.updateUIState(vm.uiStates.paymentFailed);
                    } else {
                        vm.updateUIState(vm.uiStates.paymentPending);
                    }
                    break;

                default:
                    break;
            }
        }

        function handleFlight(result) {
            vm.udpateType(vm.displayType.flight);

            var oldVm = FlightUtils.convertBookingToVM(result);
            if (oldVm && oldVm.orgBookingModel && oldVm.orgBookingModel.bookingInfo) {
                // Check status 
                var bookingStatus = oldVm.orgBookingModel.bookingInfo.status;
                var paymentStatus = oldVm.orgBookingModel.bookingInfo.paymentStatus;
                var issueStatus = oldVm.orgBookingModel.bookingInfo.issuedStatus;
                var supplierBookingStatus = oldVm.orgBookingModel.bookingInfo.supplierBookingStatus;

                //process all status
                $log.log('bookingStatus=' + bookingStatus + ", paymentStatus = " + paymentStatus + ", issuedStatus = " + issueStatus + ", supplierBookingStatus = " + supplierBookingStatus);

                $log.log('VIEW - Booking Result');

                //+++ initial data
                vm.bookingModel = oldVm.orgBookingModel;
                vm.searchOptions = oldVm.searchOptions;

                // BACK 2U
                DataService.setBookingModel(vm.bookingModel);
                DataService.setSearchOption(vm.searchOptions);

                switch (paymentStatus) {
                    case "FAILED":
                        vm.updateUIState(vm.uiStates.paymentFailed);
                        break;
                    case "SUCCEEDED":
                        if (issueStatus === "SUCCEEDED") {
                            vm.updateUIState(vm.uiStates.paymentSuccess);
                            break;
                        }
                        if (issueStatus === "TICKET_ON_PROCESS") {
                            vm.updateUIState(vm.uiStates.paymentSuccessOnprocess);
                            break;
                        }
                        vm.updateUIState(vm.uiStates.paymentFailed);
                        break;
                    case "REFUNDED":
                        vm.updateUIState(vm.uiStates.paymentRefund);
                        break;
                    case "PENDING":
                        if (vm.errorCode) {
                            vm.updateUIState(vm.uiStates.paymentFailed);
                        } else {
                            vm.updateUIState(vm.uiStates.paymentPending);
                        }
                        break;

                    default:
                        break;
                }
            } else {
                $log.log('++++ Booking Not FOUND - GOTO - flight');
                vm.updateUIState(vm.uiStates.notfound);
            }

            /** BEGIN OLD CODE **/
            vm.bkgroup = result;

            if (vm.bkgroup) {

                var obj = vm.bkgroup;

                // Process contacts view
                var contactInfos = [];
                if (obj.travelerInfo) {
                    angular.forEach(obj.travelerInfo.contactInfos, function(value, key) {
                        var c = value;
                        contactInfos.push({
                            "ciEmail": c.email,
                            "ciName": c.firstName + " " + c.lastName,
                            // "ciMobileCode": c.phoneNumber1,
                            "ciMobileCode": "",
                            "ciMobile": c.phoneNumber1
                        });
                    });
                }

                obj.contacts = contactInfos;

                // Process customer view
                var customerInfos = [];
                if (obj.travelerInfo) {
                    angular.forEach(obj.travelerInfo.airTravelers, function(value, key) {
                        var c = value;

                        var cardType;
                        var cardNumber;
                        if (c.memberCards && c.memberCards[0]) {
                            cardType = c.memberCards[0].cardType;
                            cardNumber = c.memberCards[0].cardNumber;
                        }

                        customerInfos.push({
                            "cuDob": c.dateOfBirth,
                            "cuId": c.passport.passportNumber,
                            "cuPp": "Passport",
                            "cuName": c.passengerName.firstName,
                            "cuGender": c.passengerName.title,
                            "cuCardNo": c.frequentFlyerNumber,
                            "cuNationality": c.passport.country,
                            "cuFamilyName": c.passengerName.lastName
                        });

                    });
                }

                obj.customers = customerInfos;

                // Process tax view
                obj.biCompany = vm.taxCompanyName;
                obj.biMst = vm.taxNumber;
                obj.biMobile = vm.taxAddress2;
                obj.biAddress = vm.taxAddress1;

                // process payment view
                obj.departPricedItinerary = obj.groupPricedItineraries[0].pricedItineraries[0];
                obj.departGroupItem = obj.groupPricedItineraries[0];

                vm.searchOptions.searchType = 'oneway';

                if (obj.groupPricedItineraries && obj.groupPricedItineraries[1]) {
                    obj.returnGroupItem = obj.groupPricedItineraries[1];
                    obj.returnPricedItinerary = obj.groupPricedItineraries[1].pricedItineraries[0];

                    vm.searchOptions.searchType = 'roundtrip';
                } else if (obj.groupPricedItineraries[0].pricedItineraries[0].directionInd == 'RETURN') {
                    obj.returnGroupItem = obj.groupPricedItineraries[0];
                    obj.returnPricedItinerary = obj.groupPricedItineraries[0].pricedItineraries[0];

                    vm.searchOptions.searchType = 'roundtrip';
                }
                // Process flight view
                if (obj.departGroupItem.flightType == 'INTERNATIONAL') {
                    vm.searchOptions.dtype = 'international';

                    // Convert for view details -- DEPART
                    vm.flightModel = {};
                    vm.bookingModel.checkIn = obj.departPricedItinerary.originDestinationOptions[0].originDateTime;
                    vm.bookingModel.checkOut = obj.departPricedItinerary.originDestinationOptions[0].destinationDateTime;
                    vm.bookingModel.noOfTransit = obj.departPricedItinerary.originDestinationOptions[0].flightSegments.length;
                    vm.bookingModel.supplierName = obj.departGroupItem.airlineName;
                    vm.bookingModel.airline = obj.departGroupItem.airline;
                    vm.bookingModel.carrierNo = obj.departGroupItem.fightNo;
                    vm.bookingModel.originLocationCode = obj.departGroupItem.originLocationCode;
                    vm.bookingModel.destinationLocationCode = obj.departGroupItem.destinationLocationCode;
                    vm.bookingModel.duration = obj.departPricedItinerary.originDestinationOptions[0].journeyDuration;
                    vm.bookingModel.supplierCode = obj.departPricedItinerary.airItineraryPricingInfo.fareSourceCode;
                    vm.bookingModel.cabinClassName = obj.departPricedItinerary.originDestinationOptions[0].flightSegments[0].cabinClassName;
                    vm.bookingModel.flightIdx = 1;
                    vm.bookingModel.searchType = vm.searchOptions.searchType;
                    vm.bookingModel.booking = {};
                    vm.bookingModel.travelerInfo = obj.travelerInfo;
                    vm.bookingModel.pricedItinerary = obj.departPricedItinerary;
                    vm.bookingModel.flightSegments = obj.departPricedItinerary.originDestinationOptions[0].flightSegments;
                    vm.bookingModel.passengerNameRecords = vm.bkgroup.bookingInfo.passengerNameRecords;

                    // Convert for view details -- RETURN
                    // vm.bookingModel.bookingNumber = vm.bookingModel.code.bookingCode.bookingNumber;
                    if (obj.returnPricedItinerary && obj.returnGroupItem) {
                        vm.returnBookingModel.bookingNumber = vm.bookingModel.bookingNumber;
                        vm.returnBookingModel.checkIn = obj.returnPricedItinerary.originDestinationOptions[1].originDateTime;
                        vm.returnBookingModel.checkOut = obj.returnPricedItinerary.originDestinationOptions[1].destinationDateTime;
                        vm.returnBookingModel.noOfTransit = obj.returnPricedItinerary.originDestinationOptions[1].flightSegments.length;
                        vm.returnBookingModel.supplierName = obj.returnGroupItem.airlineName;
                        vm.returnBookingModel.airline = obj.returnGroupItem.airline;
                        vm.returnBookingModel.carrierNo = obj.returnGroupItem.fightNo;
                        vm.returnBookingModel.originLocationCode = obj.returnPricedItinerary.originDestinationOptions[1].originLocationCode;
                        vm.returnBookingModel.destinationLocationCode = obj.returnPricedItinerary.originDestinationOptions[1].destinationLocationCode;
                        vm.returnBookingModel.duration = obj.returnPricedItinerary.originDestinationOptions[1].journeyDuration;
                        vm.returnBookingModel.supplierCode = obj.returnPricedItinerary.airItineraryPricingInfo.fareSourceCode;
                        vm.returnBookingModel.cabinClassName = obj.returnPricedItinerary.originDestinationOptions[1].flightSegments[0].cabinClassName;
                        vm.returnBookingModel.flightIdx = 2;
                        vm.returnBookingModel.searchType = vm.searchOptions.searchType;
                        vm.returnBookingModel.booking = {};
                        vm.returnBookingModel.travelerInfo = obj.travelerInfo;
                        vm.returnBookingModel.pricedItinerary = obj.returnPricedItinerary;
                        vm.returnBookingModel.flightSegments = obj.returnPricedItinerary.originDestinationOptions[1].flightSegments;
                        vm.returnBookingModel.passengerNameRecords = vm.bkgroup.bookingInfo.passengerNameRecords;
                    }
                } else {
                    vm.searchOptions.dtype = 'domestic';
                    // Convert for view details -- DEPART
                    // vm.bookingModel.bookingNumber = vm.bookingModel.code.bookingCode.bookingNumber;
                    vm.bookingModel.checkIn = obj.departPricedItinerary.originDestinationOptions[0].originDateTime;
                    vm.bookingModel.checkOut = obj.departPricedItinerary.originDestinationOptions[0].destinationDateTime;
                    vm.bookingModel.noOfTransit = 1;
                    vm.bookingModel.supplierName = obj.departGroupItem.airlineName;
                    vm.bookingModel.airline = obj.departGroupItem.airline;
                    vm.bookingModel.carrierNo = obj.departGroupItem.fightNo;
                    vm.bookingModel.originLocationCode = obj.departGroupItem.originLocationCode;
                    vm.bookingModel.destinationLocationCode = obj.departGroupItem.destinationLocationCode;
                    vm.bookingModel.duration = obj.departPricedItinerary.originDestinationOptions[0].journeyDuration;
                    vm.bookingModel.supplierCode = obj.departPricedItinerary.airItineraryPricingInfo.fareSourceCode;
                    vm.bookingModel.cabinClassName = obj.departPricedItinerary.originDestinationOptions[0].flightSegments[0].cabinClassName;
                    vm.bookingModel.flightIdx = 1;
                    vm.bookingModel.searchType = vm.searchOptions.searchType;
                    vm.bookingModel.booking = {};
                    vm.bookingModel.travelerInfo = obj.travelerInfo;
                    vm.bookingModel.pricedItinerary = obj.departPricedItinerary;
                    vm.bookingModel.flightSegments = obj.departPricedItinerary.originDestinationOptions[0].flightSegments;
                    vm.bookingModel.passengerNameRecords = vm.bkgroup.bookingInfo.passengerNameRecords;

                    // Convert for view details -- RETURN
                    // vm.bookingModel.bookingNumber = vm.bookingModel.code.bookingCode.bookingNumber;
                    if (obj.returnPricedItinerary && obj.returnGroupItem) {
                        vm.returnBookingModel.bookingNumber = vm.bookingModel.bookingNumber;
                        vm.returnBookingModel.checkIn = obj.returnPricedItinerary.originDestinationOptions[0].originDateTime;
                        vm.returnBookingModel.checkOut = obj.returnPricedItinerary.originDestinationOptions[0].destinationDateTime;
                        vm.returnBookingModel.noOfTransit = 1;
                        vm.returnBookingModel.supplierName = obj.returnGroupItem.airlineName;
                        vm.returnBookingModel.airline = obj.returnGroupItem.airline;
                        vm.returnBookingModel.carrierNo = obj.returnGroupItem.fightNo;
                        vm.returnBookingModel.originLocationCode = obj.returnGroupItem.originLocationCode;
                        vm.returnBookingModel.destinationLocationCode = obj.returnGroupItem.destinationLocationCode;
                        vm.returnBookingModel.duration = obj.returnPricedItinerary.originDestinationOptions[0].journeyDuration;
                        vm.returnBookingModel.supplierCode = obj.returnPricedItinerary.airItineraryPricingInfo.fareSourceCode;
                        vm.returnBookingModel.cabinClassName = obj.returnPricedItinerary.originDestinationOptions[0].flightSegments[0].cabinClassName;
                        vm.returnBookingModel.flightIdx = 2;
                        vm.returnBookingModel.searchType = vm.searchOptions.searchType;
                        vm.returnBookingModel.booking = {};
                        vm.returnBookingModel.travelerInfo = obj.travelerInfo;
                        vm.returnBookingModel.pricedItinerary = obj.returnPricedItinerary;
                        vm.returnBookingModel.flightSegments = obj.returnPricedItinerary.originDestinationOptions[0].flightSegments;
                        vm.returnBookingModel.passengerNameRecords = vm.bkgroup.bookingInfo.passengerNameRecords;
                    }
                }
                // bind to view
                vm.orgBookingModel = obj;

            } else {
                $log.log('++++ Booking Not FOUND - GOTO - flight');
                vm.updateUIState(vm.uiStates.notfound);
            }
            /** END OLD CODE **/
        }





        // UI state update Helper.
        function updateUIState(state, payload) {
            $log.log("Previous state: " + vm.currentUIState);
            vm.currentUIState = state;
            $log.log("Current state: " + vm.currentUIState);
        }
    }
})();