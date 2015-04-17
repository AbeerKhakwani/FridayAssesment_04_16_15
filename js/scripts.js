var PizzaPrice = {
	        basicPizza:10,
	        finalprice: function(addOn){
            this.basicPizza= this.basicPizza+ addOn;
	    }
};
$(document).ready(function(){
  $('form#pizzaForm').submit(function(event){

       event.preventDefault();
  
    var price = parseInt($("select#type").val());
    console.log(price);
    var pizza = Object.create(PizzaPrice);
     pizza.finalprice(price);
    $(".finalPrice").text(pizza.basicPizza.toFixed(2));


   
  });

});
