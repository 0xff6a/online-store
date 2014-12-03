(function() {

  var cart = angular.module("cart", []);

  cart.controller("ShoppingCartController", ["$scope", function($scope) {
    $scope.purchases = [];

    $scope.total = function() {
      return this.subtotals().sum();
    };  

    $scope.subtotals = function() {
      return this.purchases.map( function(purchase) {
        return (purchase.price * purchase.stock);
      });
    };

    $scope.addToCart = function(product) {
      if ( this.isAlreadyPurchased(product) ) {
        this.updateStock(product);
      } else {
        this.purchases.push(product);
      }
    };

    $scope.popSingle = function(product) {
      var single = JSON.parse(JSON.stringify(product));

      single.stock = 1;

      return single;
    };

    $scope.isAlreadyPurchased = function(product) {
      return (this.purchaseIds().indexOf(product.id) !== -1);
    };

    $scope.purchaseIds = function() {
      return this.purchases.map(function(purchase) {
        return purchase.id;
      });
    };

    $scope.updateStock = function(product) {
      var productIndex = this.purchaseIds().indexOf(product.id);

      this.purchases[productIndex].stock += product.stock;
    };
  }]);

  cart.directive("cartWidget", function() {
    return {
      restrict: "E",
      templateUrl: "partials/cart-widget.html"
    };
  });
  
})();