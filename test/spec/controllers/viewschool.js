'use strict';

describe('Controller: ViewschoolCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var ViewschoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewschoolCtrl = $controller('ViewschoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewschoolCtrl.awesomeThings.length).toBe(3);
  });
});
