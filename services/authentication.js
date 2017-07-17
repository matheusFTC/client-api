"use strict";

var app = angular.module("lolipop");

app.factory("Authentication", function ($http) {
  return {
    authenticate: function (email, password) {
      var data = $.param({
        email: email,
        password: password
      });

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };

      return $http.post(app.info().api + "/authentication", data, config);
    }
  };
});