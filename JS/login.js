document.getElementById("inicio").addEventListener("click", function () {
  const usuarioIngresado = document.getElementById("usuario").value.trim();
  const contraseñaIngresada = document.getElementById("contraseña").value;

  if (!usuarioIngresado || !contraseñaIngresada) {
    alert("Completa todos los campos para continuar");
    return;
  }

  const usuarioGuardado = localStorage.getItem("usuarioGuardado_" + usuarioIngresado);
  const contraseñaGuardada = localStorage.getItem("contraseñaGuardada_" + usuarioIngresado);

  if (usuarioGuardado && contraseñaGuardada === contraseñaIngresada) {
    alert("¡Bienvenido " + usuarioIngresado + "!");
    localStorage.setItem("usuarioOnline", usuarioIngresado);
    window.location.href = "menu.html";
  } else {
    alert("El usuario o contraseña estan incorrectos");
  }
});
