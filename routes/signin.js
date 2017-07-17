"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/signin", {
        templateUrl: "views/signin.html",
        controller: "signinController"
    });
});