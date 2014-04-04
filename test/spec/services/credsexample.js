'use strict';

describe('Service: Credsexample', function () {

  // load the service's module
  beforeEach(module('dashboardChromeappApp'));

  // instantiate service
  var Credsexample;
  beforeEach(inject(function (_Credsexample_) {
    Credsexample = _Credsexample_;
  }));

  it('should do something', function () {
    expect(!!Credsexample).toBe(true);
  });

});
