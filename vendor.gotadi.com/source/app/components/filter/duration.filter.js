(function() {
    'use strict';

    angular
        .module('B2B2CGatewayApp')
        .filter('duration', duration);

    function duration() {
        return durationFilter;

        function durationFilter(millseconds, format) {
            // var oneSecond = 1000;
            // var oneMinute = oneSecond * 60;
            var oneSecond = 1;
            var oneMinute = oneSecond * 1;
            var oneHour = oneMinute * 60;
            var oneDay = oneHour * 24;

            var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
            var minutes = Math.floor((millseconds % oneHour) / oneMinute);
            var hours = Math.floor((millseconds % oneDay) / oneHour);
            var days = Math.floor(millseconds / oneDay);

            var timeString = '';

            if (format == 'short') {
                if (days !== 0) {
                    timeString += (days !== 1) ? (days + 'd') : (days + 'd');
                }
                if (hours !== 0) {
                    timeString += (hours !== 1) ? (hours + 'h') : (hours + 'h');
                }
                if (minutes !== 0) {
                    timeString += (minutes !== 1) ? (minutes + 'm') : (minutes + 'm');
                }
                // if (seconds !== 0 || millseconds < 1000) {
                //     timeString += (seconds !== 1) ? (seconds + 's') : (seconds + 's');
                // }

                return timeString;
            } else if (format == 'defvn') {
                if (days !== 0) {
                    timeString += (days !== 1) ? (days + 'd') : (days + 'd');
                }
                if (hours !== 0) {
                    timeString += (hours !== 1) ? (hours + 'h') : (hours + 'h');
                }
                if (minutes !== 0) {
                    timeString += (minutes !== 1) ? (minutes + 'm') : (minutes + 'm');
                }
                // if (seconds !== 0 || millseconds < 1000) {
                //     timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
                // }

                return timeString;
            } else {
                if (days !== 0) {
                    timeString += (days !== 1) ? (days + ' ng??y ') : (days + ' ng??y ');
                }
                if (hours !== 0) {
                    timeString += (hours !== 1) ? (hours + ' gi??? ') : (hours + ' gi??? ');
                }
                if (minutes !== 0) {
                    timeString += (minutes !== 1) ? (minutes + ' ph??t ') : (minutes + ' ph??t ');
                }
                // if (seconds !== 0 || millseconds < 1000) {
                //     timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
                // }

                return timeString;
            }



        }
    }
})();