'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:CreateschoolCtrl
 * @description
 * # CreateschoolCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('CreateschoolCtrl', function ($uibModalInstance, schoolService) {
  	var msc = this;
  	msc.title = 'New School'
  	msc.data = {}

  	msc.ok = ok;
  	msc.cancel = cancel;

  	function ok() {
  		schoolService.create(msc.data)
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
