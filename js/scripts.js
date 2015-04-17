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
	   var cheese = $("select#cheese").val();
	   var pepperoni= $("select#pepperoni").val();
	 
	  newPizzaPrice.extraCheese=cheese;
	  newPizzaPrice.pepperoni= pepperoni;

	 // newPizzaPrice.veggie=parseInt($("select#veggie").val());
     
      newPizzaPrice.finalprice();
      var endPrice= newPizzaPrice.basicPizza;
  

     $(".finalPrice").text(endPrice);


});
  });