document.getElementById("realizarTransferencia").addEventListener("click", function () {
    const usuarioOnline = localStorage.getItem("usuarioOnline");
    const usuarioDestino = document.getElementById("usuarioDestino").value.trim();
    const monto = parseFloat(document.getElementById("montoTransferencia").value);
    const mensajeError = document.getElementById("mensajeError");
    const mensajeExito = document.getElementById("mensajeExito");

    mensajeError.textContent = "";
    mensajeExito.textContent = "";

    if (!usuarioDestino || isNaN(monto) || monto <= 0) {
        mensajeError.textContent = "Complete todos los campos para poder continuar ";
        return;
    }

    if (usuarioDestino === usuarioOnline) {
        mensajeError.textContent = "Elige un destino diferente";
        return;
    }

    const destinatarioRegistrado = localStorage.getItem("usuarioGuardado_" + usuarioDestino);
    if (!destinatarioRegistrado) {
        mensajeError.textContent = "El correo ingresado no existe ";
        return;
    }

    let saldoActual = parseFloat(localStorage.getItem("saldo_" + usuarioOnline));
    if (isNaN(saldoActual)) saldoActual = 200000;

    if (monto > saldoActual) {
        mensajeError.textContent = "Saldo insuficiente ";
        return;
    }

    
    let saldoDestino = parseFloat(localStorage.getItem("saldo_" + usuarioDestino));
    if (isNaN(saldoDestino)) saldoDestino = 200000;

   
    saldoActual -= monto;
    saldoDestino += monto;

    localStorage.setItem("saldo_" + usuarioOnline, saldoActual);
    localStorage.setItem("saldo_" + usuarioDestino, saldoDestino);

    mensajeExito.textContent = "Se ha transferido $" + monto + " a " + usuarioDestino + " correctamente ";
});
