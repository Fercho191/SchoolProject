'use strict';

describe('Service: schoolService', function () {

  // load the service's module
  beforeEach(module('schoolProjectApp'));

  // instantiate service
  var schoolService;
  beforeEach(inject(function (_schoolService_) {
    schoolService = _schoolService_;
  }));

  it('should do something', function () {
    expect(!!schoolService).toBe(true);
  });

});
