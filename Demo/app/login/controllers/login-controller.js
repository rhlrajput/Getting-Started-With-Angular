/**
 * Created by Rahul on 7/18/2015.
 */
var loginCtrl=angular.module("demo.login");

loginCtrl.controller("loginController",['$rootScope','$scope','_','Authentication','$state',
    function($rootScope,$scope,_,authentication,$state){
    $scope.userName='';
    $scope.password='';


        $scope.authenticate = function(){
            $rootScope.loading = true;
   // alert($scope.userName);
       // var test=authentication.login($scope.userName,$scope.password);
        authentication.login().then(function(result){
            $rootScope.loading = false;
//            alert(result);
            var flag= _.find(result , function(data){
               return data.username===$scope.userName && data.password===$scope.password;
            });
            if(flag != undefined && flag != null)
            //$location.path('/dashboard');
            $state.go('dashboard');
            else
                window.alert('Invalid Credential!!');
        });
    }
}]);