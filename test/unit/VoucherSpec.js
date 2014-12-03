describe('VoucherController', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('onlineStore'));
  
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/vouchers.json').
        respond([{name: 'voucher1'}, {name: 'voucher2'}]);

    scope = $rootScope.$new();
    ctrl = $controller('VoucherController', {$scope: scope});
  }));

  it('should set the default value of vouchers model', function() {
    expect(scope.vouchers).toEqual([]);
  });

  it('it should create product models from data retrieved from XHR', function() {
    $httpBackend.flush();

    expect(scope.vouchers).toEqual([{name: 'voucher1'}, {name: 'voucher2'}]);
  });
});