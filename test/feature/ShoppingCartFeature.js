describe('Shopping Cart Feature', function() {

  var purchaseList = element.all(by.repeater('purchase in cart.purchases')),
      purchaseLink = element.all(by.repeater('product in products'))
                        .first().element(by.css('a')),
      stock,
      name;

  beforeEach(function() {
    browser.get('app/index.html');
    purchaseLink.click();
  });

  describe('adding and removing products', function() {

    it('should allow a user add a product to their shopping cart', function() {
      name = element.all(by.repeater('purchase in cart.purchases')
                    .column('purchase.name')).first().getText();
      stock = element.all(by.repeater('purchase in cart.purchases')
                    .column('purchase.stock')).first().getText();

      expect(purchaseList.count()).toBe(1);
      expect(name).toEqual('Almond Toe Court Shoes, Patent Black');
      expect(stock).toEqual('1 x');
    });

    it('should allow the user to view the total price of products in the cart', function() {
      var total;

      purchaseLink.click();
      purchaseLink.click();
      total = element(by.css('#cart-total')).getText();
      
      expect(total).toEqual('Total: £297.00');
    });

    it('should allow a user remove a product from their shopping cart', function() {
      element.all(by.repeater('purchase in cart.purchases'))
          .first().element(by.css('a')).click();
      total = element(by.css('#cart-total')).getText();
      
      expect(total).toEqual('Total: £0.00');
    });
  });

  describe('managing stock', function() {

    beforeEach(function() {
      for ( var i = 0; i < 5; i++) {
        purchaseLink.click();
      }
    });

    it('should not allow a user to add an out of stock product to their cart', function() {
      stock = element.all(by.repeater('purchase in cart.purchases')
                    .column('purchase.stock')).first().getText();

      expect(stock).toEqual('5 x');
    });

    it('should show a warning if the user tries to add an out of stock product', function() {
      message = element(by.css('.alert-danger')).getText();
      expect(message).toEqual('The selected product is out of stock');
    });
  });
});