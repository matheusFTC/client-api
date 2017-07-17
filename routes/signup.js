"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/signup", {
        templateUrl: "views/signup.html",
        controller: "signupController"
    });
});