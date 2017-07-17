"use strict";

var app = angular.module("lolipop");

app.factory("Order", function ($http) {
  return {
    findAll: function (user, token) {
      var data = $.param({});

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-access-token": token
        }
      };

      return $http.get(app.info().api + "/orders?user=" + user._id, data, config);
    },
    findById: function (_id, token) {
      var data = $.param({});

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-access-token": token
        }
      };

      return $http.get(app.info().api + "/orders/" + _id, data, config);
    },
    save: function (order, token) {
      var data = $.param({
        user: order.user,
        inclusion: order.inclusion,
        finalization: order.finalization,
        status: order.status,
        satisfaction: order.satisfaction,
        items: order.items
      });

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-access-token": token
        }
      };

      if (user._id) {
        return $http.put(app.info().api + "/orders/" + order._id, data, config);
      } else {
        return $http.post(app.info().api + "/orders", data, config);
      }
    }
  };
});