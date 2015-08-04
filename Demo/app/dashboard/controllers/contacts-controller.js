dashboardApp.controller('contactsController', function($scope,$firebaseObject,$firebaseArray  ){

    var ref = new Firebase("https://demoangulartesting.firebaseio.com/contacts");

    var contactList=$firebaseObject(ref.child('0'));

    ref.on("value", function(data) {
        console.log(data.val());
    })  ;

});