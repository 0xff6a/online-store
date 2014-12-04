describe('Voucher', function() {
  var params = 
      { 
        "id": 1,
        "discount": 10,
        "conditions": ["total() > 50"],
        "description": "£10 off if you spend over £50"
      },
      productData =
      {
        "id": 0,
        "name": "Almond Toe Court Shoes, Patent Black",
        "category": "Women's Footwear",
        "price": 99.00,
        "stock": 5
      },
      voucher;

  beforeEach(function() {
    voucher = new Voucher(params);
    cart = new ShoppingCart();
    cart.purchases.push(new Product(productData));
  });

  it('should apply a discount to a shopping cart', function() {
    voucher.applyTo(cart);
    expect(cart.discount).toEqual(voucher.discount);
  });

  it('should know if the voucher is valid for a shopping cart', function() {
    expect(voucher.isValidFor(cart)).toBe(true);
  });

  it('should know if the voucher is not valid for a shopping cart', function() {
    cart.purchases.first().price = 1;

    expect(voucher.isValidFor(cart)).toBe(false);
  });

  it('should only apply the discount if the voucher is valid', function() {
    cart.purchases.first().price = 1;
    voucher.applyTo(cart);

    expect(cart.discount).toBe(0);
  });
});