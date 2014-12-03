(function() {

  var app = angular.module("onlineStore", []);

  app.controller("StoreController", ["$scope", "$http", function($scope, $http) {
    $scope.vouchers = [];
    $scope.products = [];

    $http.get("data/products.json").success(function(data) {
      $scope.products = data;
    });

    $http.get("data/vouchers.json").success(function(data) {
      $scope.vouchers = data;
    });
  }]);

  app.directive("voucherList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/voucher-list.html"
    };
  });

  app.directive("productList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/product-list.html"
    };
  });


  app.directive("cartWidget", function() {
    return {
      restrict: "E",
      templateUrl: "partials/cart-widget.html"
    };
  });

})();