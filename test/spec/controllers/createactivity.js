'use strict';

describe('Controller: CreateactivityCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var CreateactivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateactivityCtrl = $controller('CreateactivityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateactivityCtrl.awesomeThings.length).toBe(3);
  });
});
