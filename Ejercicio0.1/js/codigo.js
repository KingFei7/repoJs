"use strict";

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    const texto = document.getElementById("entrada").value;

    document.getElementById("salida").textContent =
        "Has escrito: " + texto;
}