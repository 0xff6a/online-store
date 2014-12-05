function Voucher(params) {
  this.id = params.id;
  this.discount = params.discount;
  this.conditions = params.conditions;
  this.description = params.description;
  this.isExpired = false;
};

Voucher.prototype.applyTo = function(shoppingCart) {
  var isValid =  this.isValidFor(shoppingCart);

  if ( isValid ) {
    shoppingCart.discount += this.discount;
    this.isExpired = true;
  }

  return isValid;
};

Voucher.prototype.isValidFor = function(shoppingCart) {
  return this.conditions.every(function(condition) {
    return eval("shoppingCart." + condition);
  });
};
