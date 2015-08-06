/**
 * Created by Rahul on 7/28/15.
 */


angular.module('dashboard').controller('dashboardController',['$scope','$http','Restangular', function($scope,$http,Restangular){
$scope.name='Testing';
    $scope.randomData="1,23,5,6,8";
   // Restangular.setJsonp(true);
    var test= Restangular.allUrl('test', 'http://filltext.com/?rows=5&val={randomNumber}').getList();
    test.then(function(data){
        //deferred.resolve(data[0].username);
        alert(data);
        return data;

    });
  /*  $http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&fname={firstName}&lname={lastName}").
        success(function (data) {
            alert(data);
            $scope.users = data;
        });*/
}]);