'use strict';

angular.module('dashboardChromeappApp')
    .controller('ForecastCtrl', function (Forecast, Config, $interval, $scope) {

        // Init
        getForecast();

        $interval(getForecast, Config.timing.forecast);

        function getForecast() {
            $scope.forecastLastUpdate = moment().format('h:mma');
            Forecast.get().then(function(forecast) {
                var highTemps = [];
                var lowTemps = [];
                angular.forEach(forecast, function(v) {
                    highTemps.push(encodeURIComponent(v.high));
                    lowTemps.push(encodeURIComponent(v.low));

                });

                $scope.tempsImage = 'https://chart.googleapis.com/chart?chs=315x100&chd=t:' + highTemps.join(',') + '|' + lowTemps.join(',') +
                    '&chco=FE9A2E,2E9AFE&cht=lc:nda&chxp=50&chf=bg,s,FFFFFF';

                $scope.forecast = forecast;
            })
        }
    });
