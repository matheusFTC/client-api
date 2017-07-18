"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/signout", {
        templateUrl: "views/signout.html",
        controller: "signoutController"
    });
});