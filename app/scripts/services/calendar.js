'use strict';

angular.module('dashboardChromeappApp')
  .service('Calendar', function Calendar() {
        this.bills = function() {
            var deferred = $q.defer();
            gapi.client.load('calendar', 'v3', function() {
                var date = new Date();
                var month = (date.getMonth()) + 1;
                var year = date.getFullYear();
                var numOfDays = Date.getDaysInMonth(year, month);

                var request = gapi.client.calendar.events.list({
                    calendarId: 'fjg4l4qekujjgr89daqmvqc8a8@group.calendar.google.com',
                    fields: 'items(summary,start)',
                    timeMin: (new Date()).toISOString(), // start
                    timeMax: (new Date(year + '-' + (month + 1) + '-' + numOfDays + ' 00:00:00')).toISOString(), // end
                    orderBy: 'startTime',
                    singleEvents: true
                });

                request.execute(function(resp) {
                    deferred.resolve(resp.items);
                });
            });

            return deferred.promise;
        };

        this.events = function() {
            var deferred = $q.defer();
            gapi.client.load('calendar', 'v3', function() {
                var date = new Date();
                var month = (date.getMonth()) + 1;
                var year = date.getFullYear();
                var numOfDays = Date.getDaysInMonth(year, month);

                var request = gapi.client.calendar.events.list({
                    calendarId: 'le4l330vjb75cjcsfagnf3ff98@group.calendar.google.com', // Contacts
                    fields: 'items(summary,start)',
                    timeMin: (new Date()).toISOString(), // start
                    timeMax: (new Date(year + '-' + (month + 1) + '-' + numOfDays + ' 00:00:00')).toISOString(), // end
                    orderBy: 'startTime',
                    singleEvents: true
                });

                request.execute(function(resp) {
                    console.log('anibirth',resp.items);
                    deferred.resolve(resp.items);
                });
            });

            return deferred.promise;
        };
  });
