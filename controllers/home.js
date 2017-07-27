"use strict";

var app = angular.module("lolipop");

app.controller("homeController", function ($scope, Product) {

    $scope.products;

    Product.findAll().then(function (response) {
        $scope.products = response.data;
    });

    if (!$scope.$session.cart) $scope.$session.cart = [];

    $scope.addToCart = function (product) {
        var item = {
            product: angular.copy(product),
            amount: 1
        };

        var index = $scope.$session.cart.findIndex(function (item) {
            return item.product._id === product._id;
        });

        if (index === -1) {
            $scope.$session.cart.push(item);
        } else {
            $scope.$session.cart[index].amount++;
        }
    };

});