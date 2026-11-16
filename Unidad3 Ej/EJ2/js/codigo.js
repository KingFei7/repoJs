"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnEj1").onclick = Ej1;
}

function Ej1() {
    const X = document.getElementById("numX").value;
    const Y = document.getElementById("numY").value;
    if (Number.isNaN(X)|| Number.isNaN(Y) || !Number.isFinite(X) || !Number.isFinite(Y)) {
    document.getElementById("ejer1").textContent =
    "\nPon números correctos"
    }
    document.getElementById("ejer1").textContent =
    "\nValor absoluto de X: " + Math.abs(X) + 
    "\nTecho de Y: " + Math.ceil(Y) +
    "\nSuelo de X: " + Math.floor(X) +
    "\nRedondeo de Y: " + Math.round(Y) +
    "\nPotencia de X a la Y: " + Math.pow(X,Y) +
    "\nMáximo de X e Y: " + Math.max(X,Y) +
    "\nMínimo de X e Y: " + Math.min(X,Y);
}