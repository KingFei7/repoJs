"use strict";

// EJERCICIO 1: completa la función utilizando while.
function contarDigitosPares(numero) {
    let auxiliar = 0
    if (!esPositivo(numero) && numero !== 0) { //esPositivo devuelve falso si el número es 0
        return false
    } 
    if (numero !== 0) {
        while (numero > 0) {
            if (numero%2===0) {
                auxiliar++
            }
            numero = numero/10
            numero = Math.floor(numero); //Floor acota el número a los decimales, es decir, elimina la parte decimal del numero al dividirlo entre 10 
        }
        return auxiliar;
    } else if(numero == 0) { //Como un número puede tener 0 cifras decimales y aquí incluimos el 0, además de que cuando termina el while el número será 0, he decidido hacer un else if
        return 1;
    } else {
        return false;
    }
}

// EJERCICIO 2: completa la función utilizando for.
function sumaAlterna(limite) {
    let auxiliar = 0;
    if (!esPositivo(limite) && limite !== 0) { //esPositivo devuelve falso si el número es 0
        return false;
    } else if (limite == 0){ //al i empezar desde 1 e incluir el 0, le he hecho un if aparte por si acaso
        return 0;
    } else if (limite > 0) {
        //Si el número es par, se resta. Si es impar, se suma. 
        for (let i = 1; i <= limite; i++) {
            if (i%2==0) {
                auxiliar = auxiliar-i
            } else {
                auxiliar = auxiliar+i
            }
        }
        return auxiliar;
    } 
}
//He puesto los else if en todo aunque en algún caso sobra porque considero que así queda mejor explicado la condición evaluada