"use strict";

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
let contador = 0; //El número de números impares no múltiplos de 3
let numero = 1; //Es el número que probamos en el bucle

    while (contador < 10) {
        if (numero % 3 === 0) {
            numero++;
            continue;
        }
        if (numero % 2 !== 0) {
            console.log("IMPAR: " + numero);
            contador++;
        }   
        numero++;
    }
}
