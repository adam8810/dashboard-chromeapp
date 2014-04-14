'use strict';

angular.module('dashboardChromeappApp')
    .directive('loadImage', function ($timeout, Imageloader) {

        function link(scope, element, attrs) {
            attrs.$observe('loadImage', function (src) {
                Imageloader.get(src).then(function (blob) {
                    element[0].src = blob;
                });
            });
        }

        return {
            link: link
        };
    });
