'use strict';

/**
 * @ngdoc function
 * @name schoolProjectApp.controller:StudentUpdateCtrl
 * @description
 * # StudentUpdateCtrl
 * Controller of the schoolProjectApp
 */
angular.module('schoolProjectApp')
  .controller('StudentUpdateCtrl', function ($uibModalInstance, studentservice, schoolService, Item) {
    var msc = this;
    msc.title = 'Update Student'
    msc.data = {}

    msc.$onInit = $onInit;
    msc.ok = ok;
    msc.cancel = cancel;

    function $onInit() {
      getSchools()
      studentservice.getOne(Item)
        .then(function(response) {
          msc.data = response;
          msc.data.school = msc.data.school.toString();
        });
    }

    function getSchools() {
      schoolService.getAll()
        .then(function(response) {
          msc.schools = response.results;
        });
    }

    function ok() {
      studentservice.update(Item, {
          name: msc.data.name,
          school: msc.data.school
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
