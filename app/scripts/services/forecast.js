'use strict';

angular.module('dashboardChromeappApp')
    .service('Forecast', function Forecast(Creds, $http, $q, Config) {

        this.get = function () {
            var deferred = $q.defer();
            $http.get('http://api.wunderground.com/api/'+Creds.wunderground_key+'/forecast10day/q/'+Config.forecastState+'/'+Config.forecastCity+'.json').success(function (data) {
                console.log('f', data);
                // Forecast Widget
                var daily = [];
                angular.forEach(data.forecast.simpleforecast.forecastday, function (day) {
                    daily.push({
                        date: day.date.weekday_short,
                        image: day.icon,
                        high: day.high.fahrenheit,
                        low: day.low.fahrenheit
                    });
                });
                deferred.resolve(daily);
            });
            return deferred.promise;
        }
    });
