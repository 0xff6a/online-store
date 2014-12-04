function Product(params) {
  this.id = params.id;
  this.name = params.name;
  this.category = params.category;
  this.price = params.price;
  this.stock = params.stock;
};

Product.prototype.total = function() {
  return (this.price * this.stock);
};

Product.prototype.popSingle = function() {
  return this.moveSingle(-1);
};

Product.prototype.pushSingle = function() {
  return this.moveSingle(1);
};

Product.prototype.moveSingle = function(sign) {
  var single = new Product(JSON.parse(JSON.stringify(this)));

  this.stock += sign * 1;
  single.stock = 1;

  return single;
};