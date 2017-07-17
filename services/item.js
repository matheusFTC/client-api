"use strict";

var app = angular.module("lolipop");

app.factory("Item", function ($http) {
  return {
    findAll: function () {
      return $http.get(app.info().api + "/items");
    },
    findById: function (_id) {
      return $http.get(app.info().api + "/items/" + _id);
    }
  };
});