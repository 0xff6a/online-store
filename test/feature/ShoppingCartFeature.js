describe('Shopping Cart Feature', function() {

  var purchaseList;

  beforeEach(function() {
    browser.get('app/index.html');
    purchaseList = element.all(by.repeater('purchase in purchases'));
  });

  describe('Adding a product', function() {

    it('should allow a user add a product to their shopping cart', function() {
      var name, 
          stock;

      element.all(by.repeater('product in products')).first().element(by.css('a')).click();
      name = element.all(by.repeater('purchase in purchases')
                    .column('purchase.name')).first().getText();
      stock = element.all(by.repeater('purchase in purchases')
                    .column('purchase.stock')).first().getText();

      expect(purchaseList.count()).toBe(1);
      expect(name).toEqual('Almond Toe Court Shoes, Patent Black');
      expect(stock).toEqual('1 x');
    });

    it('should allow the user to view the total price of products in the cart', function() {

    });
  });

  describe('Removing a product', function() {

    it('should allow a user remove a product from their shopping cart', function() {

    });
  });
});