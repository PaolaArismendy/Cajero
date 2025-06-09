const usuarioOnline = localStorage.getItem("usuarioOnline");

if (!usuarioOnline) {
    alert("No hay un usuario en sesión.");
}

document.getElementById("retirar").addEventListener('click', function () {
    const usuarioInput = document.getElementById("usuario-retiro").value.trim();
    const monto = parseFloat(document.getElementById("cantidad").value);
    const categoria = document.getElementById("categoria").value; // se puede usar luego para movimientos

    // Validación de entrada
    if (!usuarioInput || isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un usuario válido y un monto mayor a 0.");
        return;
    }

    // Validar que el usuario ingresado sea el mismo que el que está en sesión
    if (usuarioInput !== usuarioOnline) {
        alert("Error: Solo puedes retirar de tu propia cuenta.");
        return;
    }

    // Obtener el saldo actual del usuario
    let saldoActual = parseFloat(localStorage.getItem("saldo_" + usuarioOnline)) || 0;

    if (monto > saldoActual) {
        alert("Fondos insuficientes. Tu saldo actual es: $" + saldoActual.toLocaleString());
        return;
    }

    // Descontar monto y actualizar saldo
    const nuevoSaldo = saldoActual - monto;
    localStorage.setItem("saldo_" + usuarioOnline, nuevoSaldo);

    alert(`Retiro exitoso. Tu nuevo saldo es: $${nuevoSaldo.toLocaleString()}`);
});
