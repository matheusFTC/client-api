"use strict";

var app = angular.module("lolipop");

app.factory("User", function ($http) {
    return {
        findById: function (_id, token) {
            var data = $.param({});

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": token
                }
            };

            return $http.get(app.info().api + "/users/" + _id, data, config);
        },
        save: function (user, token) {
            var data = $.param({
                email: user.email,
                password: user.password,
                newPassword: user.newPassword,
                newPasswordConfirm: user.newPasswordConfirm,
                fullname: user.fullname,
                nif: user.nif,
                phone: user.phone,
                gender: user.gender,
                birth: user.birth,
                addresses: user.addresses
            });

            var config = {
                headers: null
            };

            if (user._id) {
                config.headers = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-access-token": token
                };

                return $http.put(app.info().api + "/users/" + user._id, data, config);
            } else {
                config.headers = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

                return $http.post(app.info().api + "/users", data, config);
            }
        }
    };
});