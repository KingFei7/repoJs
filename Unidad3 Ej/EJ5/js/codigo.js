"use strict";

window.onload = principal;
let ventanaSecundaria = null;
function principal() {
    document.getElementById("BtnVentana").onclick = abrirVentana;
    document.getElementById("BtnMensaje").onclick = enviarMensaje;
}

if (ventanaSecundaria.closed) {
    document.getElementById("estado").textContent = "Ventana cerrada"
}
function abrirVentana() {
    if (ventanaSecundaria !== null && !ventanaSecundaria.closed) {
        ventanaSecundaria.focus();
        return;
    }
    ventanaSecundaria = window.open(
        "secundaria.html",
        "ventanaSec",
        "widgth=400,height=500"
    );
    document.getElementById("estado").textContent = "Ventana abierta"
    
}

function enviarMensaje() {
    
}