'use strict';

describe('Directive: loadImage', function () {

  // load the directive's module
  beforeEach(module('dashboardChromeappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<load-image></load-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadImage directive');
  }));
});
