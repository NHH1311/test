(function() {
    'use strict';

    angular
        .module('B2B2CGatewayApp')
        .factory('AuditsService', AuditsService);

    AuditsService.$inject = ['$resource', 'API_URL'];

    function AuditsService($resource, API_URL) {
        var service = $resource(API_URL + '/management/audits/:id', {}, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                isArray: true,
                params: {
                    fromDate: null,
                    toDate: null
                }
            }
        });

        return service;
    }
})();