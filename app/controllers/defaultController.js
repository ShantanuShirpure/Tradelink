'use strict';
app.controller('defaultController', ['$scope', 'accountViewService', function ($scope, accountViewService) {

   

    //accountViewService.getaccounts().then(function (results) {

    //    $scope.accounts = results.data;
    //    console.log($scope.accounts);
    //    $scope.gridOptions = { data: 'accounts' };

    //});
    $scope.myData = [
           {
               "accountID": "270-2844-21-CAD",
               "securityDescription": "Canadians Imperial Bank of Commerce",
               "price": "99.66",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-22-CAD",
               "securityDescription": "Texas Capital Bancshares Inc 6.5% subordinate notes due 2042",
               "price": "99.65",
               "clientShortName": "Trading-QA-2"
           },
           {
               "accountID": "270-2844-22-CAD",
               "securityDescription": "Canadian Imperial Bank of Commerce",
               "price": "99.65",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-21-CAD",
               "securityDescription": "Texas Capital Bancshares Inc 6.5% subordinate notes due 2042",
               "price": "99.66",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-20-CAD",
               "securityDescription": "Canadian Imperials Bank of Commerce",
               "price": "99.65",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-20-CAD",
               "securityDescription": "Texas Capital Bancshares Inc 6.5% subordinate notes due 2042",
               "price": "99.65",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-23-CAD",
               "securityDescription": "Canadian Imperial Bank of Commerce",
               "price": "99.65",
               "clientShortName": "Trading-QA-1"
           },
           {
               "accountID": "270-2844-20-CAD",
               "securityDescription": "Texas Capitals Bancshares Inc 6.5% subordinate notes due 2042",
               "price": "99.65",
               "clientShortName": "Trading-QA-2"
           },
           {
               "accountID": "270-2844-23-CAD",
               "securityDescription": "Canadian Imperial Bank of Commerce",
               "price": "99.67",
               "clientShortName": "Trading-QA-2"
           }
    ]
    ;
    var filterBarPlugin = {
        init: function (scope, grid) {
            filterBarPlugin.scope = scope;
            filterBarPlugin.grid = grid;
            $scope.$watch(function () {
                var searchQuery = "";
                angular.forEach(filterBarPlugin.scope.columns, function (col) {
                    if (col.visible && col.filterText) {
                        var filterText = (col.filterText.indexOf('*') == 0 ? col.filterText.replace('*', '') : "^" + col.filterText) + ";";
                        searchQuery += col.displayName + ": " + filterText;
                    }
                });
                return searchQuery;
            }, function (searchQuery) {
                filterBarPlugin.scope.$parent.filterText = searchQuery;
                filterBarPlugin.grid.searchProvider.evalFilter();
            });
        },
        scope: undefined,
        grid: undefined,
    };

    var colDefs = [
      { field: 'accountID', headerCellTemplate: 'filterHeaderTemplate.html' },
      { field: 'securityDescription', headerCellTemplate: 'filterHeaderTemplate.html' },
      { field: 'price', headerCellTemplate: 'filterHeaderTemplate.html' },
      { field: 'clientShortName', headerCellTemplate: 'filterHeaderTemplate.html' }
    ];

    $scope.gridOptions = {
        data: 'myData',
        columnDefs: colDefs,
        showGroupPanel: false,
        plugins: [filterBarPlugin],
        headerRowHeight: 60 // give room for filter bar
    };
}]);