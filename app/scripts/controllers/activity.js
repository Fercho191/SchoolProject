'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('ActivityCtrl', function (activityservice, $uibModal, modalService) {
    var ac = this;
    ac.title = 'Activities';
    ac.activities = [];

    ac.$onInit = $onInit;
    ac.newItem = newItem;
    ac.getItem = getItem;
    ac.getAll = getAll;
    ac.deleteItem = deleteItem;
    ac.updateItem = updateItem;

    function $onInit() {
    	ac.getAll()
    }

    function newItem() {
      modalService.openModal('views/activityform.html','ActivityCreateCtrl','msc')
        .then(function(response) {
          console.log(response)
          ac.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }
    
    function getItem(id) {
      modalService.openModal('views/activityview.html','ActivityViewCtrl','msc', id)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(err) {
          console.log(err)
        })
    }

    function deleteItem(id) {
    	activityservice.delete(id)
    		.then(function(response) {
    			console.log(response);
          ac.getAll()
    		});
    }

    function getAll() {
      activityservice.getAll()
        .then(function(response) {
          ac.activities = response.results;
        });
    }

    function updateItem(id) {
      modalService.openModal('views/activityform.html','ActivityUpdateCtrl','msc', id)
        .then(function(response) {
          ac.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }

  });
