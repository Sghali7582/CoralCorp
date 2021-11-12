function validar() {

    //Asignamos el elemento a una variable
    let name = document.getElementById('name');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('correo');
    let pswd = document.getElementById('pswd');
    let rpt_pswd = document.getElementById('rpt_pswd');

    var textErrors = [];

    var validado = true;

    var checkStrings = /^[a-z]+$/;
    var checkPswd = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var checkEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
    let mensaje = "";


    if (!checkStrings.test(name.value)) {
        validado = false;
        mensaje = "Nombre: No puedes poner n\u00FAmeros, ni caracteres especiales y debe de estar en min\u00FAsculas";
        textErrors.push(mensaje);
    }

    if (!checkStrings.test(lastName.value)) {
        validado = false;
        mensaje = "Apellido: No puedes poner n\u00FAmeros, ni caracteres especiales";
        textErrors.push(mensaje);
    }

    if (!checkEmail.test(email.value)) {
        validado = false;
        mensaje = "Correo: Introduzca un correo electr\u00F3nico v\u00E1lido.";
        textErrors.push(mensaje);
    }

    if (pswd.value === rpt_pswd.value) {
        if (!checkPswd.test(pswd.value)) {
            validado = false;
            mensaje = "Contrase\u00F1a: Debe de contener al menos un n\u00FAmero, una letra may\u00FAscula, una min\u00FAscula y al menos " +
                "8 caracteres.";
            textErrors.push(mensaje);
        }
    } else {
        mensaje = "Contraseña: Las contrase\u00F1as no coinciden.";
        textErrors.push(mensaje);
    }

    if (validado) {
        alert("Tu solicitud ha sido procesada correctamente.");
    } else {
        let toDisplay = '';
        for (let i = 0; i < textErrors.length; i++) {
            toDisplay = toDisplay + textErrors[i] + '\r';
        }
        alert(toDisplay);
    }

}