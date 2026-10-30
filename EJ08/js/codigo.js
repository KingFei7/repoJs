"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnRegistrar").onclick = registrarVentas;
    document.getElementById("btnObjetivo").onclick = objetivo;
}
let ventas = 0;
let total = 0;
let maximo = 0;
let minimo = 0;
let ventas50 = 0;
function registrarVentas() {
    let venta = 0;
    ventas = 0;
    total = 0;
    maximo = 0;
    minimo = 0;
    ventas50 = 0;
    let resumen = document.getElementById("resumenRegistro");
    venta = prompt("Introduce el valor de la venta");
    do {
        if (esPositivo(venta) && venta !== null && venta.toUpperCase().trim()!== "FIN") {
            let precio = Number(venta);
            ventas++;
            total += precio;

            if (venta > maximo) {
                maximo = precio
            }
            
            if (minimo == 0) {
                minimo = precio
            } else if (venta < minimo) {
                minimo = precio
            }
            
            if (venta > 50) {
                ventas50++;
            }
            if (venta !== null && venta.toUpperCase()!== "FIN"){
                venta = prompt("Introduce el valor de la venta");
            }
        }   else if (!esPositivo(venta) && venta !== null && venta.toUpperCase().trim()!== "FIN"){
                venta = prompt("Introduce un número mayor que 0");
        }
    } while (venta !== null && venta.toUpperCase().trim()!== "FIN");
    if (ventas >= 1) {
        resumen.textContent = "\nNúmero de ventas: " + ventas + "\nTotal de venta: " + total +
        "\nMáximo: " + maximo + " €"+ "\nMínimo: " + minimo + "€ " + "\nVentas de más de 50 euros: " + ventas50;
    }
}

function objetivo(){
    let objetivo = document.getElementById("Objetivo")
    let necesario = 0;
    if (total >= 500) {
        objetivo.textContent = "Has cumplido el objetivo";
    } else if (total%50 == 0){
        necesario = Math.trunc((500 - total)/50);
        objetivo.textContent = "Necesitas " + necesario + " billetes de 50" + "\nSerían en total: " + ((necesario * 50) + total); 
    } else {
        necesario = Math.trunc((500 - total)/50) + 1;
        objetivo.textContent = "Necesitas " + necesario + " billetes de 50" + "\nSerían en total: " + ((necesario * 50) + total); 
    }

}
