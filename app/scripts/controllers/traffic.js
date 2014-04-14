'use strict';

angular.module('dashboardChromeappApp')
    .controller('TrafficCtrl', function ($scope, Config) {
        $scope.map = Config.workTraffic;
    });
