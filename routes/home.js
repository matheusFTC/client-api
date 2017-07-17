"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "views/home.html",
        controller: "homeController"
    });
});