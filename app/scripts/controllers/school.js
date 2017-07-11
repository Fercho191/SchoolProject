'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:SchoolCtrl
 * @description
 * # SchoolCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('SchoolCtrl', function (schoolService, $uibModal, modalService) {
    var sc = this;
    sc.title = 'Schools';
    sc.schools = [];

    sc.$onInit = $onInit;
    sc.newItem = newItem;
    sc.getItem = getItem;
    sc.getAll = getAll;
    sc.deleteItem = deleteItem;

    function $onInit() {
    	sc.getAll()
    }

    function newItem() {
      modalService.openModal('views/schoolform.html','CreateschoolCtrl','msc')
        .then(function(response) {
          console.log(response)
          sc.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
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
          sc.getAll()
    		});
    }

    function getAll() {
      schoolService.getAll()
        .then(function(response) {
          sc.schools = response.results;
        });
    }

  });
