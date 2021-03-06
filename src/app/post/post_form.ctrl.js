require('../app');

(function () {
  "use strict";
  angular.module("blog").controller("PostFormCtrl", ["PostsService", "$routeParams", "$location", function (PostsService, $routeParams, $location) {
    var vm = this;

    vm.save = saveForm;

    vm.post = {};

    initialize();

    function initialize () {
      vm.post.date = new Date();
      if ($routeParams.post_id) {
        PostsService.get($routeParams.post_id).then(function (resp) {
          vm.post = resp.data;
          vm.post.date = vm.post.date || new Date();
        });
      }

    }

    function saveForm () {
      var method;

      method = $routeParams.post_id ? "update" : "create";
      PostsService[method](vm.post).then(function (resp) {
        $location.path("/posts/" + resp.data._id);
      });
    }
  }]);
}());
