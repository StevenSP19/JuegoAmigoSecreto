// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let amigoSecreto = document.getElementById("amigo").value;
    if (amigoSecreto === "") {
        alert("Por favor, ingresa un nombre valido.");
    } else {
        listaAmigos.push(amigoSecreto);
        mostrarListaAmigos();
        limpiarCampos();
    }
}

function mostrarListaAmigos() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function limpiarCampos() {
    document.getElementById('amigo').value = '';
}

function limpiarlista(){
    document.getElementById("listaAmigos").innerHTML = "";
    listaAmigos = [];
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (listaAmigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    limpiarlista();
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}