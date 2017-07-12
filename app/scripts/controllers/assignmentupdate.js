'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:AssignmentupdateCtrl
 * @description
 * # AssignmentupdateCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('AssignmentUpdateCtrl', function ($uibModalInstance, studentservice, activityservice, assignmentService, Item) {
    var msc = this;
    msc.title = 'Update Activity'
    msc.data = {}

    msc.$onInit = $onInit;
    msc.ok = ok;
    msc.cancel = cancel;

    function $onInit() {
  		getStudents()
  		getActivities()
  		assignmentService.getOne(Item)
        .then(function(response) {
          msc.data = response;
          msc.data.student = msc.data.student.toString();
          msc.data.activity = msc.data.activity.toString();
        });
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
      assignmentService.update(Item, {
          activity: msc.data.activity,
          student: msc.data.student
        })
        .then(function(response) {
          $uibModalInstance.close(response);
        })
        .catch(function(err) {
          $uibModalInstance.dismiss(err)
        });
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  });
