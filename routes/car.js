"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/car", {
        templateUrl: "views/car.html",
        controller: "carController"
    });
});