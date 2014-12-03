(function() {

  var cart = angular.module("cart", []);

  cart.controller("ShoppingCartController", ["$scope", function($scope) {
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

})();