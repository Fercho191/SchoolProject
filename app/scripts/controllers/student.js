'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:StudentCtrl
 * @description
 * # StudentCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('StudentCtrl', function (studentservice, $uibModal, modalService) {
    var sc = this;
    sc.title = 'Students';
    sc.schools = [];

    sc.$onInit = $onInit;
    sc.newItem = newItem;
    sc.getItem = getItem;
    sc.getAll = getAll;
    sc.deleteItem = deleteItem;
    sc.updateItem = updateItem;

    function $onInit() {
    	sc.getAll()
    }

    function newItem() {
      modalService.openModal('views/studentform.html','StudentCreateCtrl','msc')
        .then(function(response) {
          sc.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }
    
    function getItem(id) {
      modalService.openModal('views/studentview.html','StudentViewCtrl','msc', id)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(err) {
          console.log(err)
        })
    }

    function deleteItem(id) {
    	studentservice.delete(id)
    		.then(function(response) {
    			console.log(response);
          sc.getAll()
    		});
    }

    function getAll() {
      studentservice.getAll()
        .then(function(response) {
          sc.schools = response.results;
        });
    }

    function updateItem(id) {
      modalService.openModal('views/studentform.html','StudentUpdateCtrl','msc', id)
        .then(function(response) {
          sc.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }

  });
