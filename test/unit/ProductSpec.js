describe('Product', function() {

  beforeEach(function() {
    product = { id: 0, price: 12.00, stock: 2 };
  });

  describe('#popSingle', function() {

    it('should create a single copy of the product, decrementing stock of original', function() {
      var single = cart.popSingle(product);

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
