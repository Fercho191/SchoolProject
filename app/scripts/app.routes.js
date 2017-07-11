'use strict';

/**
 * @ngdoc overview
 * @name schoolProjectApp
 * @description
 * # schoolProjectApp
 *
 * Main module of the application.
 */
angular
  .module('schoolProjectApp')
  .config(function ($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('/schools');

  	$stateProvider
  		.state('schools', {
  			url: '/schools',
  			templateUrl: 'views/school.html',
  			controller: 'SchoolCtrl',
  			controllerAs: 'sc'
  		});
  });
