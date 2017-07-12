'use strict';

describe('Controller: UpdatestudentCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var UpdatestudentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatestudentCtrl = $controller('UpdatestudentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdatestudentCtrl.awesomeThings.length).toBe(3);
  });
});
