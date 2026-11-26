"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnResponder").onclick = responderPrincipal;

    window.addEventListener("message", recibirRespuesta);
}

function responderPrincipal() {
    const estado = document.getElementById("estado");

    if (window.opener === null) {
        estado.textContent = "Esta ventana no fue abierta por la principal";
        return;
    }

    const mensajeS = document.getElementById("mensaje").value.trim();
    if (mensajeS === "") {
        estado.textContent = "Mensaje no válido";
        return;
    }

    window.opener.postMessage(mensajeS, location.origin);
    estado.textContent = "Mensaje enviado";
}

function recibirRespuesta(evento) {
    if (evento.origin !== location.origin) {
        document.getElementById("estado").textContent = "Mensaje de origen desconocido";
        return;
    }

    if (evento.source !== window.opener) {
        document.getElementById("estado").textContent = "Mensaje de emisor desconocido";
        return;
    }

    document.getElementById("estado").textContent = "Mensaje recibido";
    document.getElementById("mensajeP").textContent = "Mensaje de principal: " + evento.data;
}