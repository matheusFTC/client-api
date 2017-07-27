"use strict";

var app = angular.module("lolipop");

app.controller("cartController", function ($scope, Product) {

    $scope.change = function (item) {
        if (!item.amount || item.amount < 1) item.amount = 1;
    };

    $scope.remove = function (index) {
        $scope.$session.cart.splice(index);
    };
});