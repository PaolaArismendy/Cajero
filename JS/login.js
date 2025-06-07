document.getElementById("inicio").addEventListener("click", function () {
    const usuarioGuardado = localStorage.getItem("usuarioGuardado");
    const contraseñaGuardada = localStorage.getItem("contraseñaGuardada");

    const usuarioRegistrado = document.getElementById("usuario").value.trim();
    const contraseñaRegistrada = document.getElementById("contraseña").value;

    if (!usuarioRegistrado || !contraseñaRegistrada) {
        alert("Completa todos los campos para continuar");
        return;
    }

    if (usuarioRegistrado === usuarioGuardado && contraseñaRegistrada === contraseñaGuardada) {
        alert("¡Bienvenido " + usuarioRegistrado + "!");
        window.location.href = "menu.html";
    } else {
        alert("El usuario o contraseña estan incorrectos");
    }
});
