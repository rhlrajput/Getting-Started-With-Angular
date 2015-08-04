/**
 * Created by Rahul on 7/28/15.
 */

var dashboardApp = angular.module('dashboard', ['firebase', 'ui.router']);
dashboardApp.config(function ($stateProvider) {
    $stateProvider // urlRouteProvider advantages
        .state('contact', {
            url: "/contact",
            views: {
                '': {
                    templateUrl: 'dashboard/views/contacts.html',
                    controller: 'contactsController'
                },
                'menu@dashboard': {
                    templateUrl: '../app/dashboard/views/menu.html'
                },
                'footer@login': {
                    templateUrl: '../app/views/footer.html'
                }
            }
        });
});
