describe('ShoppingCartController', function() {
  var scope, 
      ctrl;

  beforeEach(module('onlineStore'));
  
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('ShoppingCartController', {$scope: scope});
  }));

  it('should set the default total of shopping cart model to 0', function() {
    expect(scope.total()).toBe(0);
  });

  it('should have no products initially', function() {
    expect(scope.purchases).toEqual([]);
  });

  it('products can be added', function() {
    var product = {name: 'shoes', price: 50 }

    scope.addToCart(product);

    expect(scope.purchases).toEqual([product]);
  });

  it('if a product has been added already only the quantity is updated', function() {
    var first =     { id: 0, stock: 5 };
    var second =    { id: 0, stock: 2 };
    var combined =  { id: 0, stock: 7 };

    scope.addToCart(first);
    scope.addToCart(second);

    expect(scope.purchases).toEqual([combined]);
  });

  it('should know the total price of products in the cart', function() {
    var cheap =  { id: 0, price: 12.00, stock: 1 };
    var pricey = { id: 1, price: 125.00, stock: 1 };

    scope.addToCart(cheap);
    scope.addToCart(cheap);
    scope.addToCart(pricey);

    expect(scope.total()).toBe(149);
  });
});