'use strict';

angular.module('dashboardChromeappApp')
    .controller('ForecastCtrl', function (Forecast, Config, $interval, $scope) {

        // Init
        getForecast();

        $interval(getForecast, Config.timing.forecast);

        function getForecast() {
            Forecast.get().then(function(forecast) {
//                $scope.tempsImage = 'https://chart.googleapis.com/chart?chs=315x100&chd=t:' + high_temps.join(',') + '|' + low_temps.join(',') +
//                    '&chco=FE9A2E,2E9AFE&cht=lc:nda&chxp=50&chf=bg,s,3A3737';
                $scope.forecast = forecast;
            })
        }
    });
