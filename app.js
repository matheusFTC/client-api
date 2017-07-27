"use strict";

var app = angular.module("lolipop", ["ngRoute", "ngCookies", "ngStorage"]).info(
  {
    version: "1.0.0",
    api: "https://restful-api-dwa.herokuapp.com"
  }
);

app.config(function ($routeProvider) {

  $routeProvider.otherwise({
    redirectTo: "/signin"
  });

});

app.run(function ($rootScope, $localStorage, $sessionStorage) {

  $rootScope.messenger = {
    text: null,
    isSuccess: false,
    isError: false,
    success: function (text) {
      this.clear();

      this.text = text;
      this.isSuccess = true;
    },
    error: function (text) {
      this.clear();

      this.text = text;
      this.isError = true;
    },
    close: function () {
      this.clear();
    },
    clear: function () {
      this.text = null;
      this.isSuccess = false;
      this.isError = false;
    }
  };

  $rootScope.$storage = $localStorage;
  $rootScope.$session = $sessionStorage;
});