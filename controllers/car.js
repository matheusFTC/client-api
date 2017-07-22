"use strict";

var app = angular.module("lolipop");

app.controller("carController", function ($scope, Product) {

    $scope.products;
    $scope.qtd;
    $scope.qtd = 1;

    Product.findAll().then(function (response) {
        $scope.products = response.data;
    });
});