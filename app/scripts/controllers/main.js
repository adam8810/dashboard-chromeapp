'use strict';

/* global cast, gapi */
angular.module('dashboardChromeappApp').controller('MainCtrl', function ($scope, $http, $resource, $interval, $timeout, $q, Config, Creds, Calendar, Auth, Imageloader) {

    var MOVIETICKERUPDATE = 45; // seconds
    var NESTSTATUSUPDATE = 5; // seconds
    var DAY = 86400; // seconds
    var PERSONAL = true;
    $scope.map = Config.workTraffic;

    // Google Cal

    var client_id = Creds.google_client_id;
    var api_key = Creds.google_api_key;
    var scopes = [
        'https://www.googleapis.com/auth/tasks',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/calendar'
    ];

    // TODO: Fix GAPI logic
    $timeout(function () {
        gapi.client.setApiKey(api_key);
        checkAuth();
    }, 1000);

    function checkAuth() {
        gapi.auth.authorize({client_id: client_id, scope: scopes, immediate: true}, handleAuthResult);
    }

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            makeApiCall();
        } else {
            gapi.auth.authorize({client_id: client_id, scope: scopes, immediate: false}, handleAuthResult);
        }
    }

    function makeApiCall() {
        gapi.client.load('tasks', 'v1', function () {
            var request = gapi.client.tasks.tasks.list({
                tasklist: Creds.google_tasks_key
            });

            request.execute(function (resp) {
                console.log(resp);
            });
        });

        Calendar.bills().then(function (d) {

            $scope.widgets.bills.value = d;
        });

        Calendar.events().then(function (d) {
            $scope.widgets.birthdays.value = d;
        });
    }

    var widgets = {
        meter: 'partials/meter.html',
        stack: 'partials/stack.html',
        temps: 'partials/temps.html',
        list11: 'partials/list_1x1.html',
        movies: 'partials/movies.html',
        traffic: 'partials/traffic.html',
        bills: 'partials/bills.html',
        birthdays: 'partials/events.html',
        tasklist: 'partials/tasks.html',
        forecast: 'partials/forecast.html'
    };

    $scope.highlightedMovie = -1;

    $scope.highlightClass = function (index) {
        return (index === $scope.highlightedMovie ? true : false);
    };

    $scope.widgets = {
        temps: {x: 1, y: 1, title: 'Temperatures', external: 0, internal: '-', color: '#D3D4D4', type: widgets.temps},
        bills: {x: 3, y: 1, title: 'Bills', value: [], type: widgets.bills},
        birthdays: {x: 2, y: 1, title: 'Birthdays & Anniversaries', value: [], type: widgets.birthdays},
        movies: {x: 1, y: 2, title: 'Now Playing', value: [], type: widgets.movies},
//        tasklist: {x: 3, y: 1, title: 'Dashboard Tasks', value: 0, type: widgets.tasklist},
        forecast: {x: 3, y: 3, title: 'Forecast', value: [], type: widgets.forecast},
        traffic: {x: 4, y: 1, title: 'Traffic to Work', value: [], type: widgets.traffic}
    };

    getForecast();
    getUpcomingMovies();
    getNestTemperature();

    var timer = 1;
    $scope.highlightedMovie = 0;
    $interval(function () {
//        console.log(timer);

        if (timer % 10 === 1) {
            getForecast();
        }

        if (timer !== 1 && timer % MOVIETICKERUPDATE === 1) {
            if ($scope.highlightedMovie === 10) {

            }
            $scope.highlightedMovie += 1;
        }

        // Every 5 minutes
        if (timer % NESTSTATUSUPDATE === 1) {
            getNestTemperature();
            getForecast();
        }

        // Every Day
        if (timer % DAY === 1) {
            console.log('um');
            getUpcomingMovies();
        }
        if (timer === (20 * 60 * 1000)) {
            timer = 0;
        } else {
            timer++;
        }
    }, 1 * 1000);

    // Weather Forecast
    function getForecast() {
        var forecast = $resource(Creds.api + 'weather/forecast/:zip', {
            zip: '73013'
        });

        forecast.get(function (data) {
            var high_temps = [];
            var low_temps = [];
            for (var i in data.forecast.daily) {
                high_temps.push(data.forecast.daily[i].high_temperature);
                low_temps.push(data.forecast.daily[i].low_temperature);
            }

            // TODO: Downlaod locally before attempting to display
            //$scope.tempsImage = 'https://chart.googleapis.com/chart?chs=315x100&chd=t:' + high_temps.join(',') + '|' + low_temps.join(',') + '&chco=FE9A2E,2E9AFE&cht=lc:nda&chxp=50&chf=bg,s,3A3737';

            // Widget 1 - External Temp
            $scope.widgets.temps.external = Math.floor((data.now.current_temperature) * 9 / 5 + 32); // Convert to Fahrenheit

            // Forecast Widget
            var daily = [];
            angular.forEach(data.forecast.daily, function (v, k) {
//                var day = new Date(Date.today().add(k).days());
                var day = moment().add('days', k).format('ddd');
                daily.push({date: day, image: v.icon, high: v.high_temperature, low: v.low_temperature});
            });
            $scope.widgets.forecast.value = daily;
        });
    }

    function getNestTemperature() {
        var nest = $resource(Creds.api + 'ambooth/nest/status.json');
        var color = null;

        nest.get(function (data) {
            if (data.results.current_state.fan === true) {
                color = (data.results.current_state.ac === true) ? '#6495ED' : '#B22222';
            } else {
                color = '#D3D4D4';
            }

            $scope.widgets.temps.color = color;
            $scope.widgets.temps.away = data.results.current_state.away ? 'Away' : '';
            $scope.widgets.temps.leaf = data.results.current_state.leaf;
            $scope.widgets.temps.internal = Math.floor(data.results.current_state.temperature);
        });
    }

    function getUpcomingMovies() {
        var upcoming = $resource(Creds.api + 'movies/now_playing.json');

        upcoming.get(function (movielist) {
            var list = [];
            angular.forEach(movielist.results, function (movielist_item) {

                // Get information for each movie
                var movieinfo = $resource(Creds.api + 'movies/movie/?id=:id', {
                    id: movielist_item.id
                });


                movieinfo.get(function (movie) {

                    list.push({
                        heading: movie.title,
                        subheading: movie.tagline,
                        mpaa_rating: movie.mpaa_rating,
                        release_date: movie.release_date_full,
                        overview: movie.overview,
                        poster: null, // TODO:movie.poster === null ? Imageloader.get('http://cf2.imgobject.com/t/p/w92' + movie.poster) : null,
                        backdrop: 'http://cf2.imgobject.com/t/p/w300/' + movie.backdrop
                    });

                });
            });
            $scope.widgets.movies.value = list;
        });
    }
});

