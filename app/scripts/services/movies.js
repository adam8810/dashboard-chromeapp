'use strict';

angular.module('dashboardChromeappApp')
    .service('Movies', function Movies(Creds, $http, $q, Imageloader) {
        var movies = [];
        var currentHighlight = 1;

        this.upcoming = function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: Creds.api + 'movies/now_playing.json'}).success(getUpcoming);

            function getUpcoming(movielist) {

                angular.forEach(movielist.results, function (movielist_item) {
                    // Get information for each movie
                    $http.get(Creds.api + 'movies/movie/?id=' + movielist_item.id).success(function (movie) {
                        movies.push({
                            heading: movie.title,
                            subheading: movie.tagline,
                            mpaa_rating: movie.mpaa_rating ? movie.mpaa_rating : 'NR',
                            release_date: movie.release_date_full,
                            overview: movie.overview,
                            poster: movie.poster != null ? 'http://cf2.imgobject.com/t/p/w92' + movie.poster : '/images/movies/poster1.png',
                            backdrop: movie.backdrop != null ? 'http://cf2.imgobject.com/t/p/w300' + movie.backdrop : '/images/movies/backdrop1.png'
                        });
                    });
                });
                deferred.resolve(movies);
            }

            return deferred.promise;
        };

        this.currentHighlightedMovie = function () {
            return currentHighlight;
        };

        this.nextHighlightedMovie = function () {
            if (movies.length > 0) {

                if (currentHighlight < 5) {
                    currentHighlight++;
                } else {
                    currentHighlight = 1;
                }

                var highlightedMovie = movies[currentHighlight - 1];

                return highlightedMovie
            }
        };
    });