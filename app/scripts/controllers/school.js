'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:SchoolCtrl
 * @description
 * # SchoolCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('SchoolCtrl', function (schoolService) {
    var sc = this;
    sc.title = 'Schools';
    sc.schools = [];

    sc.$onInit = $onInit;
    sc.getItem = getItem;
    sc.deleteItem = deleteItem;

    function $onInit() {
    	schoolService.getAll()
    		.then(function(response) {
    			sc.schools = response.results;
    		});
    }

    function getItem(id) {
    	schoolService.getOne(id)
    		.then(function(response) {
    			console.log(response);
    		});
    }

    function deleteItem(id) {
    	schoolService.delete(id)
    		.then(function(response) {
    			console.log(response);
    		});
    }

  });
