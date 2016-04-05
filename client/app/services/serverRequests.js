// main angular module/factory that handles requests to the server
angular.module('faunadexApp.factory1', [])

.factory('Click', function($http) {
  var click = {};

  // POST request that sends the data to the server
  click.sendData = function(url, data) {
    if (url === '/animal') {
      data = {animal: data};
    } else if (url === '/api/users') {
      data = {username: arguments[1], password: arguments[2]};
    }
    
    // $http returns a promise so when sendData is called, we need to return the $http function to return the promise and then return the data to use it in the next .then
    return $http({
      method: 'POST',
      url: url,
      data: data
    }).then(function success(res) {
      return res;
    }, function error(res) {
      return res;
    });
  };

  // $http returns a promise so when sendData is called, we need to return the $http function to return the promise and then return the data to use it in the next .then
  click.retrieveData = function(url) {
    // if (url === '/animal') {
    //   data = {animal: data};
    // } else if (url === '/api/users') {
    //   data = {username: arguments[1], password: arguments[2]};
    // }
    return $http({
      method: 'GET',
      url: url,
    }).then(function(res) {
      return res.data;
    });
  };

  // return the object in the factory that holds all the methods
  return click;
});
