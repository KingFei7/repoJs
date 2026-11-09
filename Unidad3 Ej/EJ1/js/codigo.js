"use strict";

window.onload = principal;


function principal() {
    const salida = document.getElementById("salida");
    const texto = document.getElementById("texto1").value;
    
    document.getElementById("analizar").onclick = analizar;
    document.getElementById("buscar").onclick = buscar;
    document.getElementById("transformar").onclick = transformar;
}

function analizar() {
    const texto = document.getElementById("texto1").value;
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

    if (texto === null || texto.trim() === "" || aBuscar === null || aBuscar.trim() === "" ) {
        salida.textContent =
        "Escribe algo en la primera y en la segunda caja de texto" 
        return
    }  

    const seIncluye = texto.includes(aBuscar);

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