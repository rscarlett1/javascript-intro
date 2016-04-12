//Find the form

var registrationForm = document.querySelector("#registration");

//WAIT FOR USER TO SUBMIT THE FORM

registrationForm.onsubmit = function(event) {
//Stop the form from submitting
event.preventDefault();
	
}