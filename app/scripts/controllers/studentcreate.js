'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:StudentCreateCtrl
 * @description
 * # StudentCreateCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('StudentCreateCtrl', function ($uibModalInstance, studentservice, schoolService, Item) {
  	var msc = this;
  	msc.title = 'New Student'
  	msc.data = {}

  	msc.$onInit = $onInit
  	msc.ok = ok;
  	msc.cancel = cancel;

  	function $onInit() {
  		schoolService.getAll()
        .then(function(response) {
          msc.schools = response.results;
        });
  	}

  	function ok() {
  		studentservice.create(msc.data)
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
