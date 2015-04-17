var PizzaPrice = {
	        basicPizza:10,
	        extraCheese: 0,
	        pepperoni: 0,
	        veggie:0,
	       finalprice: function(){
            this.basicPizza= this.basicPizza+this.extraCheese+this.pepperoni+this.veggie;
	    }
};

 var newPizzaPrice= Object.create(PizzaPrice);
 newPizzaPrice.extraCheese=$("input#cheese").val();
 newPizzaPrice.pepperoni=$("input#pepperoni").val();
 newPizzaPrice.veggie=$("input#veggie").val();