"use strict";

var app = angular.module("lolipop");

app.controller("signinController", function ($scope, $cookies, $location, Authentication) {

    $scope.messenger.clear();

    $scope.email = null;
    $scope.password = null;

    $scope.authenticate = function () {
        if (!$scope.email || !$scope.password) {
            $scope.messenger.error("Enter the email and password.");
        } else {
            Authentication.authenticate($scope.email, $scope.password)
                .then(function (response) {
                    $cookies.put("token", response.data.token);
                    $cookies.put("expires", response.data.expires);

                    $scope.$storage.user = response.data.user;

                    $location.path("/home");
                })
                .catch(function (error) {
                    if (error.status === 401) {
                        $scope.messenger.error("Email or password is invalid!");
                    } else {
                        $scope.messenger.error("We were unable to authenticate.");
                    }
                });
        }
    };
});