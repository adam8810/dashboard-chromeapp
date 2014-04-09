'use strict';

describe('Controller: TrafficCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardChromeappApp'));

  var TrafficCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrafficCtrl = $controller('TrafficCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
