/**
 * Created by Rahul on 7/18/2015.
 */

angular.module("demo.login").factory('Authentication', authentication);

function authentication(Restangular,$timeout) {

        var getConfigurations = function () {
            //$q y to use ??? deferred promise
            //var deferred = $q.defer();
           return Restangular.one("UserInfo").get().then(function(data){
                //deferred.resolve(data[0].username);
                   return data;

            });
           // return deferred.promise;
    };

    return {
        login: getConfigurations
    };
}