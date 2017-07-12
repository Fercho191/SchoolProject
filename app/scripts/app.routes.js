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
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/schools')
  	$stateProvider
      .state('schools', {
        url: '/schools',
        templateUrl: 'views/schools.html',
        controller: 'SchoolCtrl',
        controllerAs: 'sc'
      })
      .state('students', {
        url: '/students',
        templateUrl: 'views/students.html',
        controller: 'StudentCtrl',
        controllerAs: 'sc'
      })
      .state('activities', {
        url: '/activities',
        templateUrl: 'views/activities.html',
        controller: 'ActivityCtrl',
        controllerAs: 'ac'
      })
  		.state('assignments', {
  			url: '/assignments',
  			templateUrl: 'views/assignments.html',
  			controller: 'AssignmentCtrl',
  			controllerAs: 'ac'
  		});
  });
