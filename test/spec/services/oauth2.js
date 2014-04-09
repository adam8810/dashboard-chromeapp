'use strict';

describe('Service: Oauth2', function () {

  // load the service's module
  beforeEach(module('dashboardChromeappApp'));

  // instantiate service
  var Oauth2;
  beforeEach(inject(function (_Oauth2_) {
    Oauth2 = _Oauth2_;
  }));

  it('should do something', function () {
    expect(!!Oauth2).toBe(true);
  });

});
