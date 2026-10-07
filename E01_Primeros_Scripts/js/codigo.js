// "use strict";
console.log('Pruebalol');

window.onload = principal; 

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick; //miBoton es el botón del HTML
}

function manejadorClick() {
    const texto = document.getElementById("entrada").value; //Aquí se extrae el valor de entrada, el campo editable del html
    const CARACTtexto = texto.length;

    document.getElementById("salida").textContent =
        "Has escrito: " + texto + " | tu cadena contiene se compone de " + CARACTtexto + " caracteres"; //Aquí se concatena la cadena "Has escrito: " más el texto que hayas escrito en el campo anterior y el número
        //de caracteres de la entrada de texto
}