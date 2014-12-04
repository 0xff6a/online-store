function Voucher(params) {
  this.id = params.id;
  this.discount = params.discount;
  this.conditions = params.conditions;
  this.description = params.description;
};

Voucher.prototype.applyTo = function(shoppingCart) {
  shoppingCart.discount += this.discount;
};

Voucher.prototype.isValidFor = function(shoppingCart) {
  return this.conditions.every(function(condition) {
    return eval("shoppingCart." + condition);
  });
};
/*
  isValidFor(cart)
  applyTo(cart)
*/