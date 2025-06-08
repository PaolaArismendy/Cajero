
// Asociar cada botón con una URL
document.getElementById("consultar-saldo").addEventListener("click", function (event) {
    window.location.href = "../SubvistasHtml/Consultar.html";
});

document.getElementById("transferir").addEventListener("click", function (event) {
    window.location.href = "../SubVistasHtml/Transferencia.html";
});

document.getElementById("consignar").addEventListener("click", function (event) {
    window.location.href = "../SubVistasHtml/Consignar.html";
});

document.getElementById("retirar").addEventListener("click", function (event) {
    window.location.href = "../SubVistasHtml/Retirar.html";
});

document.getElementById("ver-movimientos").addEventListener("click", function (event) {
    window.location.href = "ver_movimientos.html";
});

document.getElementById("cerrar-sesion").addEventListener("click", function (event) {
    window.location.href = "../UsuarioHtml/InicioSesion.html"; // Suponiendo que regresa a la pantalla de inicio de sesión
});

