"use strict";

var app = angular.module("lolipop");

app.controller("homeController", function ($scope, Product) {

    $scope.products;

    Product.findAll().then(function (response) {
        $scope.products = response.data;
    });
});