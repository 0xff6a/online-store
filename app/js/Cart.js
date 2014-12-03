(function() {

  var cart = angular.module("cart", []);

  cart.controller("ShoppingCartController", ["$scope", function($scope) {
    $scope.purchases = [];
    $scope.messages = {};

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
        this.addToStock(product);
      } else {
        this.purchases.push(product);
      }
    };

    $scope.removeFromCart = function(product) {
      if( this.isAlreadyPurchased(product) ) {
        this.pullFromStock(product);
      } else {
        this.messages.errors = "Cannot delete a non-existent product";
      };
    };

    $scope.popSingle = function(product) {
      var single = JSON.parse(JSON.stringify(product));;

      product.stock -= 1;
      single.stock = 1;

      return single;
    };

    $scope.pushSingle = function(product) {
      var single = JSON.parse(JSON.stringify(product));;

      product.stock += 1;
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

    $scope.purchaseIdOf = function(product) {
      return this.purchaseIds().indexOf(product.id);
    };

    $scope.addToStock = function(product) {
      var purchaseId = this.purchaseIdOf(product);

      this.purchases[purchaseId].stock += product.stock;
    };

    $scope.pullFromStock = function(product) {
      var purchaseId = this.purchaseIdOf(product);

      this.purchases[purchaseId].stock -= product.stock;
      
      if( this.purchases[purchaseId].stock === 0 ) {
        this.purchases.splice(purchaseId, 1);
      }
    };
  }]);

  cart.directive("cartWidget", function() {
    return {
      restrict: "E",
      templateUrl: "partials/cart-widget.html"
    };
  });

})();