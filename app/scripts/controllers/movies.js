'use strict';

angular.module('dashboardChromeappApp')
    .controller('MoviesCtrl', function ($scope, $interval, $timeout, $http, Creds, Config, Movies) {

        $scope.movies = [];
        $scope.highlightedMovie = {};
        getUpcomingMovies();

        // Refresh listed movies
        $interval(getUpcomingMovies, Config.timing.movies);

        function getUpcomingMovies() {
            Movies.upcoming().then(function (movies) {
                $scope.movies = movies;
                Movies.nextHighlightedMovie();
            });
        }

        $interval(incrementHighlightedMovie, 2000);

        function incrementHighlightedMovie() {
            $scope.highlightedMovie = Movies.nextHighlightedMovie();
        }

        // Logic for highlighted current movie
        $scope.isHighlighted = function (index) {
            return index == Movies.currentHighlightedMovie() - 1;
        }
    })
;
