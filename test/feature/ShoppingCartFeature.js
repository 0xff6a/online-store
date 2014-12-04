describe('Shopping Cart Feature', function() {

  var purchaseList;

  beforeEach(function() {
    browser.get('app/index.html');
    element.all(by.repeater('product in products')).first().element(by.css('a')).click();
    purchaseList = element.all(by.repeater('purchase in cart.purchases'));
  });

  it('should allow a user add a product to their shopping cart', function() {
    var name, 
        stock;

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

    element.all(by.repeater('product in products')).first().element(by.css('a')).click();
    element.all(by.repeater('product in products')).first().element(by.css('a')).click();
    total = element(by.css('#cart-total')).getText();
    
    expect(total).toEqual('Total: £297.00');
  });

  it('should allow a user remove a product from their shopping cart', function() {
    element.all(by.repeater('purchase in cart.purchases')).first().element(by.css('a')).click();
    total = element(by.css('#cart-total')).getText();
    
    expect(total).toEqual('Total: £0.00');
  });

  it('should not allow a user to add an out of stock product to their cart', function() {
    expect(true).toBe(false);
  });
});