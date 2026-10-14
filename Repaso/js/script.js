"use strict";

window.onload = principal;

function principal() {
    document.getElementById("BEj1").onclick = ej1;
    document.getElementById("BEj2").onclick = ej2;
    document.getElementById("BEj3").onclick = ej3;
    document.getElementById("BEj4").onclick = ej4;
    document.getElementById("BEj5").onclick = ej5;
    document.getElementById("BEj6").onclick = ej6;
    document.getElementById("BEj7").onclick = ej7;
}

function ej1() {
    
    for (let cont = 1;cont <= 10; cont++) {
        switch (cont) {
            case 1:
                console.log("1. Buenos días");
                break;
            case 2:
                console.log("2. Levantate");
                break;
            case 3:
                console.log("3. Desayuna");
                break;
            case 4:
                console.log("4. Vistete");
                break;
            case 5:
                console.log("5. Sal para coger el bus");
                break;
            case 6:
                console.log("6. Coge el bus");
                break;
            case 7:
                console.log("7. Sientate en el bus");
                break;
            case 8:
                console.log("8. Coge el S1");
                break;
            case 9:
                console.log("9. De camino al instituto");
                break;
            case 10:
                console.log("10. Has llegado a tu destino");
                break;
            default:
                console.log("Error");
                break;
        }
    }
}

function ej2() {
    const texto = document.getElementById("entradaEj2").value.trim();
    
    if (texto == "") {
        console.log("Introduce algún número");
        return;
    }

    const num = Number(texto);

    if (Number.isNaN(num)) {
        console.log("Introduce algún número")
        return;
    }

    if (Number.isInteger(num)) {
        console.log("Tu número es", num);
        if (num== 0){
            console.log("Es un 0. Es neutro")
        }
        else if (num % 2 == 0) {
            console.log("Es par");

        } else {
            console.log("Es impar");
        }
    } else {
        console.log("No es un número entero")
    }
}

function ej3(){
    let cont = 0;
    let textoWhile = prompt("Introduce una palabra. Para salir, pulse o escriba ESC");
    while (textoWhile !== null && textoWhile.toUpperCase()!== "ESC"){
        cont++
        textoWhile = prompt("Introduce una palabra. Para salir, pulse o escriba ESC");
    }


    console.log("El total de palabras ha sido: ", cont);
    
}

function ej4(){
    let cont = 0;
    let textoWhile;


    do {
        textoWhile = prompt("Introduce una palabra. Para salir, pulse o escriba ESC");
        if (textoWhile !== null && textoWhile.toUpperCase()!== "ESC") {
            cont++
        }
    } while (textoWhile !== null && textoWhile.toUpperCase()!== "ESC");

    console.log("El total de palabras ha sido: ", cont);
}

function ej5(){
    let textoWhile = prompt('Introduce una palabra. Para salir, pulse o escriba ESC');
    let textos = [];
    while (textoWhile !== null && textoWhile.toUpperCase()!== "ESC") {
        textos.push(textoWhile.trim());
        textoWhile = prompt("Introduce una palabra. Para salir, pulse o escriba ESC");
    }
    textos.sort();
    console.log("Usted a introducido estas palabras: ", textos);
}

function ej6(){
    const texto = document.getElementById("entradaEj6").value.trim();
    let contPares = 0;
    let suma = 0;
    if (texto == '') {
        console.log("Introduce algún número positivo");
        return;
    }

    const num = Number(texto);

    if (Number.isNaN(num)) {
        console.log("Introduce algún número positivo");
        return;
    }

    if (!Number.isInteger(num)) {
        console.log("Introduce algún número entero");
        return;
    }

    if (num > 0) {
        for (let index = 1; index <= num ; index++) {
            suma += index;
            if (index%2 == 0) {
                contPares++;
            }
        }
    } else {
        console.log("Introduce algún número positivo");
        return;
    }
    
    console.log("Con el número ",num);
    console.log("La suma da: ",suma);
    console.log("El número de pares es: ",contPares);
}

function ej7(){
    const texto = document.getElementById("entradaEj7").value.trim();
    
    if (texto == '') {
        console.log("Introduce algún número positivo");
        return;
    }
    
    const num = Number(texto);
    if (Number.isNaN(num)) {
        console.log("Introduce algún número positivo");
        return;
    }
    
    if (!Number.isInteger(num)) {
        console.log("Introduce algún número entero");
        return;
    }

    if (num > 10 || num < 1) {
        console.log("Introduce algún número del 1 al 10");
        return;
    }
    
    console.log("La tabla del ", num);
    for (let i = 1; i <= 10; i++) {
        console.log(i, "x", num, "=", num*i);
    }
    console.log("FIN");
}