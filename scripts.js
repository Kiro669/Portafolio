document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Validar Nombre
    const nombre = document.getElementById('nombre');
    const nombreError = document.getElementById('nombreError');
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre no debe estar en blanco.';
        isValid = false;
    } else if (nombre.value.length > 50) {
        nombreError.textContent = 'El nombre debe contener máximo 50 caracteres.';
        isValid = false;
    } else {
        nombreError.textContent = '';
    }

    // Validar Correo Electrónico
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'El correo electrónico no debe estar en blanco.';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'El correo electrónico debe estar en formato correcto.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validar Tema
    const tema = document.getElementById('tema');
    const temaError = document.getElementById('temaError');
    if (tema.value.trim() === '') {
        temaError.textContent = 'El tema no debe estar en blanco.';
        isValid = false;
    } else if (tema.value.length > 50) {
        temaError.textContent = 'El tema debe contener máximo 50 caracteres.';
        isValid = false;
    } else {
        temaError.textContent = '';
    }

    // Validar Mensaje
    const mensaje = document.getElementById('mensaje');
    const mensajeError = document.getElementById('mensajeError');
    if (mensaje.value.trim() === '') {
        mensajeError.textContent = 'El mensaje no debe estar en blanco.';
        isValid = false;
    } else if (mensaje.value.length > 300) {
        mensajeError.textContent = 'El mensaje debe contener máximo 300 caracteres.';
        isValid = false;
    } else {
        mensajeError.textContent = '';
    }

    if (isValid) {
        // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo usando fetch() o XMLHttpRequest
        alert('Formulario enviado correctamente.');
        // document.getElementById('contactForm').submit(); // Descomentar para enviar el formulario
    }
});
