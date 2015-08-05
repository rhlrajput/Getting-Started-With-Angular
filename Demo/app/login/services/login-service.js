/**
 * Created by Rahul on 7/18/2015.
 */

angular.module("demo.login").factory('Authentication', authentication);

function authentication(Restangular, $firebaseObject) {

    var getConfigurations = function () {
        //$q y to use ??? deferred promise
        //var deferred = $q.defer();
        var ref = new Firebase("https://demoangulartesting.firebaseio.com/userList");
        var userList = $firebaseObject(ref);
        return userList.$loaded()
            .then(function (data) {
                return data;

            }).catch(function (err) {
                console.error(err);
                //$rootScope.loading = false;
            });
        /*return Restangular.one("UserInfo").get().then(function(data){
         //deferred.resolve(data[0].username);
         return data;

         });*/
        // return deferred.promise;
    };

    return {
        login: getConfigurations
    };
}