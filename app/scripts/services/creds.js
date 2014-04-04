'use strict';

angular.module('dashboardChromeappApp')
  .service('Creds', function Creds() {
        this.api = 'http://adam8810-test.apigee.net/v1/';
        this.google_client_id = '60144512353-9u1hk1htgpgvh28bpmpbdj2lv19tdrm1.apps.googleusercontent.com';
        this.google_api_key = 'AIzaSyBUkzjgKi6NncenYg5ArlyGwV1wsTEFB1U';
        this.google_tasks_key = 'MDc1MTI1NjI1MTE5NzUzNTgyNjI6MTk0MTI2MTA5NTow';


        /* Add to manifest.json
         "http://adam8810-test.apigee.net/",

         "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAue08yxXZIQugP65Iir44vKvFXbXLq72H5gcnw/X4Qt/yHnkNI3o1XDFNZtwU79Fdt672mgO1vy3e5BSfSLF1RoSjXt7LJSs3KD7/mTj7P/xoOu0lOqBL2PGEX0oyWXGpI4/4yS8L0e6fmKbOLhPbPHQD3OSbedni4YtnQHym1iI4B+sXS9yvHPezYA6UoxGkIqWrioaMwQO5w6TtmBTdwqtEjC2YkxBvdCihoD2Y7u8je1mAkU95HOB42yhO2wwyahQeaamBk2nB4JcZOP0xnX80rNNCL6d/UulgAvAvDWzJFt03ArwqhA7veLvoQ7uFl4Cuqz6wgPKxH9dzp8nqSQIDAQAB",
         "oauth2": {
         "client_id": "60144512353-6j377avvl8jq09kp27d7kjb7fcj0jdmr.apps.googleusercontent.com",
         "scopes": [
         "https://www.googleapis.com/auth/tasks",
         "https://www.googleapis.com/auth/plus.me",
         "https://www.googleapis.com/auth/plus.login",
         "https://www.googleapis.com/auth/calendar"
         ]
         }

         */
  });
