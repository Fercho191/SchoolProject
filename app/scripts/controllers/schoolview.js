'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:SchoolViewCtrl
 * @description
 * # SchoolViewCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('SchoolViewCtrl', function ($uibModalInstance, schoolService, Item) {
    var msc = this;
  	msc.title = 'School'
  	msc.data = {}

  	msc.$onInit = $onInit;
  	msc.ok = ok;

  	function $onInit() {
  		schoolService.getOne(Item)
    		.then(function(response) {
    			msc.data = response;
    		});
  	}
  	function ok() {
  		$uibModalInstance.close('ok');
  	}
  });
