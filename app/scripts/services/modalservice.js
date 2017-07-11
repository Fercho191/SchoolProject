'use strict';

/**
 * @ngdoc service
 * @name schoolProjectApp.modalService
 * @description
 * # modalService
 * Factory in the schoolProjectApp.
 */
angular.module('schoolProjectApp')
  .factory('modalService', function ($uibModal) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    return {
      openModal: function (templateUrl, controller, controllerAs, resolve = 0) {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: templateUrl,
          controller: controller,
          controllerAs: controllerAs,
          size: 'sm',
          resolve: {
            Item : function() {
              return resolve
            }
          }
        })

        return modalInstance.result
          .then(function(response) {
            return response
          })
          .catch(function(err) {
            return (err)
          })
      }
    };
  });
