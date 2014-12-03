describe('Shopping Cart Feature', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  describe('Adding a product', function() {

    it('should allow a user add a product to their shopping cart', function() {
       element.all(by.repeater('product in products')).first().element(by.css('a')).click();


    });

    it('should allow the user to view the total price of products in the cart', function() {

    });
  });

  describe('Removing a product', function() {

    it('should allow a user remove a product from their shopping cart', function() {

    });
  });
});