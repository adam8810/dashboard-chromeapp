'use strict';

angular.module('dashboardChromeappApp')
    .controller('TemperaturesCtrl', function ($scope, $interval, Temperatures, Config) {

        getNestTemperature();

        $interval(getNestTemperature, Config.timing.temperature * 1000);

        function getNestTemperature() {
            Temperatures.internal().then(function (temps) {
                $scope.temp = {
                    away: Boolean(temps.current_state.away),
                    leaf: temps.current_state.leaf,
                    current: Math.floor(temps.current_state.temperature),
                    target: Math.floor(temps.target.temperature[0])
                };
            });

//            if (data.results.current_state.fan === true) {
//                color = (data.results.current_state.ac === true) ? '#6495ED' : '#B22222';
//            } else {
//                color = '#D3D4D4';
//            }
        }
    });
