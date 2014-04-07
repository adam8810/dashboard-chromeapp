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
            var oldWhiteList = $compileProvider.imgSrcSanitizationWhitelist();
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
        }
    ]);
