'use strict';

angular.module('dashboardChromeappApp')
    .directive('loadImage', function ($timeout, Imageloader) {

        function link(scope, element, attrs) {
            var delay = attrs.loadImage ? 1 : 1000;

            $timeout(function () {
                Imageloader.get(attrs.loadImage).then(function (blob) {
                    element[0].src = blob;
                });
            }, delay);
        }

        return {
            link: link
        };
    });
