'use strict';

describe('Controller: UpdateactivityCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var UpdateactivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateactivityCtrl = $controller('UpdateactivityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdateactivityCtrl.awesomeThings.length).toBe(3);
  });
});
