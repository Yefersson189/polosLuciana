function validarFormulario (){
    var password = docuemnt.getElementById("password").value;
    var confirmPassword = docuemnt.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
       alert("las contraseñas no coinciden");
       return false;
    }

    return true;

}

  function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si los campos están vacíos
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return false; // Evitar que el formulario se envíe
    }

    // Si llega hasta aquí, el formulario es válido y se puede enviar
    return true;
  }
  function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var email = document.getElementById('email').value;

    // Verificar si los campos están vacíos
    if (username.trim() === '' || password.trim() === '' || confirm_password.trim() === '' || email.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return false; // Evitar que el formulario se envíe
    }

    // Verificar si las contraseñas coinciden
    if (password !== confirm_password) {
      alert('Las contraseñas no coinciden.');
      return false; // Evitar que el formulario se envíe
    }

    // Si llega hasta aquí, el formulario es válido y se puede enviar
    return true;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var cardCheckbox = document.getElementById("card");
    var paypalCheckbox = document.getElementById("paypal");
    var cardholderInput = document.getElementById("cardholder");
    var cardnumberInput = document.getElementById("cardnumber");
    var dateInput = document.getElementById("date");

    cardCheckbox.addEventListener("change", function() {
      if (cardCheckbox.checked) {
        paypalCheckbox.checked = false;
      }
    });

    paypalCheckbox.addEventListener("change", function() {
      if (paypalCheckbox.checked) {
        cardCheckbox.checked = false;
      }
    });

    var form = document.getElementById("paymentForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Realizar validación de campos aquí
      var cardSelected = cardCheckbox.checked;
      var paypalSelected = paypalCheckbox.checked;
      var cardholder = cardholderInput.value;
      var cardnumber = cardnumberInput.value;
      var date = dateInput.value;

      // Ejemplo de validación: asegurarse de que se haya seleccionado al menos una opción de pago
      if (!cardSelected && !paypalSelected) {
        alert("Por favor, selecciona un método de pago.");
        return;
      }

      // Aquí puedes realizar más validaciones según tus necesidades

      // Si todo está bien, puedes enviar el formulario
      form.submit();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("shippingForm");
    var usernameInput = document.getElementById("username");
    var cedulaInput = document.getElementById("cedula");
    var ciudadInput = document.getElementById("ciudad");
    var direccionInput = document.getElementById("direccion");
    var telefonoInput = document.getElementById("telefono");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Realizar validación de campos aquí
      var username = usernameInput.value.trim();
      var cedula = cedulaInput.value.trim();
      var ciudad = ciudadInput.value.trim();
      var direccion = direccionInput.value.trim();
      var telefono = telefonoInput.value.trim();

      // Ejemplo de validación: asegurarse de que todos los campos estén completos
      if (username === '' || cedula === '' || ciudad === '' || direccion === '' || telefono === '') {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Aquí puedes realizar más validaciones según tus necesidades

      // Si todo está bien, puedes enviar el formulario
      form.submit();
    });
  });