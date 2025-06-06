localStorage.setItem("usuario", "jzapata@gmail.com");

const usuarioConsignar = localStorage.getItem("usuario");


    document.getElementById("consignar").addEventListener('click', function () {
        let usuario = document.getElementById("usuario-consignacion").value.trim();
        let monto = parseFloat(document.getElementById("cantidad").value);
        let montoprovicional = 200000;

       

        if (usuario === usuarioConsignar) {
            montoprovicional += monto;
            alert("Tu saldo ahora es de: $" + montoprovicional);
        } else {
            alert("Usuario no existente");
        }
    });


