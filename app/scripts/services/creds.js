'use strict';

angular.module('dashboardChromeappApp')
  .service('Creds', function Creds() {
        this.api = 'http://adam8810-test.apigee.net/v1/';
        this.google_client_id = '60144512353-9u1hk1htgpgvh28bpmpbdj2lv19tdrm1.apps.googleusercontent.com';
        this.google_api_key = 'AIzaSyBUkzjgKi6NncenYg5ArlyGwV1wsTEFB1U';
        this.google_tasks_key = 'MDc1MTI1NjI1MTE5NzUzNTgyNjI6MTk0MTI2MTA5NTow';

        // Weather Underground Key
        this.wunderground_key = '127fc9533986c5b6';
  });
