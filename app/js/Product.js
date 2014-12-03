function Product(data) {
  this.id = data.id;
  this.name = data.name;
  this.category = data.category;
  this.price = data.price;
  this.stock = data.stock;
};

Product.prototype.total = function() {
  return (this.price * this.stock);
};

Product.prototype.popSingle = function() {
  var single = JSON.parse(JSON.stringify(this));;

  this.stock -= 1;
  single.stock = 1;

  return single;
};

Product.prototype.pushSingle = function() {
  var single = JSON.parse(JSON.stringify(this));;

  this.stock += 1;
  single.stock = 1;

  return single;
};