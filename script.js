var nombre=document.getElementById('nombreInput');
var apellido=document.getElementById('apellidoInput');
var email=document.getElementById('emailInput');
var cantidadTicket=document.getElementById('cantidadInput');
var tipoTicket=document.getElementById('categoriaInput');

// alert("Hola!!")

console.log(`Nombre: ${nombre}`);
console.log("Apellido: " + apellido);
console.log("Correo: " + email);
console.log("Cantidad: " + cantidadTicket);
console.log("Categoria: " + tipoTicket);


if (cantidadTicket==1) {
    if (tipoTicket==3){
        console.log("Total a Pagar $ 200");
    }
}
