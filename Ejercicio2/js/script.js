"use strict";

"use strict";

window.onload = principal;

function principal() {
    document.getElementById("ej1").onclick = ej1;
    document.getElementById("ej2").onclick = ej2;
    /* document.getElementById("ej3").onclick = ej3;
    document.getElementById("ej4").onclick = ej4; */
}

function ej1() {
    const nombre = "Juan";
    const anion = 2003;
    let edad = 2026 - 2003;
    console.log("El nombre es: ", nombre , ". La constante del nombre es tipo: ", typeof nombre );
    console.log("Nació en el: ", anion , ". El año es una contante tipo: ", typeof anion);
    console.log("Por lo tanto tiene: ", edad , ". La edad es una variable tipo: ", typeof edad);
    console.log("Le voy a dar un año más a Juan")
    edad += 1;
    console.log("Ahora, Juan tiene un año más (", edad,") y la variable sigue siendo tipo: ", typeof edad)
    let mayorDeEdad = false;
    if (edad > 18) {
        mayorDeEdad = true;
    }
    console.log("Juan es mayor de edad: " , mayorDeEdad, " mayorDeEdad es una variable tipo: ", typeof mayorDeEdad)
}

function ej2() {
    const ejNull = null;
    let ejUnD;
    console.log("Este es el valor de una constante con null: ",ejNull, " y es tipo: " , typeof ejNull);
    console.log("Este es el valor de la variable sin definir: ",ejUnD, " y es tipo ", typeof ejUnD);
}

function ej3() {
    const PI = 3.1416
    const radio = 17
    const area = PI * radio * radio;

    console.log("El area de un círculo de radio: ", radio, " es:", area);
    try {
        PI = 1
    } catch (error) {
        console.log("No se puede cambiar PI porque es una constante");
    }
}

function ej4() {

}