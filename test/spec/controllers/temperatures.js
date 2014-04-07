'use strict';

describe('Controller: TemperaturesCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardChromeappApp'));

  var TemperaturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemperaturesCtrl = $controller('TemperaturesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
