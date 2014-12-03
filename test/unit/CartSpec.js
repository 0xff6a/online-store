describe('ShoppingCartController', function() {
  var initial =   { id: 0, stock: 5 },
      second =    { id: 0, stock: 2 },
      combined =  { id: 0, stock: 7 },
      scope, 
      ctrl;

  beforeEach(function() {
    module('onlineStore');
    product = { id: 0, price: 12.00, stock: 2 };
  });
  
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('ShoppingCartController', {$scope: scope});
  }));

  describe('Shopping cart functionality', function() {

    it('should set the default total of shopping cart model to 0', function() {
      expect(scope.total()).toBe(0);
    });

    it('should have no products initially', function() {
      expect(scope.purchases).toEqual([]);
    });

    it('products can be added', function() {
      scope.addToCart(product);

      expect(scope.purchases).toEqual([product]);
    });

    it('if a product has been added already only the quantity is updated', function() {
      scope.addToCart(initial);
      scope.addToCart(second);

      expect(scope.purchases).toEqual([combined]);
    });

    it('should know the total price of products in the cart', function() {
      var cheap =  { id: 0, price: 12.00, stock: 2 };
      var pricey = { id: 1, price: 125.00, stock: 1 };

      scope.addToCart(cheap);
      scope.addToCart(pricey);

      expect(scope.total()).toBe(149);
    });

    it('products can be removed', function() {
      scope.addToCart(product);
      scope.removeFromCart(product);

      expect(scope.purchases).toEqual([]);
    });

    it('should leave any excess stock in the cart', function() {
      scope.addToCart(combined);
      scope.removeFromCart(second);

      expect(scope.purchases).toEqual([{ id: 0, stock: 5 }]);
    }); 

    it('should create a message if trying to delete a non-existent product', function() {
      scope.removeFromCart(product);

      expect(scope.messages.errors).toEqual('Cannot delete a non-existent product');
    });
  });

  describe('#popSingle', function() {

    it('should create a single copy of the product, decrementing stock of original', function() {
      var single = scope.popSingle(product);

      expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
      expect(product.stock).toBe(1);
    });
  });
  
  describe('#pushSingle', function() {
    
    it('should create a single copy of the product, incrementing stock of original', function() {
      var single = scope.pushSingle(product);

      expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
      expect(product.stock).toBe(3);
    });
  });

}); 