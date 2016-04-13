//Find the form

var registrationForm = document.querySelector("#registration");
var namePattern = RegExp("^[A-Za-z' .-]{1,30}$");

//WAIT FOR USER TO SUBMIT THE FORM

registrationForm.onsubmit = function(event) {

//Patterns to use in validation
var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");

//Get references to the input fields
var usernameInput = document.querySelector("#username");
var usernameMessage = document.querySelector("#username-message")

var nameInput = document.querySelector("#fullname")
var nameMessage = document.querySelector("#full-name-message")

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
}

// Check the name

if( namePattern.test(nameInput.value)){
	// Name is valid
	
	nameMessage.innerHTML = "";
	// clear invalid username
} else{
	
	nameMessage.innerHTML = "Name is Invalid";
}


//Stop the form from submitting
event.preventDefault();
	
}