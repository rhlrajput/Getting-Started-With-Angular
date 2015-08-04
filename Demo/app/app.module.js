/**
 * Created by Rahul on 7/18/2015.
 */
( function () {
    'use strict';
    /*var app= angular.module('Demo', [
     'ngRoute'
     , 'demo.login','dashboard', 'ui.router','restangular'
     ])*/
    var app = angular.module('Demo', ['firebase',
        'ui.router', 'demo.login', 'dashboard', 'restangular'
    ]);
    app.constant('_', window._);
    app.constant('URL', 'http://localhost:63342/Demo/api/');

    app.config(demoConfig);

    function demoConfig($urlRouterProvider, $stateProvider, RestangularProvider, URL) {
        /* $routeProvider.
         when('/', {
         /!*url: '/login',*!/
         controller: 'loginController',
         templateUrl : 'login/views/login.html'}).
         when('/dashboard', {
         templateUrl: 'dashboard/views/dashboard.html',
         controller: 'HomeController'}).
         otherwise({
         redirectTo:'/'
         });*/
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('login', {
                url: "/",
                views: {
                    '': {
                        templateUrl: 'login/views/login.html',
                        controller: 'loginController'
                    },
                    'header@login': {
                        templateUrl: '../app/views/header.html'
                    },
                    'footer@login': {
                        templateUrl: '../app/views/footer.html'
                    }
                }

            }).
            state('dashboard', {
                url: '/dashboard',
                views: {
                    '': {
                        templateUrl: '../app/dashboard/views/dashboard.html',
                        controller: 'dashboardController'
                    },
                    'menu@dashboard': {
                        templateUrl: '../app/dashboard/views/menu.html'
                    }
                }
            }
        );
        RestangularProvider.setBaseUrl(URL);
        // Auth details
        RestangularProvider.setDefaultHeaders({
            'Content-Type': 'application/jsonp'
        });
        RestangularProvider.setDefaultHeaders({
            'Access-Control-Allow-Headers': 'Accept, X-Requested-With',
            'Access-Control-Allow-Origin': 'http://www.thomas-bayer.com',
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE'
        });

        RestangularProvider.setRequestSuffix('.json');
    }

    app.run(function ($rootScope, Restangular) {
        Restangular.addRequestInterceptor(function (element) {
            $rootScope.loading = true;
            return element;
        });
        Restangular.addResponseInterceptor(function (data) {
            $rootScope.loading = false;
            return data;
        });
    });

}());