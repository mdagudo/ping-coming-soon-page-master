function validation() {
    var email = document.getElementById('email').value; // We save the email given by the user in a variable
    var error = document.getElementById('error'); // We save the error div in a variable

    // We create a variable with the valid email format
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
    if (email.match(mailformat)) {
        alert("Valid email address!");
        return true;
    }
    else { // If the email give isn't valid, we change the display of the error div and style the border of the email input to red
        error.style.display="block";
        document.getElementById('email').style.borderColor = 'red';
        return false;
    }
}

