"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/signin", {
        templateUrl: "views/signin.html",
        controller: "signinController",
        resolve: {
            clear: function ($cookies, $localStorage) {
                $cookies.put("token", undefined);
                $cookies.put("expires", undefined);

                $localStorage.$reset();
            }
        }
    });
});