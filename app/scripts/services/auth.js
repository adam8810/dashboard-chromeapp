'use strict';

angular.module('dashboardChromeappApp')
    .service('Auth', function Auth() {

        try {
            chrome.identity.getAuthToken({interactive: true}, function (token) {
                console.log(token);
            });
        } catch(e) {
            console.log("==== Not Chrome App ====");
        }
    });
