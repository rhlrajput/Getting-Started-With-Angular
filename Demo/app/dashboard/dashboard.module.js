/**
 * Created by Rahul on 7/28/15.
 */

var dashboardApp = angular.module('dashboard', ['firebase', 'ui.router','Demo']);
dashboardApp.config(function ($stateProvider) {
    $stateProvider // urlRouteProvider advantages
        .state('contact', {
            url: "/contact",
            views: {
                '': {
                    templateUrl: '../app/dashboard/views/contacts.html',
                    controller: 'contactsController'
                },
                'menu@contact': {
                    templateUrl: '../app/dashboard/views/menu.html'
                },
                'footer@contact': {
                    templateUrl: '../app/views/footer.html'
                }
            }
        });
});
