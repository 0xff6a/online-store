describe('StoreController', function() {
  var scope, 
      ctrl, 
      $httpBackend;

  beforeEach( function() {
    module('onlineStore');
  });
  
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/products.json').
        respond([{name: 'Shirt'}, {name: 'Shoes'}]);
    $httpBackend.expectGET('data/vouchers.json').
        respond([{name: 'voucher1'}, {name: 'voucher2'}]);

    scope = $rootScope.$new();
    ctrl = $controller('StoreController', {$scope: scope});
  }));

  describe('initialisation', function() {

    it('should set the default value of products model', function() {
      expect(scope.products).toEqual([]);
    });

    it('should create product models from data retrieved from XHR', function() {
      $httpBackend.flush();

      expect(scope.products).toEqual([{name: 'Shirt'}, {name: 'Shoes'}]);
    });

    it('should set the default value of vouchers model', function() {
      expect(scope.vouchers).toEqual([]);
    });

    it('it should create product models from data retrieved from XHR', function() {
      $httpBackend.flush();

      expect(scope.vouchers).toEqual([{name: 'voucher1'}, {name: 'voucher2'}]);
    });
  });
});