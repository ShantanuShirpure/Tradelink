'use strict';
app.factory('accountViewService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var accountServiceFactory = {};

    var _getaccounts = function () {

        return $http.get(serviceBase + '/api/accounts.txt').then(function (results) {
            return results;
        });
    };

    accountServiceFactory.getaccounts = _getaccounts;

    return accountServiceFactory;

}]);