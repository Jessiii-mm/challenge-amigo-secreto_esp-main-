// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] ;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}


function AñadirAmigo (){
    let nombres = document.getElementById('amigo').value;
    if (nombres === ""){
        alert("Ingrese los nombres")
        return;
    }
    if (amigos.includes(nombres)) {
        alert("Este nombre ya está en la lista ingrese otro.");
        limpiarCaja();
        return;
    }
    else{
        amigos.push(nombres)
        asignarTextoElemento('h2', 'Digite el nombre de sus amigos:')
        limpiarCaja();
        actualizarLista();
    // Habilitar el botón de sortear si hay al menos 2 amigos
    if (amigos.length >= 2) {
        document.querySelector(".button-draw").disabled = false;
    }
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function limpiarCaja() {
    document.getElementById("amigo").value ="";
}

function SortearAmigo (){
    if (amigos.length <= 2){
        alert('Requieres mas de dos amigos para el sorteo');
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSeleccionado = amigos[amigoAleatorio];

     // Mostrar el resultado en el DOM
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = nombreSeleccionado; // Mostrar solo el nombre seleccionado

}
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos

    // Limpiar la lista de amigos en el DOM
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";

    // Deshabilitar el botón de sortear
    document.querySelector(".button-draw").disabled = true;

    // Limpiar la caja de texto
    limpiarCaja();
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        AñadirAmigo();
    }
});

asignarTextoElemento('h1',' Amigo Secreto ');
asignarTextoElemento('h2','Digite el nombre de sus amigos:');
