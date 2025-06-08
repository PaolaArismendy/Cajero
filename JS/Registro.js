document.getElementById("guardar").addEventListener("click", function (event) {
  event.preventDefault();

  let usuario = document.getElementById("usuario").value.trim();
  let contraseña = document.getElementById("contraseña").value;
  let confirmarContraseña = document.getElementById("confirmarContraseña").value;
  let errorValidacion = document.getElementById("error");
  errorValidacion.textContent = "";

  if (contraseña !== confirmarContraseña) {
    errorValidacion.textContent = "Las contraseñas deben ser iguales";
    return;
  }

  if (usuario === "") {
    errorValidacion.textContent = "Su correo es requerido para el registro";
    return;
  }

  // Verificar que el usuario no exista:
  if (localStorage.getItem("usuarioGuardado_" + usuario)) {
    errorValidacion.textContent = "Este correo ya está registrado";
    return;
  }

  // Guardar usuario, contraseña y saldo
  localStorage.setItem("usuarioGuardado_" + usuario, usuario);
  localStorage.setItem("contraseñaGuardada_" + usuario, contraseña);
  localStorage.setItem("saldo_" + usuario, 200000);

  alert("¡Su registro ha sido completado exitosamente!");
  window.location.href = "../UsuarioHtml/InicioSesion.html";  
});

document.getElementById("mostrarContraseña").addEventListener("click", function() {
  const input = document.getElementById("contraseña");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});

document.getElementById("verConfirmarContraseña").addEventListener("click", function() {
  const input = document.getElementById("confirmarContraseña");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
