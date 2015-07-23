/**
 * Created by Rahul on 7/18/2015.
 */

angular.module("demo.login").factory('Authentication', authentication);

function authentication(Restangular) {
    return {
        /*resolvePromise: function(){
            Restangular.one('UserInfo').get();
        },*/
        login: function(user, password) {
           // return Restangular.one("UserInfo").post({username: user, password: password});
            //return Restangular.one("api").customGET("UserInfo", {"filter[where][username]": user});
            return Restangular.one("UserInfo").customGET("", {username: "rhlrajput@gmail.com"});
                //get({username: 'rhlrajput@gmail.com'});
                //customGET({where: '{username: rhlrajput@gmail.com}'});
            /*return Restangular.all('UserInfo').getList({filters: {
                username: user,
                password: password
            }});*/
        }
    }
}