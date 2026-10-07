"use strict";

window.onload = principal;

function principal() {
    document.getElementById("ej1").onclick = EjecutarEj1;
    document.getElementById("ej2").onclick = EjecutarEj2;
    document.getElementById("ej3").onclick = EjecutarEj3;
    document.getElementById("ej4").onclick = EjecutarEj4;
}

function EjecutarEj1() {
    const texto = document.getElementById("entradaEj1").value.trim();

    if (texto == "") {
        console.log("No has introducido nada en el recuadro, introduce el número como se te indica")
        return;
    }
    const numAComparar = Number(texto);

    if (Number.isNaN(numAComparar)) {
        console.log("Eso no es un número, escribe un número como se indica")
        return;
    }

    console.log("Has introducido el número", numAComparar , ", que tiene las siguientes caracteristicas:")
    if (numAComparar < 0) {
        console.log("Es un número negativo")
    } else if (numAComparar == 0) {
        console.log("Es un número neutro")
        return;
    } else {
        console.log("Es un número positivo")
    }

    if (Number.isInteger(numAComparar)) {
        console.log("Es un número entero")
        if (numAComparar%2==0){
            console.log("Es un número par")
        } else {
            console.log("Es un número impar")
        }
    } else {
        console.log("Tu número no es positivo")
    }
}

function EjecutarEj2(){
    const texto = document.getElementById("entradaEj2").value.trim();

    if (texto=="") {
        console.log("Por favor, introduce un numero del 0 al 10")
        return;
    }

    const nota = Number(texto)

    if (Number.isNaN(nota)){
        console.log("Introduce un valor numérico del 0 al 10 por favor")
        return;
    } else if ((0 > nota) || (nota > 10)) {
        console.log("Asegurate de que introduces de forma correcta tu nota")
        return;
    }

    if (nota < 5){
        console.log("Suspenso")
    } else if (nota < 6){
        console.log("Suficiente")
    } else if (nota < 7) {
        console.log("Bien")
    } else if (nota < 9){
        console.log("Notable")
    } else if (nota < 10){
        console.log("Sobresaliente")
    } else {
        console.log("Perfecto")
    }
}

function EjecutarEj3(){
    const texto = document.getElementById("entradaEj3").value.trim();

    if (texto=="") {
        console.log("Por favor, introduce un numero del 1 al 3")
        return;
    }

    const opcion = Number(texto);

    if (Number.isNaN(opcion)) {
        console.log("Introduce un número del 1 al 3")
        return;
    } else if (Number.isInteger(opcion) == false){
        console.log("Por favor, introduce un número entero del 1 al 3")
        return;
    }

    switch (opcion){
        case  1:
            console.log("ONE: I hate the fact that you made me love you");
        break;
        case  2:
            console.log("TWO years of your bullshit, I can't undo");
        break;
        case  3:
            console.log("THREE: You still got mommy issues");
        break;
        default:
            console.log("Mete una opción válida");
        break;
    } 
}

function EjecutarEj4() {
    const texto = document.getElementById("entradaEj4").value.trim();

    if (texto=="") {
        console.log("Por favor, introduzca su importe")
        return;
    }

    const importe = Number(texto);

    if (Number.isNaN(importe)) {
        console.log("Eso no es un número")
        return;
    } else if (importe < 0) {
        console.log("No puede ser negativo el importe")
        return;
    }

    const Premium = document.getElementById("EsPremium")
    const importeNoPremium = importe >= 50 ? importe : importe + 4.99;

    console.log("Tu cuenta es ", Premium.checked ? "Premium" : "No premium" );
    if (Premium.checked) {
        console.log("Tu importe es de: ",importe);
    } else {
        console.log ("Tu importe es de ", importeNoPremium);
    }
    console.log("RESUMEN Tu cuenta es ", Premium.checked ? "Premium" : "No premium", "y su importe es ", Premium.checked ? importe : importeNoPremium);
}