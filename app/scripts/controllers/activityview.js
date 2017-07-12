'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:ActivityViewCtrl
 * @description
 * # ActivityViewCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('ActivityViewCtrl', function ($uibModalInstance, activityservice, schoolService, Item) {
    var msc = this;
  	msc.title = 'Activity'
  	msc.data = {}

  	msc.$onInit = $onInit;
  	msc.ok = ok;

  	function $onInit() {
  		activityservice.getOne(Item)
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
