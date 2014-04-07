'use strict';

angular.module('dashboardChromeappApp')
    .service('Forecast', function Forecast($http, $q, Creds) {

        this.get = function () {
            var deferred = $q.defer();
            $http.get(Creds.api + 'weather/forecast/73013').success(function (data, $q) {
                // Forecast Widget
                var daily = [];
                angular.forEach(data.forecast.daily, function (v, k) {
                    daily.push({
                        date: moment().add('days', k).format('ddd'),
                        image: v.icon,
                        high: v.high_temperature,
                        low: v.low_temperature
                    });
                });
                deferred.resolve(daily);
            });
            return deferred.promise;
        }
    });
