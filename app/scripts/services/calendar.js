'use strict';

angular.module('dashboardChromeappApp')
    .service('Calendar', function Calendar($q, $http, Oauth2, Config) {
        this.bills = function () {
            var deferred = $q.defer();
            var calendarID = Config.calendar.bills;
            var params = {
                fields: 'items(summary,start)',
                timeMin: encodeURIComponent(moment().toISOString()),
                maxResults: 4,
                orderBy: 'startTime',
                singleEvents: true
            };

            getCalendar(calendarID, params).then(function(events) {
                deferred.resolve(events);
            });

            return deferred.promise;
        };

        this.events = function () {
            var deferred = $q.defer();
            var calendarID = Config.calendar.events;
            var params = {
                fields: 'items(summary,start)',
                timeMin: encodeURIComponent(moment().toISOString()),
                maxResults: 4,
                orderBy: 'startTime',
                singleEvents: true
            };

            getCalendar(calendarID, params).then(function(events) {
                deferred.resolve(events);
            });

            return deferred.promise;
        };

        function getCalendar(calendarID, params) {
            var deferred = $q.defer();
            var paramList = "?";
            angular.forEach(params, function (param, key) {
                paramList += '&' + key + '=' + param;
            });

            Oauth2.getToken().then(function (token) {
                $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                $http.get('https://www.googleapis.com/calendar/v3/calendars/' + calendarID + '/events' + paramList)
                    .success(function (d) {
                        deferred.resolve(d.items);
                    });
            });
            return deferred.promise;
        }
    });
