'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:AssignmentviewCtrl
 * @description
 * # AssignmentviewCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('AssignmentViewCtrl', function ($uibModalInstance, assignmentService, activityservice, studentservice, Item) {
    var msc = this;
  	msc.title = 'Assignment'
  	msc.data = {}

  	msc.$onInit = $onInit;
  	msc.ok = ok;

  	function $onInit() {
  		assignmentService.getOne(Item)
    		.then(function(response) {
    			msc.data = response;
    			studentservice.getOne(msc.data.student)
    				.then(function(response) {
    					msc.data.studentData = response
    				})
    			activityservice.getOne(msc.data.activity)
    				.then(function(response) {
    					msc.data.activityData = response
    				})
    		});
  	}

  	function ok() {
  		$uibModalInstance.close('ok');
  	}
  });
