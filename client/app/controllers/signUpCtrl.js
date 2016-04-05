// main angular module/controller
angular.module('faunadexApp.signUpCtrl', [])

.controller('SignUpController', function($scope, Click) {

  // user signs up
  $scope.signUp = function() {
    // Click.sendData returns a promise, so use .then to run the update method
    Click.sendData('/api/users/signup', $scope.username, $scope.password)
      .then($scope.retrieveAnimal);
    $scope.username = null;
    $scope.password = null;
  };

});