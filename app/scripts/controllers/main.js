'use strict';

/* global cast, gapi */
angular.module('dashboardChromeappApp').controller('MainCtrl', function ($scope) {

////    Imageloader.get('http://cf2.imgobject.com/t/p/w92/9IpbJ2F3bhSRsV0mQhAvi0ZtzoY.jpg').then(function(d) {
////        $scope.movietest = d;
////    });
//
//    var MOVIETICKERUPDATE = 3; // seconds
//    var NESTSTATUSUPDATE = 5; // seconds
//    var DAY = 86400; // seconds
//    var PERSONAL = true;
//    $scope.map = Config.workTraffic;
//
//    // Google Cal
//
//    var client_id = Creds.google_client_id;
//    var api_key = Creds.google_api_key;
//    var scopes = [
//        'https://www.googleapis.com/auth/tasks',
//        'https://www.googleapis.com/auth/plus.me',
//        'https://www.googleapis.com/auth/plus.login',
//        'https://www.googleapis.com/auth/calendar'
//    ];
//
//    // TODO: Fix GAPI logic
////    $timeout(function () {
////        gapi.client.setApiKey(api_key);
////        checkAuth();
////    }, 1000);
////
////    function checkAuth() {
////        gapi.auth.authorize({client_id: client_id, scope: scopes, immediate: true}, handleAuthResult);
////    }
//
////    function handleAuthResult(authResult) {
////        if (authResult && !authResult.error) {
////            makeApiCall();
////        } else {
////            gapi.auth.authorize({client_id: client_id, scope: scopes, immediate: false}, handleAuthResult);
////        }
////    }
//
////    function makeApiCall() {
////        gapi.client.load('tasks', 'v1', function () {
////            var request = gapi.client.tasks.tasks.list({
////                tasklist: Creds.google_tasks_key
////            });
////
////            request.execute(function (resp) {
////                console.log(resp);
////            });
////        });
////
////        Calendar.bills().then(function (d) {
////
////            $scope.widgets.bills.value = d;
////        });
////
////        Calendar.events().then(function (d) {
////            $scope.widgets.birthdays.value = d;
////        });
////    }
//
    var widgets = {
        meter: 'partials/meter.html',
        stack: 'partials/stack.html',
        temps: 'partials/temperatures.html',
        list11: 'partials/list_1x1.html',
        movies: 'partials/movies.html',
        traffic: 'partials/traffic.html',
        bills: 'partials/bills.html',
        birthdays: 'partials/events.html',
//        tasklist: 'partials/tasks.html',
        forecast: 'partials/forecast.html'
    };

//    $scope.highlightedMovie = -1;
//
//    $scope.highlightClass = function (index) {
//        return (index === $scope.highlightedMovie ? true : false);
//    };

//    $scope.currentBackdrop = "";

    $scope.widgets = {
        temps: {x: 1, y: 1, title: 'Temperatures', external: 0, internal: '-', color: '#D3D4D4', type: widgets.temps},
        bills: {x: 3, y: 1, title: 'Bills', value: [], type: widgets.bills},
        birthdays: {x: 2, y: 1, title: 'Birthdays & Anniversaries', value: [], type: widgets.birthdays},
        movies: {x: 1, y: 2, title: 'Now Playing', value: [], type: widgets.movies},
//        tasklist: {x: 3, y: 1, title: 'Dashboard Tasks', value: 0, type: widgets.tasklist},
        forecast: {x: 3, y: 3, title: 'Forecast', value: [], type: widgets.forecast},
        traffic: {x: 4, y: 1, title: 'Traffic to Work', value: [], type: widgets.traffic}
    };
//
//    // Timer
//    var timer = 1;
//    $scope.highlightedMovie = 0;
//    $interval(function () {
//
//        if (timer % 10 === 1) {
//            getForecast();
//        }
//
//        if (timer !== 1 && timer % MOVIETICKERUPDATE === 1) {
//            if ($scope.highlightedMovie === 10) {
//
//            }
//            $scope.highlightedMovie += 1;
//            $scope.currentBackdrop = $scope.movielist[$scope.highlightedMovie].backdrop;
//        }
//
//        // Every 5 minutes
//        if (timer % NESTSTATUSUPDATE === 1) {
//            getNestTemperature();
//            getForecast();
//        }
//
//        // Every Day
//        if (timer % DAY === 1) {
//            console.log('um');
//            getUpcomingMovies();
//        }
//        if (timer === (20 * 60 * 1000)) {
//            timer = 0;
//        } else {
//            timer++;
//        }
//    }, 1 * 1000);
});

