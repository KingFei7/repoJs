"use strict";

window.onload = principal;


function principal() {
    
    const texto = document.getElementById("texto1").value;
    const salida = document.getElementById("salida");
    document.getElementById("analizar").onclick = analizar;
    document.getElementById("buscar").onclick = buscar;
    document.getElementById("transformar").onclick = transformar;
    document.getElementById("remplazar").onclick = remplazar;
    document.getElementById("contar").onclick = function() {
        const textoVal = document.getElementById("texto1").value;
        const charVal = document.getElementById("texto2").value;
        contarOcurrencias(textoVal, charVal);
    }; //Si pusieramos directamente contarOcurrencias con el valor, la función no se ejecutaría correctamente. Necesitamos ponerlo así para introducir los argumentos de forma correcta
    document.getElementById("palindromo").onclick = function() {
        const textoVal = document.getElementById("texto1").value;
        esPalindromo(textoVal);
    };
}

function analizar() {
    const texto = document.getElementById("texto1").value;
    //En caso de que no haya nada escrito, la función no se ejecuta
    if (texto === null || texto.trim() === "") {
        salida.textContent =
        "Escribe algo en la primera caja de texto" 
        return
    }  

    salida.textContent +=
        "Has escrito: " + texto + "\n" + 
        "Longitud original: " + texto.length + "\n" + 
        "Texto sin espacios: " + texto.trim() + "\n" + 
        "Longitud del texto sin espacios: " + texto.trim().length + "\n" +
        "Texto en mayusculas: " + texto.toUpperCase() + "\n" + 
        "Texto en minusculas: " + texto.toLowerCase() + "\n";
}

function buscar(){
    const texto = document.getElementById("texto1").value;
    const aBuscar = document.getElementById("texto2").value;

    //En caso de que no haya nada escrito, la función no se ejecuta
    if (texto === null || texto.trim() === "" || aBuscar === null || aBuscar.trim() === "" ) {
        salida.textContent =
        "Escribe algo en la primera y en la segunda caja de texto" 
        return
    }  

    const seIncluye = texto.includes(aBuscar); 

    //Para comprobar si el texto contiene los caracteres que buscamos he decidido utilizar un includes en vez de un indexOf porque devuelve un booleano y no un -1 que me parece menos acertado
    if (!seIncluye){
        salida.textContent =
        "El segundo campo de texto no se encuentra en el primero" 
        return
    }

    const primeraPos = texto.indexOf(aBuscar);
    const ultimaPos = texto.lastIndexOf(aBuscar);
    salida.textContent +=
    "\n" + "\n" +
    "El texto original es: " + texto + "\n" +
    "La cadena a buscar es: " + aBuscar + "\n" +
    "Podemos encontrar por primera vez la cadena en: " + primeraPos + "\n" +
    "Podemos encontrar por última vez la cadena en: " + ultimaPos;
}

function transformar(){
    const texto = document.getElementById("texto1").value;
    if (document.getElementById("pos0").trim == "" || document.getElementById("posF").trim){
        salida.textContent =
        "Escribe algo en las cajas de texto de posiciones" 
        return
    }
    const primeraPos = Number(document.getElementById("pos0").value);
    const ultimaPos = Number(document.getElementById("posF").value);

    if (texto === null || texto.trim() === "") {
        salida.textContent =
        "Escribe algo en la primera caja de texto" 
        return
    }  

    if (Number.isNaN(primeraPos) || Number.isNaN(ultimaPos)){
        salida.textContent =
        "Escribe números en las cajas de texto de posiciones" 
        return;
    }

    if (!esPositivo(primeraPos) || !esPositivo(ultimaPos)) {
        salida.textContent =
        "Escribe números positivos en las cajas de texto de posiciones" 
        return;
    }

    const Slice = texto.slice(primeraPos, ultimaPos) //La diferencia entre slice y substring es que slice corta exactamente entre los indices que le digas
    const Substring = texto.substring(primeraPos, ultimaPos) //Mientras que substring, añade incluyendo el indice inicial, tantos caracteres como le pongas en la segunda opción
    
    salida.textContent += "Has introducido este texto: " + texto + "\n"
    + "Has seleccionado los siguientes indices: " + primeraPos + " y " + ultimaPos + "\n" 
    + "En Slice provoca este resultado: " + Slice + "\n" 
    + "En Substring provoca este cambio: " + Substring; 
}

function remplazar() {
    const texto = document.getElementById("texto1").value;
    const count = 0;
    if (texto.toUpperCase().indexOf("A") == -1) {
        salida.textContent += 
        "Tu texto no tiene As";
    } else {
        salida.textContent += "Tu texto: " + texto + "\n" +
        "Texto cambiado: " + texto.replaceAll("(?i)a", 4);
    }
}

function contarOcurrencias(texto, caracter) {
    const salida = document.getElementById("salida");
    let count = 0;
    if (caracter.length != 1) {
        salida.textContent += "\nIntroduce un único caracter";
        return;
    }

    if (texto.indexOf(caracter) == -1) {
        salida.textContent += "\nTu caracter no se encuentra en la cadena";
        return;
    }

    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == caracter) {
            count++;
        }
    }

    salida.textContent += "\nTu caracter: " + caracter + " aparece en " + texto + " " + count + " veces";

    return count;
}

function esPalindromo(texto) {
    const salida = document.getElementById("salida");
    let inicio = 0;
    const textoLimpio = texto.replaceAll(" ", "").toLowerCase();
    let final = textoLimpio.length - 1;
    for (inicio; inicio < textoLimpio.length; inicio++) {
        if (textoLimpio[inicio] != textoLimpio[final]) {
            salida.textContent += "\nLa palabra " + texto + " no es un palindromo";
            return false;
        }
        final--;
    }
    salida.textContent += "\nLa palabra " + texto + " es un palindromo"
    return true;
}