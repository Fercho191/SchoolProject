'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:AssignmentcreateCtrl
 * @description
 * # AssignmentcreateCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('AssignmentCreateCtrl', function ($uibModalInstance, activityservice, studentservice, assignmentService, Item) {
  	var msc = this;
  	msc.title = 'New Student'
  	msc.data = {}

  	msc.$onInit = $onInit
  	msc.ok = ok;
  	msc.cancel = cancel;

  	function $onInit() {
  		getStudents()
  		getActivities()
  	}

    function getStudents() {
      studentservice.getAll()
        .then(function(response) {
          msc.students = response.results;
        });
    }

    function getActivities() {
      activityservice.getAll()
        .then(function(response) {
          msc.activities = response.results;
        });
    }

  	function ok() {
  		assignmentService.create(msc.data)
  			.then(function(response) {
  				$uibModalInstance.close(response);
  			})
  			.catch(function(err) {
  				$uibModalInstance.dismiss(err)
  			})
  	}

  	function cancel() {
  		$uibModalInstance.dismiss('cancel');
  	}
  });
