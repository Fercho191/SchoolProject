'use strict';

describe('Service: studentservice.js', function () {

  // load the service's module
  beforeEach(module('schoolProjectApp'));

  // instantiate service
  var studentservice.js;
  beforeEach(inject(function (_studentservice.js_) {
    studentservice.js = _studentservice.js_;
  }));

  it('should do something', function () {
    expect(!!studentservice.js).toBe(true);
  });

});
