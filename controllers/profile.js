"use strict";

var app = angular.module("lolipop");

app.controller("profileController", function ($scope, $cookies, User) {

    $scope.messenger.clear();

    $scope.clear = function () {
        $scope.user = angular.copy($scope.$storage.user);

        $scope.user.password = null;
        $scope.user.newPassword = null;
        $scope.user.newPasswordConfirm = null;
    };

    $scope.save = function () {
        if (!$scope.user.fullname || !$scope.user.email || !$scope.user.password || !$scope.user.phone || !$scope.user.gender) {
            $scope.messenger.error("Enter the fullname, email, password, phone and gender.");
        } else {
            if (!$scope.user.newPassword && $scope.user.newPasswordConfirm) {
                $scope.messenger.error("Enter the new password.");
            } else if ($scope.user.newPassword && !$scope.user.newPasswordConfirm) {
                $scope.messenger.error("Enter the new password confirm.");
            } else if ($scope.user.newPassword !== $scope.user.newPasswordConfirm) {
                $scope.messenger.error("The passwords you entered for change are not the same.");
            } else {
                var token = $cookies.get("token");

                User.save($scope.user, token)
                    .then(function (response) {
                        $scope.$storage.user = response.data;

                        $scope.clear();

                        $scope.messenger.success("User updated successfully.");
                    })
                    .catch(function (error) {
                        if (error.status === 401) {
                            $scope.messenger.error("Unauthorized.");
                        } else {
                            $scope.messenger.error("This action could not be taken.");
                        }
                    });
            }
        }
    };

    $scope.clear();
});