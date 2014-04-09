/*global chrome*/
'use strict';

angular.module('dashboardChromeappApp')
    .service('Oauth2', function Oauth2($q) {
        var deferred = $q.defer();
        this.getToken = function () {
            try {
                chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
                    deferred.resolve(token);
                });
            } catch (e) {
                console.log("==== Not Chrome App ====");
            }
            return deferred.promise;
        }
    });
