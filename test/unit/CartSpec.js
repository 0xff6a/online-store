describe('ShoppingCart', function() {
  var initial =   { id: 0, stock: 5 },
      second =    { id: 0, stock: 2 },
      combined =  { id: 0, stock: 7 },
      cart;

  beforeEach(function() {
    cart = new ShoppingCart();
    product = { id: 0, price: 12.00, stock: 2 };
  });
  

  describe('Shopping cart functionality', function() {

    it('should set the default total of shopping cart model to 0', function() {
      expect(cart.total()).toBe(0);
    });

    it('should have no products initially', function() {
      expect(cart.purchases).toEqual([]);
    });

    it('products can be added', function() {
      cart.addToCart(product);

      expect(cart.purchases).toEqual([product]);
    });

    it('if a product has been added already only the quantity is updated', function() {
      cart.addToCart(initial);
      cart.addToCart(second);

      expect(cart.purchases).toEqual([combined]);
    });

    it('should know the total price of products in the cart', function() {
      var cheap =  { id: 0, price: 12.00, stock: 2 };
      var pricey = { id: 1, price: 125.00, stock: 1 };

      cart.addToCart(cheap);
      cart.addToCart(pricey);

      expect(cart.total()).toBe(149);
    });

    it('products can be removed', function() {
      cart.addToCart(product);
      cart.removeFromCart(product);

      expect(cart.purchases).toEqual([]);
    });

    it('should leave any excess stock in the cart', function() {
      cart.addToCart(combined);
      cart.removeFromCart(second);

      expect(cart.purchases).toEqual([{ id: 0, stock: 5 }]);
    }); 

    it('should create a message if trying to delete a non-existent product', function() {
      cart.removeFromCart(product);

      expect(cart.messages.errors).toEqual('Cannot delete a non-existent product');
    });
  });

  // describe('#popSingle', function() {

  //   it('should create a single copy of the product, decrementing stock of original', function() {
  //     var single = cart.popSingle(product);

  //     expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
  //     expect(product.stock).toBe(1);
  //   });
  // });
  
  // describe('#pushSingle', function() {
    
  //   it('should create a single copy of the product, incrementing stock of original', function() {
  //     var single = scope.pushSingle(product);

  //     expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
  //     expect(product.stock).toBe(3);
  //   });
  // });

}); 