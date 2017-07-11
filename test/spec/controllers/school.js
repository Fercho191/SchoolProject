'use strict';

describe('Controller: SchoolCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolProjectApp'));

  var SchoolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchoolCtrl = $controller('SchoolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SchoolCtrl.awesomeThings.length).toBe(3);
  });
});
