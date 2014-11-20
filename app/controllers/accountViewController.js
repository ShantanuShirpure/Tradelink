'use strict';
app.controller('accountViewController', ['$scope', 'accountViewService', function ($scope, accountViewService) {

    $scope.accounts = [];

    accountViewService.getaccounts().then(function (results) {

        $scope.accounts = results.data;
        $scope.count = results.data.length;

    });

   

}]);