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
/*dashboardApp.directive('d3Bars', ['d3', function(d3) {
    return {
        restrict: 'EA',
        scope: {},
        link: function(scope, element, attrs) {
            var svg = d3.select(ele[0])
                .append('svg')
                .style('width', '100%');
        }};
}]);*/
dashboardApp.directive('bars', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="chart"></div>',
        link: function (scope, element, attrs) {
            var data = attrs.data.split(','),
                chart = d3.select('#chart')
                    .append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(data).enter()
                    .append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) { return d + "%"; })
                    .text(function(d) { return d + "%"; });
        }
    };
});
