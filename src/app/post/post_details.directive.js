require('../app');

(function() {
  "use strict";

  angular.module("blog").directive("postDetails", function () {
    return {
      scope: {
        post: "=post",
      },
      templateUrl: 'views/post/post_details.html',
    };
  });
}());
