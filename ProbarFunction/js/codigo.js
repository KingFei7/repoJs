"use strict";

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick(numero) {
    const texto = document.getElementById("entrada").value.trim();
    let resultado = "";
    if (texto == "") {
        return "Escribe algo";
    }

    const number = Number(texto);

    if (Number.isNaN(number) || number < 0) {
        return "Escribe un número positivo";
    }

    for (i = 1; i < 10; i++){

    }
}