var app = angular.module('AngularTradelink', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngGrid']);

app.config(function ($routeProvider) {

    $routeProvider.when("/accountView", {
        controller: "accountViewController",
        templateUrl: "/app/views/accountView.html"
    });

    $routeProvider.when("/default", {
        controller: "defaultController",
        templateUrl: "/app/views/default.html"
    });
    
    $routeProvider.otherwise({ redirectTo: "/default" });

});

var serviceBase = '/app/applicationData';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});