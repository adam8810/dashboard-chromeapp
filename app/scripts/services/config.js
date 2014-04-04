'use strict';

angular.module('dashboardChromeappApp')
  .service('Config', function Config() {

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
