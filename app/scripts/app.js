'use strict';

angular
  .module('dashboardChromeappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .config( [
        '$compileProvider',
        function( $compileProvider ) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob:chrome-extension):/);
        }
    ]);
