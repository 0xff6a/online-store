describe('Product', function() {
  var product,
      single;

  beforeEach(function() {
    options = { id: 0, price: 12.00, stock: 2 };
    product = new Product(options);
  });

  describe('#total', function() {
    
    it('should create a single copy of the product, incrementing stock of original', function() {
      expect(product.total()).toBe(24);
    });
  });

  describe('#popSingle', function() {

    it('should create a single copy of the product, decrementing stock of original', function() {
      single = product.popSingle();

      expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
      expect(product.stock).toBe(1);
    });
  });
  
  describe('#pushSingle', function() {
    
    it('should create a single copy of the product, incrementing stock of original', function() {
      single = product.pushSingle();

      expect(single).toEqual({ id: 0, price: 12.00, stock: 1});
      expect(product.stock).toBe(3);
    });
  });
});
