"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

    $routeProvider.when("/items", {
        templateUrl: "views/item.html",
        controller: "itemController"
    });
});