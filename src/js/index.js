'use strict';
var angular = require('angular');
var app = angular.module('CRUDblog', []);

app.controller('PreviewCtrl', ['$scope', function($scope) {
  $scope.post = { title: 'Integer dictum erat et', body: 'The secular cooling that must someday overtake our planet has already gone far indeed with our neighbour. Its physical condition is still largely a mystery, but we know now that even in its equatorial region the midday temperature barely approaches that of our coldest winter. Its air is much more attenuated than ours its oceans have shrunk until they cover but a third of its surface, and as its slow seasons change huge snowcaps gather and melt about either pole and periodically inundate its temperate zones. That last stage of exhaustion, which to us is still incredibly remote, has become a present-day problem for the inhabitants of Mars. The immediate pressure of necessity has brightened their intellects, enlarged their powers, and hardened their hearts. And looking across space with instru- ments, and intelligences such as we have scarcely dreamed of, they see, at its nearest distance only 35,000,000 of miles sunward of them, a morning star of hope, our own warmer planet, green with vegetation and grey with water, with a cloudy atmosphere eloquent of fertility, with glimpses through its drifting cloud wisps of broad stretches of populous country and narrow, navy-crowded seas.', author: 'carlo', date: 'April 7, 2014', comments: '4' };
}])
app.directive('postPreview', function() {
  return {
    restrict: 'E',
    scope: {
      postInfo: '=info'
    },
    templateUrl: 'post-preview.html'
  };
});
