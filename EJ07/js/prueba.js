"use strict"

window.onload = prueba

function prueba(descripcion, obtenido, esperado) {
    let resultados = document.getElementById("resultados");
    let resultado = "";
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
//Pruebas de esNumero
prueba('esNumero(2)', esNumero(2), true);
prueba('esNumero(" ")', esNumero(" "), false);
prueba('esNumero("sad")', esNumero("sad"), false);
//Pruebas de esEntero
prueba('esEntero(3)', esEntero(3), true);
prueba('esEntero("")', esEntero(""), false);
prueba('esEntero("asdfghjk")', esEntero("asdfghjk"), false);
//Pruebas de esPositivo
prueba('esPositivo(3)', esPositivo(3), true);
prueba('esPositivo("")', esPositivo(""), false);
prueba('esPositivo("asdfghjk")', esPositivo("asdfghjk"), false);
//Pruebas de suma()
prueba('suma(2,3)', suma(2,3), 5);
prueba('suma("", 3)', suma("", 3), NaN);
prueba('suma("sdamlksdjl", "gdasjhgsdk")',suma("sdamlksdjl", "gdasjhgsdk"), NaN)
//Pruebas de resta()
prueba('resta(3,2)', resta(3,2), 1);
prueba('resta("", 3)', resta("", 3), NaN);
prueba('resta("sdamlksdjl", "gdasjhgsdk")',resta("sdamlksdjl", "gdasjhgsdk"), NaN)
//Pruebas de dividir()
prueba('dividir(3,2)', dividir(3,2), 1.5);
prueba('dividir(3, 0)', dividir(3, 0), NaN);
prueba('dividir("sdamlksdjl", "gdasjhgsdk")',dividir("sdamlksdjl", "gdasjhgsdk"), NaN);
//Pruebas de multiplicar()
prueba('multiplicar(3,2)', multiplicar(3,2), 6);
prueba('multiplicar("", 3)', multiplicar("", 3), NaN);
prueba('multiplicar("sdamlksdjl", "gdasjhgsdk")',multiplicar("sdamlksdjl", "gdasjhgsdk"), NaN);
//Prueba de factorial()
prueba('factorial(9)', factorial(9), 362880);
prueba('factorial(0)', factorial(0), 1);
prueba('factorial(-1)', factorial(-1), NaN);
//Prueba sumatorio()
prueba('sumatorio(9)', sumatorio(9), 45);
prueba('sumatorio(0)', sumatorio(0), 0);
prueba('sumatorio(-1)', sumatorio(-1), NaN);
//Prueba esRango()
prueba('enRango(9,0,10)', enRango(9,0,10), true);
prueba('enRango(0,0,10)', enRango(0,0,10), true);
prueba('enRango(-10,0,10)',enRango(-10,0,10), false);
//Prueba esDivisible()
prueba('esDivisible(9,3)', esDivisible(9,3), true)
prueba('esDivisible(9,9)', esDivisible(9,9), true)
prueba('esDivisible(9,100)', esDivisible(9,100), false)