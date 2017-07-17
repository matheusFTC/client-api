"use strict";

var app = angular.module("lolipop");

app.config(function ($routeProvider) {

  $routeProvider.when("/products", {
    templateUrl: "views/product.html",
    controller: "productController"
  });
});