(function() {
  
  var voucher = angular.module("voucher", []);

  voucher.controller("VoucherController", ["$scope", "$http", function($scope, $http) {
    $scope.vouchers = [];

    $http.get("data/vouchers.json").success(function(data) {
      $scope.vouchers = data;
    });
  }]);

  voucher.directive("voucherList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/voucher-list.html"
    };
  });

})();