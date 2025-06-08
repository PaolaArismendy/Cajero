const usuarioOnline = localStorage.getItem("usuarioOnline");

document.getElementById("correoUsuario").textContent = "Usuario: " + usuarioOnline;

let saldo = localStorage.getItem("saldo_" + usuarioOnline);

document.getElementById("saldoUsuario").textContent = "$" + parseFloat(saldo).toLocaleString();
