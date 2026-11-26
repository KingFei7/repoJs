"use strict";


const claveNombre = "e06_nombre"
const claveTema = "e06_tema"
const claveNota = "e06_nota"


function principal() {
    document.getElementById("btnGuardar").onclick = guardar;
    document.getElementById("btnRecuperar").onclick = recuperar;
    document.getElementById("btnBorrar").onclick = borrar;
}

function cambiarTema(tema) {
    if (tema === "clear") {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "#000000"
        return;
    }
    if (tema === "black") {
        document.body.style.backgroundColor = "#000000"
        document.body.style.color = "#ffffff"
    }
}

function guardar() {
    let user = document.getElementById("nombreUsuario").value.trim();
    let tema = document.getElementById("temas").value;
    if (user === "", user === null) {
        document.getElementById("estado").textContent = "Nombre de usuario vacío" 
    }
    localStorage.setItem(claveNombre, user);
    localStorage.setItem(claveNota, tema);
    cambiarTema(tema);
    document.getElementById("estado").textContent = "Nombre: + " +user + "y tema: " +  "guardados"
}

function recuperar () {

}

function borrar() {

}

window.onload = principal;