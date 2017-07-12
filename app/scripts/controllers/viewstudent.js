'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:ViewstudentCtrl
 * @description
 * # ViewstudentCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('ViewstudentCtrl', function ($uibModalInstance, studentservice, schoolService, Item) {
    var msc = this;
  	msc.title = 'Student'
  	msc.data = {}

  	msc.$onInit = $onInit;
  	msc.ok = ok;

  	function $onInit() {
  		studentservice.getOne(Item)
    		.then(function(response) {
    			msc.data = response;
    			schoolService.getOne(msc.data.school)
    				.then(function(response) {
    					msc.data.schoolData = response
    				})
    		});
  	}
  	function ok() {
  		$uibModalInstance.close('ok');
  	}
  });
