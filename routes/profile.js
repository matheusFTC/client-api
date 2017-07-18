"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/profile", {
        templateUrl: "views/profile.html",
        controller: "profileController"
    });
});