require('../app');

(function () {
  "use strict";

  angular.module("blog").service("PostsService", ["$http", function ($http) {
    var urlRoot = "/api/posts";

    var Post = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model); // ideal, but doesn't work
      },
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Post;
  }]);
}());
