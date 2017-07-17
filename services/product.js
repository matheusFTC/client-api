"use strict";

var app = angular.module("lolipop");

app.factory("Product", function ($http) {
  return {
    findAll: function () {
      return $http.get(app.info().api + "/products");
    },
    findById: function (_id) {
      return $http.get(app.info().api + "/products/" + _id);
    }
  };
});