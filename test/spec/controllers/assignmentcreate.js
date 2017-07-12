'use strict';

describe('Controller: AssignmentcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var AssignmentcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssignmentcreateCtrl = $controller('AssignmentcreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssignmentcreateCtrl.awesomeThings.length).toBe(3);
  });
});
