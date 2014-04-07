'use strict';

angular.module('dashboardChromeappApp')
    .controller('MoviesCtrl', function ($scope, $interval, $http, Creds, Imageloader) {

        var currentHighlight = 0;
        $scope.movies = [];
        $scope.highlightedMovie = {};


        $http({method: 'GET', url: Creds.api + 'movies/now_playing.json'}).success(getUpcoming);

        function getUpcoming(movielist) {
            angular.forEach(movielist.results, function (movielist_item) {

                // Get information for each movie
                $http.get(Creds.api + 'movies/movie/?id=' + movielist_item.id).success(function (movie) {

                    $scope.movies.push({
                        heading: movie.title,
                        subheading: movie.tagline,
                        mpaa_rating: movie.mpaa_rating ? movie.mpaa_rating : 'NR',
                        release_date: movie.release_date_full,
                        overview: movie.overview,
                        poster: movie.poster != null ? 'http://cf2.imgobject.com/t/p/w92' + movie.poster : null,
                        backdrop: 'http://cf2.imgobject.com/t/p/w300' + movie.backdrop
                    });
                });
            });
        }

        // Iterate through listed movies
        $interval(updateHighlightedMovie, 5000);

        function updateHighlightedMovie() {
            $scope.highlightedMovie = $scope.movies[currentHighlight];

            if (typeof($scope.movies[currentHighlight].backdrop) !== undefined) {

                Imageloader.get($scope.movies[currentHighlight].backdrop).then(function (blob) {
                    $scope.currentBackdrop = blob;
                });
            }

            if (currentHighlight < 4) {
                currentHighlight++;
            } else {
                currentHighlight = 0;
            }
        }

// Logic for highlighted current movie
        $scope.isHighlighted = function (index) {
            return index == currentHighlight - 1;
        }
    })
;
