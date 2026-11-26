"use strict";

window.onload = principal;
let ventanaSecundaria = null;

function principal() {
    document.getElementById("BtnVentana").onclick = abrirVentana;
    document.getElementById("BtnMensaje").onclick = enviarMensaje;

    window.addEventListener("message", recibirRespuesta);
    setInterval(comprobarVentana, 500);
}

function comprobarVentana() {
    if (ventanaSecundaria !== null && ventanaSecundaria.closed) {
        document.getElementById("estado").textContent = "Ventana cerrada";
        ventanaSecundaria = null;
    }
}

function abrirVentana() {
    if (ventanaSecundaria !== null && !ventanaSecundaria.closed) {
        ventanaSecundaria.focus();
        return;
    }
    ventanaSecundaria = window.open(
        "secundaria.html",
        "ventanaMensaje",
        "width=500,height=400"
    );
    document.getElementById("estado").textContent = "Ventana abierta";
}

function enviarMensaje() {
    const estado = document.getElementById("estado");

    if (ventanaSecundaria === null || ventanaSecundaria.closed) {
        estado.textContent = "Abre la ventana secundaria primero";
        return;
    }

    const mensajeP = document.getElementById("mensaje").value.trim();
    if (mensajeP === "") {
        estado.textContent = "Mensaje no válido";
        return;
    }

    ventanaSecundaria.postMessage(mensajeP, location.origin);
    estado.textContent = "Mensaje enviado";
}

function recibirRespuesta(evento) { 
    if (evento.origin !== location.origin) { 
        document.getElementById("estado").textContent = "Mensaje de origen desconocido";
        return; 
    } 

    if (evento.source !== ventanaSecundaria) {
        document.getElementById("estado").textContent = "Mensaje de emisor desconocido";
        return;
    }
    document.getElementById("MContenido").textContent = "Mensaje de secundaria: "+ evento.data; 
} 