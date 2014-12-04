describe('StoreController', function() {
  var productData =   
      {
        "id": 0,
        "name": "Almond Toe Court Shoes, Patent Black",
        "category": "Women's Footwear",
        "price": 99.00,
        "stock": 5
      },
      voucherData = 
      { 
        "id": 0,
        "discount": 3,
        "conditions": [],
        "description": "£5 off for being a great customer"
      },
      scope, 
      ctrl, 
      $httpBackend;

  beforeEach( function() {
    module('onlineStore');
  });
  
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/products.json').
        respond([productData]);
    $httpBackend.expectGET('data/vouchers.json').
        respond([voucherData]);

    scope = $rootScope.$new();
    ctrl = $controller('StoreController', {$scope: scope});
  }));

  describe('initialisation', function() {

    it('should set the default value of products model', function() {
      expect(scope.products).toEqual([]);
    });

    it('should create product models from data retrieved from XHR', function() {
      $httpBackend.flush();

      expect(scope.products).toEqual([new Product(productData)]);
    });

    it('should set the default value of vouchers model', function() {
      expect(scope.vouchers).toEqual([]);
    });

    it('it should create product models from data retrieved from XHR', function() {
      $httpBackend.flush();

      expect(scope.vouchers).toEqual([new Voucher(voucherData)]);
    });
  });

  describe('#productById', function() {

    it('should return a product from the products array given its id', function() {
      scope.products = [{ id: 0, name: 'wrong'}, { id: 1, name: 'correct'}];

      expect(scope.productById(1).name).toEqual('correct');
    });
  });
});