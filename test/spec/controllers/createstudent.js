'use strict';

describe('Controller: CreatestudentCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var CreatestudentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatestudentCtrl = $controller('CreatestudentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatestudentCtrl.awesomeThings.length).toBe(3);
  });
});
