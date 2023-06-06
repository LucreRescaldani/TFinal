//const formularioPrincipal = document.getElementById("formulario");
const formularioComprar = document.getElementById("formulario_comprar");

// Obtener la referencia a los campos nombre, apellido, email y cantidad de tickets
const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const email = document.getElementById("emailInput");
let cantTicket = document.getElementById("cantidadInput");

// Obtener la referencia a la lista de categoría de tickets
let ticket = document.getElementById("categoriaSelect"); // 1-2-3-4

let totCompra = 200;  // en la variable totCompra guardo el valor de la entrada sin descuento

const botonEnviar = document.getElementById("enviar");


function mostar() {
    console.log("Nombre: " + nombre.value);
    console.log("Apellido: " + apellido.value);
    console.log("Correo: " + email.value);
    console.log("Cantidad: " + cantTicket.value);
    console.log("Categoria: " + ticket.value);
}

function validar() {
    if (nombre.value == null || nombre.value.length <= 3 || /^\s+$/.test(nombre.value)) {
        // Si no se cumple la condicion...
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
        return false;
    }
    else if (apellido.value == null || apellido.value.length <= 4 || /^\s+$/.test(apellido.value)) {
        // Si no se cumple la condicion...
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
        return false;
    }
    else if ((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email.value))) {
        // Si no se cumple la condicion...
        document.getElementById("errorEmail").innerHTML = "El email no es válido";
        return false;
    }
    else if (cantTicket.value < 1 || !(/^\d{1}$/.test(cantTicket.value))) {
        // Si no se cumple la condicion...
        document.getElementById("errorCantidad").innerHTML = "La cantidad de tickets no es válida";
        return false;
    }
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true y coloca en blanco los carteles de error
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellido").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorCantidad").innerHTML = "";
    return true;
}

function calcular() {
    switch (ticket.value) {
        case "1":
            totCompra = totCompra * 0.20 * cantTicket.value;
            document.getElementById("totalCompra").innerHTML = "Total a Pagar: $" + totCompra;
            break
        case "2":
            totCompra = totCompra * 0.50 * cantTicket.value;
            document.getElementById("totalCompra").innerHTML = "Total a Pagar: $" + totCompra;
            break
        case "3":
            totCompra = totCompra * 0.85 * cantTicket.value;
            document.getElementById("totalCompra").innerHTML = "Total a Pagar: $" + totCompra;
            break
        case "4":
            totCompra = totCompra * cantTicket.value;
            document.getElementById("totalCompra").innerHTML = "Total a Pagar: $" + totCompra;
            break
        default:
            console.log("No es tipo de ticket válido")
            break
    }
}

formularioComprar.addEventListener('submit', (e) => {
    e.preventDefault();
})
botonEnviar.addEventListener("click", mostar);
botonEnviar.addEventListener("click", validar);
botonEnviar.addEventListener("click", calcular);
