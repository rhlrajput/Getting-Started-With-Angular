dashboardApp.controller('contactsController', function($rootScope,$scope,$firebaseObject,$firebaseArray  ){
    $rootScope.loading = true;
    var ref = new Firebase("https://demoangulartesting.firebaseio.com/contacts");
    $scope.contacts=$firebaseObject(ref)
    /*ref.on("value", function(data) {
        $scope.contacts= data.val();
    });*/
    $scope.contacts.$loaded()
        .then(function() {
            console.log($scope.contacts);
            $rootScope.loading = false;

        }).catch(function(err) {
            console.error(err);
            $rootScope.loading = false;
        });
});