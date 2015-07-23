/**
 * Created by Rahul on 7/18/2015.
 */
var loginCtrl=angular.module("demo.login");

loginCtrl.controller("loginController",['$scope','Restangular','Authentication',function($scope,Restangular,authentication){
    $scope.userName='';
    $scope.password='';
    $scope.authenticate = function(){
   // alert($scope.userName);
        var test=authentication.login($scope.userName,$scope.password);
       //var test= Restangular.all('UserInfo').getList();
        alert(test);
    }
}]);