// main angular module/controller
angular.module('faunadexApp.signInCtrl', [])

.controller('SignInController', function($scope, $location, Click) {

  // user signs in
  $scope.signIn = function() {
    // Click.retrieveData returns a promise, so one needs a .then to utilize the output of it
    Click.sendData('/api/users/signin', $scope.username, $scope.password)
      .then(function(res) {
        if (res) {
          $location.path('/faunaList');
        } else {
          $location.path('/signIn');
        }
      });
    $scope.username = null;
    $scope.password = null;
  };

});