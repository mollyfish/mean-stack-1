require('angular');
require('angular-route');

(function () {
  "use strict";

  var app = angular.module("blog", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/posts", {
      templateUrl: "views/posts/posts_list.html",
      controller: "PostsCtrl as vm",
    })
    .when("/posts/new", {
      templateUrl: "views/post/post_form.html",
      controller: "PostFormCtrl as vm",
    })
    .when("/posts/:post_id/edit", {
      templateUrl: "views/post/post_form.html",
      controller: "PostFormCtrl as vm",
    })
    .when("/posts/:post_id", {
      templateUrl: "views/post/post_detail.html",
      controller: "PostCtrl as vm",
    })
    .otherwise({
      redirectTo: "/posts",
    });
  }]);

  app.controller('DateCtrl', ['$scope', function($scope) {
      $scope.date = new Date();
    }
  ]);
}());


require('./index.js');
