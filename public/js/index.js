'use strict';
var angular = require('angular');
var app = angular.module('CRUDblog', []);

app.controller('Controller', ['$scope', function($scope) {
  $scope.zach = { name: 'Zach', address: '1600 Amphitheatre' };
  $scope.molly = { name: 'Molly', address: '123 Somewhere' };
}])
app.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-iso.html'
  };
});
