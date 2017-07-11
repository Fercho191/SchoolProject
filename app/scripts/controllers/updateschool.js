'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:UpdateschoolCtrl
 * @description
 * # UpdateschoolCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('UpdateschoolCtrl', function ($uibModalInstance, schoolService, Item) {
    var msc = this;
  	msc.title = 'Update School'
  	msc.data = {}

  	msc.$onInit = $onInit;
  	msc.ok = ok;
  	msc.cancel = cancel;

  	function $onInit() {
  		schoolService.getOne(Item)
    		.then(function(response) {
    			msc.data = response;
    		});
  	}

  	function ok() {
  		schoolService.update(Item, {
  				name: msc.data.name
  			})
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
