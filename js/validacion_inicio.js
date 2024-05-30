src =
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js";
src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      resetErrorMessages();
      var user_name = document.getElementById("user_name").value.trim();
      var correo_elec = document.getElementById("correo_elec").value.trim();
      var password = document.getElementById("password").value.trim();
      var isValid = true;

      if (user_name === "") {
        displayErrorMessage("usernameError", "Por favor ingrese un usuario.");
        isValid = false;
      }

      if (!isValidEmail(correo_elec)) {
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

      if (isValid) {
        alert("¡Formulario enviado correctamente!");
        /**ventanaSecundaria(mensaje);*/
      }
    });
});

function isValidEmail(correo_elec) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(correo_elec);
}

function displayErrorMessage(elementId, message) {
  var errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
}
function resetErrorMessages() {
  let errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (element) {
    element.innerText = "";
  });
}
/**function ventanaSecundaria(mensaje) {
  let mensaje = (src = "./pages/iniciosesion.html");
  window.open(mensaje, "ventana1", "width= 80px , height=80px");
}*/
