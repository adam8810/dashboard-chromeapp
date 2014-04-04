'use strict';

describe('Service: Creds', function () {

  // load the service's module
  beforeEach(module('dashboardChromeappApp'));

  // instantiate service
  var Creds;
  beforeEach(inject(function (_Creds_) {
    Creds = _Creds_;
  }));

  it('should do something', function () {
    expect(!!Creds).toBe(true);
  });

});
