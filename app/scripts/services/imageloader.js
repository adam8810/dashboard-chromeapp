'use strict';

/**
 * Service: ImageLoader
 * @description Used to download external images and making them local in compliance with CSP.
 * @returns promise to image object blob
 *
 */
angular.module('dashboardChromeappApp')
    .service('Imageloader', function Imageloader($q) {

        this.get = function (url) {
            console.log('url',url);
            var deferred = $q.defer();

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';

            xhr.onload = function (e) {
                console.log('res', window.webkitURL.createObjectURL(this.response));
                deferred.resolve(window.webkitURL.createObjectURL(this.response));
            };

            xhr.send();

            return deferred.promise;
        };

    });
