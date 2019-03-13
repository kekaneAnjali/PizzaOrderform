$(document).ready (init);

function init()
{
	// Get all anchors that are the clickable tabs
	var tabAnchors = $(".navTab");
	
	// Tell all tabs to run doTabClick when they are clicked
	tabAnchors.click(doTabClick);
	
	// Programmatically perform a "click" on the first tab
	tabAnchors.first().click();	

	// When we click the button on tab three
   // $("#orderPizzaButton").click(orderPizza);
    
    // When we submit the form on tab two
	$("#tabTwoForm").submit(goToTabThree);
}

function goToTabThree()
{
	//gather customer info
var inputName ,inputAddress,inputPhone,inputPizzaSize,inputPizzaCrust,numVegToppings,numMeats,pizzaCost,deliveryCost,tax,totalCost;
	inputName=$("#name").val();
	
	inputAddress=$("#address").val();
	inputPhone=$("#phone").val();
	numVegToppings=$("input[name=veg]:checked").length;
	numMeats=$("input[name=meat]:checked").length;
	inputPizzaSize=$("input[name=pizzaSize]:checked").val();
	inputPizzaCrust=$("input[name=pizzaCrust]:checked").val();
	var selectedMeats=[];
	var selectedVegetables = [];
	$("input[name=veg]:checked").each(function() {
		selectedVegetables.push(this.value);
	});
	$("input[name=meat]:checked").each(function() {
		selectedMeats.push(this.value);
	});

	if (inputPizzaSize === "small") {
		pizzaCost = 7;
	} else if (inputPizzaSize === "medium") {
		pizzaCost = 9;
	} 
	else {
		pizzaCost = 12;
	};

	pizzaCost=parseFloat(pizzaCost);
	pizzaCost=pizzaCost+(parseFloat(numVegToppings)*1)+(parseFloat(numMeats)*1.5);
	deliveryCost=2;
	deliveryCost=parseFloat(deliveryCost);
	tax=0.051*(pizzaCost+deliveryCost);
	tax=parseFloat(tax);
	totalCost=pizzaCost+deliveryCost+tax;
	totalCost=parseFloat(totalCost);
	$("#output").html("Customer information: name=" + inputName + " Address=" +inputAddress +" Phone=" +inputPhone);
	$("#output1").html("Pizza information:Number of Vegetables= " + numVegToppings + " name of vegetables: " + selectedVegetables.join(", ")+" num of Meats:" +numMeats + " name of meat:" +  selectedMeats.join(", ")+" Pizza Size:" + inputPizzaSize+" Pizza Crust:"+ inputPizzaCrust);
	$("#output2").html("Pizza Cost="+pizzaCost.toFixed(2) + " Delivery Cost = "+deliveryCost.toFixed(2)+ " tax ="+tax.toFixed(2));
    $("#output3").html("Total Cost = "+totalCost.toFixed(2));
    // Find the 3rd tab (counting 0, 1, 2) and click it
    $(".navTab").eq(2).click();
    
    // This is a form, so don't want it to submit
    return false;
}
	

function doTabClick()
{
	// Get all of the divs that contain the tabs' contents
	var tabContainers = $(".divTab");
	
	// Hide them all
	tabContainers.hide();
	
	// The hash is the part after the # in the href attribute
	tabContainers.filter(this.hash).show();
	console.log(this.hash);
	
	// Get all anchors that are the clickable tabs
	var tabAnchors = $(".navTab");
	
	// Remove the "selected" class from all tabs
	tabAnchors.removeClass("selected");
	
	// Add the "selected" class to just the tab that was clicked on
	$(this).addClass("selected");
	
	// Don't try to follow the link (because we're using <a> tags)
	return false;
}