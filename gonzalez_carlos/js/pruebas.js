"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnPruebas").onclick = ejecutarPruebas;
}

// EJERCICIO 3: BANCO DE PRUEBAS
// Programa la comparación de resultados y su visualización.
function probar(descripcion, obtenido, esperado) {
    let resultados = document.getElementById("resultados"); 
    let resultado = ""; //Inicializo la variable por si acaso
    if (obtenido === esperado || (Number.isNaN(obtenido) && Number.isNaN(esperado))) {
        resultado = "CORRECTO";
    } else{
        resultado = "ERROR"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }
    resultados.textContent += "Descripción: " + descripcion +
    " Valor obtenido: " + obtenido + 
    " Valor esperado: " + esperado + 
    " Resultado: " + resultado + "\n";
}

// Programa las 8 pruebas: 6 obligatorias y 2 propias.
function ejecutarPruebas() {
    let resultados = document.getElementById("resultados");
    resultados.textContent = "" //Borro todo lo anterior del textcontent para que no se junte cuando vuelva a pulsar el botón
    //Pruebas contarDigitosPares
    probar("contarDigitosPares(2487)", contarDigitosPares(2487), 3);
    probar("contarDigitosPares(135)", contarDigitosPares(135), 0);
    probar("contarDigitosPares(0)", contarDigitosPares(0), 1);
    probar("contarDigitosPares(-1)", contarDigitosPares(-1), false);
    //Pruebas sumaAlterna
    probar("sumaAlterna(5)", sumaAlterna(5), 3);
    probar("sumaAlterna(4)", sumaAlterna(4), -2);
    probar("sumaAlterna(0)", sumaAlterna(0), 0);
    probar("contarDigitosPares(-234)", contarDigitosPares(-234), false);
}




