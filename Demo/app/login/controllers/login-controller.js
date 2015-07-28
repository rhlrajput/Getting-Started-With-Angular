/**
 * Created by Rahul on 7/18/2015.
 */
var loginCtrl=angular.module("demo.login");

loginCtrl.controller("loginController",['$scope','Authentication','$location',function($scope,authentication,$location){
    $scope.userName='';
    $scope.password='';
    $scope.loading = false;
    $scope.authenticate = function(){
   // alert($scope.userName);
       // var test=authentication.login($scope.userName,$scope.password);
        authentication.login().then(function(result){
//            alert(result);
            $location.path('/dashboard');
        });
    }
}]);