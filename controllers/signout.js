"use strict";

var app = angular.module("lolipop");

app.controller("signoutController", function ($scope, $cookies, $location) {

    $scope.exit = function () {
        $cookies.put("token", null);
        $cookies.put("expires", null);

        $location.path("/signin");
    };
});