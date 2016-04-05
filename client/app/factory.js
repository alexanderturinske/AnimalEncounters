angular.module('faunadexApp.factory1', [])

.factory('Click', function($http) {
  var click = {};

  click.sendData = function(animal) {
    console.log('Animal sent to database!');
    $http({
      method: 'POST',
      url: '/',
      data: {animal: animal}
    }).then(function success(res) {
      console.log('There was a POST success: ' + res.data.animal);
    }, function error(res) {
      console.log('There was a POST error: ' + res.data);
    });
  };

  click.retrieveData = function() {
    $http({
      method: 'GET',
      url: '/',
    }).then(function success(res) {
      console.log('There was a GET success: ' + res.data);
    }, function error(res) {
      console.log('There was a GET error: ' + res.data);
    });
  };

  return click;
});
