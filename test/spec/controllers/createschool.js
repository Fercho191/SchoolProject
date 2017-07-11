'use strict';

describe('Controller: CreateschoolCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var CreateschoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateschoolCtrl = $controller('CreateschoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateschoolCtrl.awesomeThings.length).toBe(3);
  });
});
