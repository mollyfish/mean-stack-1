!function(){"use strict";angular.module("blog").controller("PostsCtrl",["PostsService",function(t){function n(){o()}function o(){t.get().then(function(t){s.posts=t.data})}function e(n){t["delete"](n).then(function(){o()})}var s=this;s.posts=[],s["delete"]=e,n()}])}();