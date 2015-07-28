/**
 * Created by Rahul on 7/18/2015.
 */
( function () {
'use strict';
   var app= angular.module('Demo', [
       'ngRoute'
        , 'demo.login','dashboard', 'ui.router','restangular'
    ]);
    app.constant('_',window._);
    app.constant('ENV','http://localhost:63342/Demo/api/');

    app.config(demoConfig);

    function demoConfig($routeProvider,RestangularProvider,ENV){
        $routeProvider.
            when('/', {
                /*url: '/login',*/
                controller: 'loginController',
                templateUrl : 'login/views/login.html'}).
            when('/dashboard', {
                templateUrl: 'dashboard/views/dashboard.html',
                controller: 'HomeController'}).
            otherwise({
                redirectTo:'/'
            });
       /* $stateProvider // urlRouteProvider advantages
            .state('/', {
                url: "/login",
                templateUrl: 'login/views/login.html',
                controller: 'loginController'
            });*/
        RestangularProvider.setBaseUrl(ENV);
        // Auth details
        RestangularProvider.setDefaultHeaders({
            'Content-Type': 'application/json'
        });
        RestangularProvider.setRequestSuffix('.json');
    }
    app.run(function($rootScope, Restangular) {
        Restangular.addRequestInterceptor(function(element) {
            $rootScope.loading = true;
            return element;
        });
        Restangular.addResponseInterceptor(function(data) {
            $rootScope.loading = false;
            return data;
        });
    });

}());