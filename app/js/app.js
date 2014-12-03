(function() {

  var app = angular.module("onlineStore", []);

  app.controller("ProductController", ["$scope", "$http", function($scope, $http) {
    $scope.products = [];

    $http.get("data/products.json").success(function(data) {
      $scope.products = data;
    });
  }]);

  app.controller("VoucherController", ["$scope", "$http", function($scope, $http) {
    $scope.vouchers = [];

    $http.get("data/vouchers.json").success(function(data) {
      $scope.vouchers = data;
    });
  }]);

  app.controller("ShoppingCartController", ["$scope", function($scope) {
    $scope.total = 0;
    $scope.purchases = [];

    $scope.addToCart = function(product) {
      if ( this.isAlreadyPurchased(product) ) {
        this.updateStock(product);
      } else {
        this.purchases.push(product);
      }
    };

    $scope.isAlreadyPurchased = function(product) {
      return (this.purchaseIds().indexOf(product.id) !== -1);
    };

    $scope.purchaseIds = function() {
      return ids = this.purchases.map(function(purchase) {
        return purchase.id;
      });
    };

    $scope.updateStock = function(product) {
      var productIndex = this.purchaseIds().indexOf(product.id);

      this.purchases[productIndex].stock += product.stock;
    };
  }]);

  app.directive("productList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/product-list.html"
    };
  });

  app.directive("voucherList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/voucher-list.html"
    };
  });

})();