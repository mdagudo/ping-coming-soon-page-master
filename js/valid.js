function validation() {
    var email = document.getElementById('email').value; // Guardamos el email ingresado por el usuario
    var error = document.getElementById('error'); // Guardamos en una variable el div de error

    // Creamos una variable con el formato de email válido
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Si el email ingresado concuerda con el formato de email, entonces el formulario hace submit
    if (email.match(mailformat)) {
        alert("Valid email address!");
        return true;
    }
    else { // Si el email es inválido, cambiamos el display del div error por block y agregamos el borde rojo al input
        error.style.display="block";
        document.getElementById('email').style.borderColor = 'red';
        return false;
    }
}

