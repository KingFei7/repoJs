"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnEj1").onclick = Ej1;
    document.getElementById("btnEj2").onclick = function() {
        let numMin = document.getElementById("minSorteo").value;
        let numMax = document.getElementById("maxSorteo").value;
        generarEntero(numMin, numMax);
    }
    document.getElementById("btnEj3").onclick = importe;
    document.getElementById("btnEj4").onclick = fecha;
    document.getElementById("btnEj5").onclick = fechaFutura;
}

function Ej1() {
    const X = document.getElementById("numX").value.trim();
    const Y = document.getElementById("numY").value.trim();
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

function generarEntero(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(min)) {
        document.getElementById("ejer2").textContent =
        "\nSolo números enteros"
        return false;
    } else if (min < max){
        document.getElementById("ejer2").textContent =
        "\nMínimo debe ser menor que máximo"
    } else {
        let random = Math.random() * (max - min) + min;
        document.getElementById("ejer2").textContent =
        "\nEl número aleatorio entre " + max + " y " + min + " es: " + random;
        return random
    }
}

function importe(){
    let importeO = Number(document.getElementById("importe0").value)
    if (importeO == "" || importe0 == null) {
        document.getElementById("ejer3").textContent =
        "\nPon un número"
    } else {
        document.getElementById("ejer3").textContent =
        "\nEl número que has introducido es: " + importeO + "\nformateado con toFixed: " + importeO.toFixed(2) + "\ntypeOf() del toFixed es: " + typeof importeO.toFixed(2);
        //ToFixed, devuelve un String para presentar el elemento por pantalla, no se utiliza para seguir calculando, si queremos seguir calculando tendremos que castearlo a Number de nuevo
    }
}

function fecha() {
    let fecha = new Date();
    let dia = fecha.getDate(); //getDay te da el día de la semana
    let mes = fecha.getMonth() + 1;
    let any = fecha.getFullYear(); //getYear está obsoleto, es mejor ponerlo así
    let localDfecha = fecha.toLocaleDateString("es-ES")
    let hora = fecha.getHours();
    let minuts = fecha.getMinutes();
    let segons = fecha.getSeconds();
    let toLocalTString = fecha.toLocaleTimeString("es-ES")

    document.getElementById("ejer4").textContent =
    "Dia: " + dia +
    "\nMes: " + mes +
    "\nAño: " + any +
    "\nHora: " + hora + 
    "\nMinutos: " + minuts + 
    "\nSegundos: " + segons +
    "\ntoLocalDateString: " + localDfecha +
    "\ntoLocaleTimeString: " + toLocalTString;
}

function fechaFutura() {
    let fechaF = new Date(document.getElementById("inputFecha").value);
    let fechaA = new Date();
    if (Number.isNaN(fechaF.getTime())) {
        document.getElementById("ejer5").textContent =
        "Introduce una fecha";
        return;
    }
    if (fechaF - fechaA < 0) {
        document.getElementById("ejer5").textContent =
        "Introduce una fecha futura";
        return;
    }
        document.getElementById("ejer5").textContent =
        "Para llegar a " + fechaF.toLocaleDateString("es-ES") + " quedan " + Math.ceil((fechaF - fechaA)/(1000 * 60 * 60 * 24)) + " días";
        // lo más sensato es poner un ceil
        //Ya que en fechaF la hora siempre será las 00:00:00, mientras que fechaA casi siempre será la hora actual que siempre sera mayor o igual a (00:00:00:00)  
}