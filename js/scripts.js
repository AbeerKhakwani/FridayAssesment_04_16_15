var PizzaPrice = {
	        basicPizza:10,
	        addOn:0,
	        finalprice: function(){
            this.basicPizza= this.basicPizza+this.addOn;
	    }
};
$(document).ready(function(){
  $('form#ticketmaster').submit(function(event){
    event.preventDefault();

    var price = parseInt($("select#type").val());
    
    var pizza = Object.create(PizzaPrice);

    pizza.addOn =  price;
    pizza.finalprice();
    $(".finalPrice").text(pizza.basicPizza);


   
  });

});
