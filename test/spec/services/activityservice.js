'use strict';

describe('Service: activityservice', function () {

  // load the service's module
  beforeEach(module('schoolProjectApp'));

  // instantiate service
  var activityservice;
  beforeEach(inject(function (_activityservice_) {
    activityservice = _activityservice_;
  }));

  it('should do something', function () {
    expect(!!activityservice).toBe(true);
  });

});
