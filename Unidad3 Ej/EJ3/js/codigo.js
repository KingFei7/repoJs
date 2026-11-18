"use strict";

window.onload = principal;

function principal() {
    document.getElementById("consultarEntorno").onclick = consultar;
}

function consultar() {
    document.getElementById("areaVisible").textContent = "Área visible: " + 
    "\n  Ancho del área: " + window.innerWidth +
    "\n  Alto del área: " + window.innerHeight;
    document.getElementById("pantallaDisponible").textContent = "Pantalla visible: " +
    "\n  Ancho de pantalla: " + screen.availWidth +
    "\n  Alto de pantalla: " + screen.availHeight; 
    document.getElementById("URL").textContent = "URL: " +
    "\n  Url actual: " + location.href;
    document.getElementById("ubicacion").textContent = "Location: " + 
    "\n  Protocolo: " + location.protocol +
    "\n  Host: " + location.host + 
    "\n  Pathname: " + location.pathname +
    "\n  Búsqueda: " + location.search +
    "\n  Hash: " + location.hash;
    document.getElementById("navegador").textContent = "Navegador: " +
    "\n  Idioma: " + navigator.language + 
    "\n  En Linea: " + navigator.onLine; //onLine solo indica si el navegador cree que el dispositivo está conecta a la red. Si bien el false es 100% fiable, el true puede darse si esta conectado a una red local, si el servidor está caído...
}

