describe("PizzaPrice", function() {
  describe("Basic", function() {
    it("adds the amount to the finalPrice and returns 10 for basicpizza", function() {
      var testPizzaPrice = Object.create(PizzaPrice);
      expect(testPizzaPrice.basicPizza).to.equal(10);
    });
  });

  describe("pepperoni", function() {
    it("subtracts the amount from the finalPrice and returns 15 for pepperoni", function() {
      var testPizzaPrice = Object.create(PizzaPrice);
      testPizzaPrice.addOn=5;
        testPizzaPrice.finalprice();
      expect(testPizzaPrice.basicPizza).to.equal(15);
    });
  });
   describe("cheese", function() {
    it("subtracts the amount from the finalPrice and returns 13 for cheese", function() {
      var testPizzaPrice = Object.create(PizzaPrice);
       testPizzaPrice.addOn=3;
        testPizzaPrice.finalprice();
      expect(testPizzaPrice.basicPizza).to.equal(13);
    });
  });
    describe("veggie", function() {
    it("subtracts the amount from the finalPrice and returns 15 for veggie", function() {
      var testPizzaPrice = Object.create(PizzaPrice);
       testPizzaPrice.addOn=5;
        testPizzaPrice.finalprice();
      expect(testPizzaPrice.basicPizza).to.equal(15);
    });
  });
});