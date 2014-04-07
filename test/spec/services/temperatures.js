'use strict';

describe('Service: Temperatures', function () {

  // load the service's module
  beforeEach(module('dashboardChromeappApp'));

  // instantiate service
  var Temperatures;
  beforeEach(inject(function (_Temperatures_) {
    Temperatures = _Temperatures_;
  }));

  it('should do something', function () {
    expect(!!Temperatures).toBe(true);
  });

});
