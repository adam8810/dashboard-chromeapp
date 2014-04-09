'use strict';

angular.module('dashboardChromeappApp')
    .controller('BillsCtrl', function ($scope, Calendar) {
        Calendar.bills().then(function (events) {
            $scope.events = events;
        });
    });
