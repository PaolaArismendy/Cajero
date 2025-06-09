// Obtener el usuario que inició sesión
const usuarioOnline = localStorage.getItem("usuarioOnline");

if (!usuarioOnline) {
    alert("No hay un usuario en sesión.");
}

// Evento de consignar
document.getElementById("consignar").addEventListener('click', function () {
    const usuarioDestino = document.getElementById("usuario").value.trim();
    const monto = parseFloat(document.getElementById("cantidad").value);

    // Validación
    if (!usuarioDestino || isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un usuario y un monto válidos.");
        return;
    }

    // Verificar si el usuario destino tiene una cuenta (es decir, tiene saldo creado)
    let saldoDestino = parseFloat(localStorage.getItem("saldo_" + usuarioDestino));

    // Si no tiene cuenta aún, iniciar con 0
    if (isNaN(saldoDestino)) {
        saldoDestino = 0;
    }

    // Sumar monto
    const nuevoSaldo = saldoDestino + monto;

    // Guardar nuevo saldo
    localStorage.setItem("saldo_" + usuarioDestino, nuevoSaldo);

    // Mensaje según si se consignó a sí mismo u otro
    if (usuarioDestino === usuarioOnline) {
        alert("Te has consignado a ti mismo. Tu nuevo saldo es: $" + nuevoSaldo.toLocaleString());
    } else {
        alert("Consignación realizada a " + usuarioDestino + ". Nuevo saldo del destinatario: $" + nuevoSaldo.toLocaleString());
    }
});
