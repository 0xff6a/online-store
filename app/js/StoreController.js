(function() {

  var app = angular.module("onlineStore", []);

  app.controller("StoreController", ["$scope", "$http", function($scope, $http) {
    $scope.vouchers = [];
    $scope.products = [];
    $scope.cart = new ShoppingCart();

    $http.get("data/products.json").success(function(data) {
      $scope.products = $scope.factory(Product, data);
    });

    $http.get("data/vouchers.json").success(function(data) {
      $scope.vouchers = $scope.factory(Voucher, data);
    });

    $scope.returnSinglePurchase = function(purchase) {
      this.cart.removeFromCart(this.productById(purchase.id).pushSingle());
    };

    $scope.productById = function(id) {
      return $scope.products.filter( function(product) {
        return product.id === id;
      }).first();
    };

    $scope.factory = function(obj, paramsArray) {
      return paramsArray.map(function(params) {
        return new obj(params);
      });
    };
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