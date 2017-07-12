'use strict';

describe('Controller: AssignmentupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var AssignmentupdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssignmentupdateCtrl = $controller('AssignmentupdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssignmentupdateCtrl.awesomeThings.length).toBe(3);
  });
});
