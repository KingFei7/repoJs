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
prueba('dividir(3, 0)', dividir("", 3), NaN);
prueba('dividir("sdamlksdjl", "gdasjhgsdk")',dividir("sdamlksdjl", "gdasjhgsdk"), NaN);
//Pruebas de multiplicar()
prueba('multiplicar(3,2)', multiplicar(3,2), 6);
prueba('multiplicar("", 3)', multiplicar("", 3), NaN);
prueba('multiplicar("sdamlksdjl", "gdasjhgsdk")',multiplicar("sdamlksdjl", "gdasjhgsdk"), NaN);
//