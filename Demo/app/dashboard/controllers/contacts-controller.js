dashboardApp.controller('contactsController', function($scope,$firebaseObject,$firebaseArray  ){

    var ref = new Firebase("https://demoangulartesting.firebaseio.com/contacts");
    $scope.contacts=$firebaseObject(ref)
    /*ref.on("value", function(data) {
        $scope.contacts= data.val();
    });*/
    /*$scope.contacts.$loaded()
        .then(function() {
            console.log($scope.contacts);
        });*/
});