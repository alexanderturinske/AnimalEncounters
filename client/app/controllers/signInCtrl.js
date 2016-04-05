// main angular module/controller
angular.module('faunadexApp.signInCtrl', [])

.controller('SignInController', function($scope, Click) {

  // user signs in
  $scope.retrieveUser = function() {
    // Click.retrieveData returns a promise, so one needs a .then to utilize the output of it
    Click.retrieveData().then(function(result) {
      $scope.animals = result;
    });
    $scope.username = null;
    $scope.password = null;
  };

});