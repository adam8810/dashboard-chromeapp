/*global chrome */
'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
    var width = 500;
    var height = 300;

    chrome.app.window.create('index.html', {
        id: 'main'
//        state: 'fullscreen'
//        bounds: {
//            width: width,
//            height: height,
//            left: 1,
//            top: Math.round((screen.availHeight - height)/2)
//        }
    }, function(app) {
        app.fullscreen();

        chrome.alarms.create('update-check',{periodInMinutes:60});

        chrome.alarms.onAlarm.addListener(function() {
            chrome.runtime.requestUpdateCheck(function(status) {
                if (status == 'update_available') {
                    chrome.runtime.reload();
                }
            });
        });

        chrome.power.requestKeepAwake("display");
    });
});
