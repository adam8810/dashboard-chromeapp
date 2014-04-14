'use strict';

angular.module('dashboardChromeappApp')
  .service('Config', function Config() {

        // Intervals for refreshing data (In Minutes)
        this.timing = {
//            movies:
            temperature: 900000, // 15 * 60 * 1000
            forecast: 900000, // 15 * 60 * 1000,
            movies: 45000 // 45sec * 1000milli
        };

        // Weather Underground Location
        this.forecastState = 'OK';
        this.forecastCity = 'Edmond';

        this.calendar = {
            bills: 'fjg4l4qekujjgr89daqmvqc8a8@group.calendar.google.com',
            events: 'le4l330vjb75cjcsfagnf3ff98@group.calendar.google.com'
        }

        this.workTraffic = {
            center: {
                latitude: 35.550000,
                longitude: -97.4881239
            },
            zoom: 11,
            style: [
                {
                    'featureType': 'road.local',
                    'elementType': 'labels',
                    'stylers': [
                        {'color': '#768080'},
                        {'hue': '#00ff33'},
                        {'weight': 0.4},
                        {'visibility': 'off'}
                    ]
                }, {
                    'featureType': 'road.arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {'visibility': 'off'}
                    ]
                }, {
                    'elementType': 'geometry.fill',
                    'stylers': [
                        {'visibility': 'on'},
                        {'color': '#3a3737'}
                    ]
                }, {
                    'featureType': 'road.local',
                    'elementType': 'labels.text',
                    'stylers': [
                        {'visibility': 'off'}
                    ]
                }, {
                    'featureType': 'road',
                    'elementType': 'labels'}, {
                }, {
                    'featureType': 'road.arterial',
                    'stylers': [
                        {'visibility': 'off'}
                    ]
                }, {
                    'featureType': 'road.highway.controlled_access',
                    'elementType': 'labels.text',
                    'stylers': [
                        {'visibility': 'off'}
                    ]
                }
            ]
        };
  });
