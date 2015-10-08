/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	(function () {
	  "use strict";

	  var app = angular.module("CRUDblog", ["ngRoute"]);

	  app.config(["$routeProvider", function ($routeProvider) {
	    $routeProvider.when("/players", {
	      templateUrl: "partials/players/players_list.html",
	      controller: "PlayersCtrl as vm",
	    })
	    .when("/players/new", {
	      templateUrl: "partials/players/player_form.html",
	      controller: "PlayerFormCtrl as vm",
	    })
	    .when("/players/:player_id/edit", {
	      templateUrl: "partials/players/player_form.html",
	      controller: "PlayerFormCtrl as vm",
	    })
	    .when("/players/:player_id", {
	      templateUrl: "partials/players/player_detail.html",
	      controller: "PlayerCtrl as vm",
	    })
	    .otherwise({
	      redirectTo: "/players",
	    });
	  }]);
	}());



	// 'use strict';
	// var angular = require('angular');
	// var app = angular.module('CRUDblog', []);
	// var archive = [
	//   { id: '001', title: 'One dictum erat et', body: 'The secular cooling that must someday overtake our planet has already gone far indeed with our neighbour. Its physical condition is still largely a mystery, but we know now that even in its equatorial region the midday temperature barely approaches that of our coldest winter. Its air is much more attenuated than ours its oceans have shrunk until they cover but a third of its surface, and as its slow seasons change huge snowcaps gather and melt about either pole and periodically inundate its temperate zones.', author: 'molly', date: 'April 1, 2014', comments: '2' },
	//   { id: '002', title: 'Two dictum erat et', body: 'The secular cooling that must someday overtake our planet has already gone far indeed with our neighbour. Its physical condition is still largely a mystery, but we know now that even in its equatorial region the midday temperature barely approaches that of our coldest winter. Its air is much more attenuated than ours its oceans have shrunk until they cover but a third of its surface, and as its slow seasons change huge snowcaps gather and melt about either pole and periodically inundate its temperate zones.', author: 'zach', date: 'April 9, 2014', comments: '4' },
	//   { id: '003', title: 'Three dictum erat et', body: 'The secular cooling that must someday overtake our planet has already gone far indeed with our neighbour. Its physical condition is still largely a mystery, but we know now that even in its equatorial region the midday temperature barely approaches that of our coldest winter. Its air is much more attenuated than ours its oceans have shrunk until they cover but a third of its surface, and as its slow seasons change huge snowcaps gather and melt about either pole and periodically inundate its temperate zones.', author: 'carlo', date: 'April 7, 2014', comments: '10' }
	// ];

	// app.controller('PreviewCtrl', ['$scope', function($scope) {
	//   // $scope.post = { id: '001', title: 'One dictum erat et', body: 'The secular cooling that must someday overtake our planet has already gone far indeed with our neighbour. Its physical condition is still largely a mystery, but we know now that even in its equatorial region the midday temperature barely approaches that of our coldest winter. Its air is much more attenuated than ours its oceans have shrunk until they cover but a third of its surface, and as its slow seasons change huge snowcaps gather and melt about either pole and periodically inundate its temperate zones.', author: 'carlo', date: 'April 7, 2014', comments: '4' };
	//   $scope.items = archive;
	// }])
	// // app.directive('postPreview', function() {
	// //   return {
	// //     restrict: 'E',
	// //   };
	// // });



/***/ }
/******/ ]);