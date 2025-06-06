
    // Asociar cada botón con una URL
    document.getElementById("consultar-saldo").addEventListener("click", function (event) {
        window.location.href = "consultar_saldo.html";
    });

    document.getElementById("transferir").addEventListener("click", function (event) {
        window.location.href = "transferir.html";
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
        window.location.href = "login.html"; // Suponiendo que regresa a la pantalla de inicio de sesión
    });

