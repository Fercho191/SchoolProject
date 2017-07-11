'use strict';

describe('Controller: UpdateschoolCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var UpdateschoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateschoolCtrl = $controller('UpdateschoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdateschoolCtrl.awesomeThings.length).toBe(3);
  });
});
