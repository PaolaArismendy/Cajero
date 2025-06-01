document.getElementById("guardar").addEventListener("click", function (event) {
    event.preventDefault(); 

    let contraseña = document.getElementById("contraseña").value;
    let confirmarContraseña = document.getElementById("confirmarContraseña").value;
    let errorValidacion = document.getElementById("error");

    errorValidacion.textContent = ""; 

    if (contraseña !== confirmarContraseña) {
        errorValidacion.textContent = "Las contraseñas deben ser iguales";
        return; 
    }

    alert("¡Registro correcto!"); 
});


const boton = document.getElementById("mostrarContraseña");
const campo = document.getElementById("contraseña");

boton.onclick = function() {
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
};