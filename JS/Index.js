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

    if (localStorage.getItem("usuarioGuardado") === usuario) {
        errorValidacion.textContent = "Este correo ya está registrado";
        return;
    }

    localStorage.setItem("usuarioGuardado", usuario);
    localStorage.setItem("contraseñaGuardada", contraseña);

    alert("¡Su registro ha sido completado existosamente!");
    window.location.href = "../UsuarioHtml/InicioSesion.html"; 
});


    const boton = document.getElementById("mostrarContraseña");
    const campo = document.getElementById("contraseña");
    
    boton.onclick = function () {
        campo.type = campo.type === "password" ? "text" : "password";
    };
    
    const botonConfirmar = document.getElementById("verConfirmarContraseña");
    const campoConfirmar = document.getElementById("confirmarContraseña");
    
    botonConfirmar.onclick = function () {
        campoConfirmar.type = campoConfirmar.type === "password" ? "text" : "password";
    };
