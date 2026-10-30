"use strict";

//ej1
function esNumero(entrada){
    const comprobacion = Number(entrada);
    let valorEntrada = String(entrada).trim();
    if (Number.isNaN(comprobacion) || valorEntrada === "" || valorEntrada === null) {
        return false;
    } else {
        return true;
    }
}
function esEntero(numero){
    if (!esNumero(numero) || !Number.isInteger(numero)) {
        return false;
    } else {
        return true;
    }
}
function esPositivo(numero){
    if (!esNumero(numero) || numero<0) {
        return false;
    } else {
        return true;
    }
}

function ej1(num) {
    if (num == "") {
        return "No lo dejes en blanco, anda";
    }
    const numero = Number(num); 

    console.log(esNumero(numero) ? "Es un número" : "No es un número");
    if (!esNumero(numero)) {
        return;
    }
    console.log(esEntero(numero) ? "Es entero" : "No es entero");
    console.log(esPositivo(numero) ? "Es positivo" : "No es positivo");
}

//ej2
function suma(a,b) {
    if (esNumero(a) && esNumero(b)){
        return a + b;
    } else {
        return NaN;
    }
}

function resta(a,b) {
    if (esNumero(a) && esNumero(b)){
        return a - b;
    } else {
        return NaN;
    }
}

function dividir(a, b){
    if (b == 0) {
        return NaN;
    }
    if (esNumero(a) && esNumero(b)) {
        return a / b
    } else {
        return NaN;
    }
}

function multiplicar(a,b) {
    if (esNumero(a) && esNumero(b)){
        return a * b;
    } else {
        return NaN;
    }
}

//ej3
function factorial(num) {
    let resultado = 1
    if (esPositivo(num)){
        for (let index = 1; index <= num; index++) {
            resultado *=  index;
        }
        return resultado;
    } else {
        return NaN
    }
}

function sumatorio(num)  {
    let resultado = 0; 
    if (esPositivo(num)){
        for (let index = 1; index <= num; index++) {
            resultado +=  index;
        }
        return resultado;
    } else {
        return NaN
    }
}

//ej4
function enRango(numero, minimo, maximo) {
    if (numero >= minimo && numero <= maximo) {
        return true
    } else {
        return false
    }
}

function esDivisible(dividendo, divisor) {
    if (divisor == 0){
        return false
    }

    if (dividendo%divisor == 0) {
        return true
    } else {
        return false
    }
}

