"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/profile/addresses", {
        templateUrl: "views/addresses.html",
        controller: "addressesController"
    });
});