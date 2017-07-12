'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:CreateactivityCtrl
 * @description
 * # CreateactivityCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('CreateactivityCtrl', function ($uibModalInstance, activityservice, schoolService, Item) {
  	var msc = this;
  	msc.title = 'New Activity'
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
  		activityservice.create(msc.data)
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
