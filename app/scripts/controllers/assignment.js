'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:AssignmentCtrl
 * @description
 * # AssignmentCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('AssignmentCtrl', function (assignmentService, activityservice, studentservice, $uibModal, modalService) {
    var ac = this;
    ac.title = 'Assignments';
    ac.assignments = [];

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
      modalService.openModal('views/assignmentform.html','AssignmentCreateCtrl','msc')
        .then(function(response) {
          console.log(response)
          ac.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }
    
    function getItem(id) {
      modalService.openModal('views/assignmentview.html','AssignmentViewCtrl','msc', id)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(err) {
          console.log(err)
        })
    }

    function deleteItem(id) {
    	assignmentService.delete(id)
    		.then(function(response) {
    			console.log(response);
          ac.getAll()
    		});
    }

    function getAll() {
      assignmentService.getAll()
        .then(function(response) {
          ac.assignments = response.results;
          ac.assignments.forEach(function(item) {
          	studentservice.getOne(item.student)
          		.then(function(student) {
          			item.studentData = student
          		})
          	activityservice.getOne(item.activity)
          		.then(function(activity) {
          			item.activityData = activity
          		})
          })
        });
    }

    function updateItem(id) {
      modalService.openModal('views/assignmentform.html','AssignmentUpdateCtrl','msc', id)
        .then(function(response) {
          ac.getAll()
        })
        .catch(function(err) {
          console.log(err)
        })
    }

  });
