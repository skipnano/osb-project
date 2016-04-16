// Coded by Dean Gilroy
// For Old Stanley's Bar
// Version 1.0


$( document ).ready(function() {
    console.log( "All DOM elements loaded!" );

    $('.beer-btn').click(function (event) {
    	event.preventDefault();
    	console.log("You clicked this");

    	$('#mobileBeers').slideToggle(500);
    });
});
