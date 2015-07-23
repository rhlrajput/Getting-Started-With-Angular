/**
 * Created by Rahul on 7/18/2015.
 */
( function () {
'use strict';
   var app= angular.module('Demo', ['ngRoute'
        , 'demo.login', 'ui.router','restangular'
    ]);
    app.constant('_',window._);
    app.constant('ENV','http://localhost:63342/Demo/api/');

    app.config(demoConfig);

    function demoConfig($routeProvider,RestangularProvider,ENV){
        $routeProvider.
            when('/', {
                controller: 'loginController',
                templateUrl : 'login/views/login.html'}).
            otherwise({
                redirectTo:'/'
            });
        RestangularProvider.setBaseUrl(ENV);
        // Auth details
        RestangularProvider.setDefaultHeaders({
            'Content-Type': 'application/json'
        });
        RestangularProvider.setRequestSuffix('.json');
    }

}());