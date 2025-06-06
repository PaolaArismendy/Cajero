localStorage.setItem("usuario", "jzapata@gmail.com");

const usuarioRetiro = localStorage.getItem("usuario");


document.getElementById("retirar").addEventListener('click', function retirar() {

    let usuario = document.getElementById("usuario-retiro").value;
    let monto = parseFloat(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value; //aun no se utiliza llegara a utilizarse en ver movimiento
    let montoprovicional = 200000;

    if (usuario == usuarioRetiro) {

        if (monto>0 && monto<= montoprovicional) {

            montoprovicional-=monto;
            alert(`Retiro exitoso!,ahora tu saldo es de: ${montoprovicional}`)
        }else{
            alert("monto insuficiente")
        }

    }else{
        alert("Usurio no existente")
    }
})

