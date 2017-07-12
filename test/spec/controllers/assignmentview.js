'use strict';

describe('Controller: AssignmentviewCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var AssignmentviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssignmentviewCtrl = $controller('AssignmentviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssignmentviewCtrl.awesomeThings.length).toBe(3);
  });
});
