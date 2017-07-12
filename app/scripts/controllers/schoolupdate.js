'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:SchoolUpdateCtrl
 * @description
 * # SchoolUpdateCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('SchoolUpdateCtrl', function ($uibModalInstance, schoolService, Item) {
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
