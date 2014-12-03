describe('Online Store Display', function() {

  describe('Products', function() {

    var productList;

    beforeEach(function() {
      browser.get('app/index.html');
      productList = element.all(by.repeater('product in products'));
    });

    it('should display a list of all products', function() {
      expect(productList.count()).toBe(13);
    });

    it('should filter the displayed products based on user input', function() {
      var query = element(by.model('query'));

      query.sendKeys('Shoe');
      expect(productList.count()).toBe(2);

      query.clear();
      expect(productList.count()).toBe(13);
    });


    // it('should filter the phone list as a user types into the search box', function() {

    //   var phoneList = element.all(by.repeater('phone in phones'));
    //   var query = element(by.model('query'));

    //   expect(phoneList.count()).toBe(20);

    //   query.sendKeys('nexus');
    //   expect(phoneList.count()).toBe(1);

    //   query.clear();
    //   query.sendKeys('motorola');
    //   expect(phoneList.count()).toBe(8);
    // });


    // it('should be possible to control phone order via the drop down select box', function() {

    //   var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
    //   var query = element(by.model('query'));

    //   function getNames() {
    //     return phoneNameColumn.map(function(elm) {
    //       return elm.getText();
    //     });
    //   }

    //   query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

    //   expect(getNames()).toEqual([
    //     "Motorola XOOM\u2122 with Wi-Fi",
    //     "MOTOROLA XOOM\u2122"
    //   ]);

    //   element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

    //   expect(getNames()).toEqual([
    //     "MOTOROLA XOOM\u2122",
    //     "Motorola XOOM\u2122 with Wi-Fi"
    //   ]);
    // });
  });
});