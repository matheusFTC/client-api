"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/cart", {
        templateUrl: "views/cart.html",
        controller: "cartController"
    });
});