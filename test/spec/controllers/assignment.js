'use strict';

describe('Controller: AssignmentCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var AssignmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssignmentCtrl = $controller('AssignmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssignmentCtrl.awesomeThings.length).toBe(3);
  });
});
