'use strict';

angular.module('dashboardChromeappApp')
  .service('Temperatures', function Temperatures($http, $q, Creds) {
        this.internal = function() {
            var deferred = $q.defer();
            $http.get(Creds.api + 'ambooth/nest/status.json').success(function (data) {
                deferred.resolve(data.results);
            });
            return deferred.promise;
        }
  });
