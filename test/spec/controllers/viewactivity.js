'use strict';

describe('Controller: ViewactivityCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var ViewactivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewactivityCtrl = $controller('ViewactivityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewactivityCtrl.awesomeThings.length).toBe(3);
  });
});
