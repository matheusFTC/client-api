"use strict";

var app = angular.module("lolipop");

app.controller("itemController", function ($scope, Item) {

    $scope.filter;
    $scope.items;

    $scope.findAll = function () {
        Item.findAll().then(function (response) {
            $scope.items = response.data;
        });
    };

    $scope.findAll();
});