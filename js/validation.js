//Find the form

var registrationForm = document.querySelector("#registration");

//WAIT FOR USER TO SUBMIT THE FORM

registrationForm.onsubmit = function(event) {

	//Patterns to use in validation
	

	// Count how many errors there are
	var totalErrors = 0;

	//Get references to the input fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message")

	var nameInput = document.querySelector("#fullname")
	var nameMessage = document.querySelector("#full-name-message")
	var campusMessage =document.querySelector("#campus-message")
	var campusOptions = document.querySelectorAll("[name=campus]")

	console.log("campusOptions");

	// Check the username

	if( usernamePattern.test(usernameInput.value)){
		// Username is valid
		console.log("Username is valid");
		usernameMessage.innerHTML = "";
		// clear invalid username
	} else{
		//Username is invalid
		console.log("Username is invalid");
		usernameMessage.innerHTML = "Username is Invalid";
		totalErrors++;
	}

	// Check the name

	if( namePattern.test(nameInput.value)){
		// Name is valid
		
		nameMessage.innerHTML = "";
		// clear invalid username
	} else{
		
		nameMessage.innerHTML = "Name is Invalid";
	}

	// Loop over all the campus options

	var campusIsSelected = false;
	for(var i=0; i<campusOptions.length; i++){

		//Chec if this Campus has been selected

		if( campusOptions [i].checked ){
			campusIsSelected = true;



		}
	}

	// if campusIsSelected is still false

	if( campusIsSelected == false) {
		campusMessage.innerHTML = "Please select a campus";
		totalErrors++;

	} else{

		campusMessage.innerHTML = "";
	}

	//If the total errors is greater than 0
	if( totalErrors > 0) {
	//Stop the form from submitting
	event.preventDefault();
		
	}

}


