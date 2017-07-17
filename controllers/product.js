"use strict";

var app = angular.module("lolipop");

app.controller("productController", function ($scope, Product) {

    $scope.filter;
    $scope.products;

    $scope.findAll = function () {
        Product.findAll().then(function (response) {
            $scope.products = response.data;
        });
    };

    $scope.findAll();
});