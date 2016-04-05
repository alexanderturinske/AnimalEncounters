// main angular module/factory that handles requests to the server
angular.module('faunadexApp.factory1', [])

.factory('Click', function($http) {
  var click = {};

  // POST request that sends the data to the server
  click.sendData = function(url, animal) {

    // $http returns a promise so when sendData is called, we need to return the $http function to return the promise and then return the data to use it in the next .then
    return $http({
      method: 'POST',
      url: '/animals',
      data: {animal: animal}
    }).then(function success(res) {
      return res;
    }, function error(res) {
      return res;
    });
  };

  // $http returns a promise so when sendData is called, we need to return the $http function to return the promise and then return the data to use it in the next .then
  click.retrieveData = function(url) {
    return $http({
      method: 'GET',
      url: '/animals',
    }).then(function(res) {
      return res.data;
    });
  };

  // return the object in the factory that holds all the methods
  return click;
});
