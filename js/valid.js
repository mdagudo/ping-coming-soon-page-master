function validation() {
    var email = document.getElementById('email').value; // We save the email given by the user in a variable
    var error = document.getElementById('error'); // We save the error div in a variable

    // We create a variable with the valid email format
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
    if (email.match(mailformat)) {
        alert("Valid email address!");
        return true;
        
    } else if (email == '') {
        error.style.display = "block";
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
        document.getElementById('email').style.borderColor = 'red';
        return false;

    } else { 
        error.style.display="block";
        error.innerHTML = "Please provide a valid email address";
        document.getElementById('email').style.borderColor = 'red';
        return false;
    }
}

