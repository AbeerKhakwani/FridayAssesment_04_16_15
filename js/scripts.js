var PizzaPrice = {
	        basicPizza:10,
	        extraCheese: 0,
	        pepperoni: 0,
	        veggie:0,
	       finalprice: function(){
            this.basicPizza= this.basicPizza+this.extraCheese+this.pepperoni+this.veggie;
	    }
};
$(document).ready(function(){
  $("form#pizzaform").submit(function(event){
    event.preventDefault();

	 var newPizzaPrice= Object.create(PizzaPrice);
	 newPizzaPrice.extraCheese=parseInt($("select#cheese").val());
	 newPizzaPrice.pepperoni=parseInt($("select#pepperoni").val());
	 newPizzaPrice.veggie=parseInt($("select#veggie").val());
     console.log(newPizzaPrice.extraCheese);
     newPizzaPrice.finalprice();

     $(".finalPrice").text(newPizzaPrice.basicPizza);


});
  });