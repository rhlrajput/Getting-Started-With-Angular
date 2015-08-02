/**
 * Created by Rahul on 7/18/2015.
 */
var loginCtrl=angular.module("demo.login");

loginCtrl.controller("loginController",['$scope','_','Authentication','$state',
    function($scope,_,authentication,$state){
    $scope.userName='';
    $scope.password='';
    $scope.loading = false;
    $scope.authenticate = function(){
   // alert($scope.userName);
       // var test=authentication.login($scope.userName,$scope.password);
        authentication.login().then(function(result){
//            alert(result);
            var flag= _.find(result , function(data){
               return data.username===$scope.userName && data.password===$scope.password;
            });
            if(flag != undefined && flag != null)
            //$location.path('/dashboard');
            $state.go('dashboard');
        });
    }
}]);