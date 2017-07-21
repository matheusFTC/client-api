"use strict";

var app = angular.module("lolipop");

app.controller("addressesController", function ($scope) {

    $scope.messenger.clear();

    $scope.clear = function () {
        if (!$scope.$storage.user.addresses) $scope.$storage.user.addresses = [];
        
        $scope.address = {
            label: null,
            zipCode: null,
            place: null,
            number: null,
            complement: null,
            reference: null
        };
    };

    $scope.add = function () {
        if (!$scope.address.label || !$scope.address.zipCode || !$scope.address.place || !$scope.address.number) {
            $scope.messenger.error("Enter the label, zipCode, place and number.");
        } else {
            $scope.$storage.user.addresses.push(angular.copy($scope.address));

            $scope.clear();

            $scope.messenger.success("Address added successfully.");
        }
    };

    $scope.remove = function (index) {
        $scope.$storage.user.addresses.splice(index);
    };

    $scope.clear();
});