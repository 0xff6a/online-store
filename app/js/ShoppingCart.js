ShoppingCart = function() {
  this.purchases = [];
  this.messages = {};
  this.discount = 0;
}

ShoppingCart.prototype.total = function() {
  return this.subtotals().sum();
};  

ShoppingCart.prototype.subtotals = function() {
  return this.purchases.map( function(purchase) {
    return purchase.total();
  });
};

ShoppingCart.prototype.addToCart = function(product) {
  if ( this.isAlreadyPurchased(product) ) {
    this.addToStock(product);
  } else {
    this.purchases.push(product);
  }
};

ShoppingCart.prototype.removeFromCart = function(product) {
  if( this.isAlreadyPurchased(product) ) {
    this.pullFromStock(product);
  } else {
    this.messages.errors = "Cannot delete a non-existent product";
  };
};

ShoppingCart.prototype.isAlreadyPurchased = function(product) {
  return (this.purchaseIds().indexOf(product.id) !== -1);
};

ShoppingCart.prototype.purchaseIds = function() {
  return this.purchases.map(function(purchase) {
    return purchase.id;
  });
};

ShoppingCart.prototype.purchaseIdOf = function(product) {
  return this.purchaseIds().indexOf(product.id);
};

ShoppingCart.prototype.addToStock = function(product) {
  var purchaseId = this.purchaseIdOf(product);

  this.purchases[purchaseId].stock += product.stock;
};

ShoppingCart.prototype.pullFromStock = function(product) {
  var purchaseId = this.purchaseIdOf(product);

  this.purchases[purchaseId].stock -= product.stock;
  
  if( this.purchases[purchaseId].stock === 0 ) {
    this.purchases.splice(purchaseId, 1);
  }
};