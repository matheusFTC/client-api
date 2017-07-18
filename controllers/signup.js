"use strict";

var app = angular.module("lolipop");

app.controller("signupController", function ($scope, $location, User) {

    $scope.messenger.clear();

    $scope.user = null;

    $scope.clear = function () {
        $scope.user = {
            fullname: null,
            email: null,
            password: null,
            passwordConfirm: null,
            phone: null,
            gender: "M"
        };
    };

    $scope.create = function () {
        if (!$scope.user.fullname || !$scope.user.email || !$scope.user.password || !$scope.user.passwordConfirm || !$scope.user.phone || !$scope.user.gender) {
            $scope.messenger.error("Enter the fullname, email, password, password confirm, phone and gender.");
        } else if ($scope.user.password !== $scope.user.passwordConfirm) {
            $scope.messenger.error("The entered passwords are not the same.");
        } else {
            User.save($scope.user)
                .then(function (response) {
                    $scope.clear();

                    $scope.messenger.success("User created successfully.");
                })
                .catch(function (error) {
                    $scope.messenger.error("This action could not be taken.");
                });
        }
    };

    $scope.clear();
});