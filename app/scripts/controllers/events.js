'use strict';

angular.module('dashboardChromeappApp')
    .controller('EventsCtrl', function ($scope, Calendar) {
        Calendar.events().then(function (events) {
            $scope.events = events;
        });
    });
