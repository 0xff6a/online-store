describe('Online Store Display', function() {

  var productList;

  beforeEach(function() {
    browser.get('app/index.html');
    productList = element.all(by.repeater('product in products'));
    voucherList = element.all(by.repeater('voucher in vouchers'));
  });

  describe('Products', function() {

    it('should display a list of all products and associated information', function() {
      var name = element.all(by.repeater('product in products').column('product.name')).first().getText();
      var category = element.all(by.repeater('product in products').column('product.category')).first().getText();
      var price = element.all(by.repeater('product in products').column('product.price')).first().getText();
      var stock = element.all(by.repeater('product in products').column('product.stock')).first().getText();
    
      expect(productList.count()).toBe(13);
      expect(name).toEqual('Almond Toe Court Shoes, Patent Black');
      expect(category).toEqual("Women's Footwear");
      expect(price).toEqual('£99.00');
      expect(stock).toEqual('5');
    });

    it('should filter the displayed products based on user input', function() {
      var query = element(by.model('query'));

      query.sendKeys('Shoe');
      expect(productList.count()).toBe(2);

      query.clear();
      expect(productList.count()).toBe(13);
    });
  });

  describe('Vouchers', function() {

    it('should display a list of available vouchers', function() {
      expect(voucherList.count()).toBe(3);
    });
  });
});