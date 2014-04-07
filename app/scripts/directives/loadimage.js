'use strict';

angular.module('dashboardChromeappApp')
    .directive('loadImage', function ($timeout, Imageloader) {

        function link(scope, element, attrs) {
            Imageloader.get(attrs.loadImage).then(function (blob) {
                element[0].src = blob;
            })
        }

        return {
            link: link
        };
    });
