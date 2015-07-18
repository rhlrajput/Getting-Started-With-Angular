/**
 * Created by Rahul on 7/18/2015.
 */
( function () {
'use strict';
    angular.module('Demo', ['ngRoute'
        , 'demo.login'
    ]);
    angular.module('Demo').config(demoConfig);

    function demoConfig($routeProvider){
        $routeProvider.
            when('/', {
                controller: 'loginController',
                templateUrl : 'login/views/login.html'}).
            otherwise({
                redirectTo:'/'
            });
    }
}());