src =
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js";
src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registroForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      resetErrorMessages();

      var username = document.getElementById("user_name").value.trim();
      var userlastname = document.getElementById("last_name").value.trim();
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
      var born = document.getElementById("birthdate").value.trim();

      const acceptTerms = document.getElementById("termino").checked;

      var isValid = true;

      if (username === "") {
        displayErrorMessage(
          "usernameError",
          "Por favor ingrese nombre de usuario."
        );
        isValid = false;
      }

      if (userlastname === "") {
        displayErrorMessage(
          "lastnameError",
          "Por favor ingrese apellido de usuario."
        );
        isValid = false;
      }

      if (!isValidEmail(email)) {
        displayErrorMessage(
          "emailError",
          "Por favor ingrese un correo electrónico válido."
        );
        isValid = false;
      }

      if (password.length < 8) {
        displayErrorMessage(
          "passwordError",
          "La contraseña debe tener al menos 8 caracteres."
        );
        isValid = false;
      }

      if (!isValidate(born)) {
        displayErrorMessage(
          "birthError",
          "La fecha ingresada debe tener formato dd/mm/aaaa."
        );
        isValid = false;
      }

      if (!acceptTerms) {
        displayErrorMessage(
          "terminoError",
          "Debe aceptar los Términos y Condiciones"
        );
        isValid = false;
      }

      if (isValid) {
        alert("¡Formulario enviado correctamente!");
      }
    });
});

function isValidEmail(correo_elec) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(correo_elec);
}

function isValidate(date_nac) {
  const fechaPattern = /^\d{4}-\d{2}-\d{2}$/;
  return fechaPattern.test(date_nac);
}

function displayErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
}

function resetErrorMessages() {
  let errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (element) {
    element.innerText = "";
  });
}
