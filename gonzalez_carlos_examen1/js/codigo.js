"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btnInicio").onclick = apartado1;
    document.getElementById("btnBase").onclick = apartado2;
    document.getElementById("btnAmbito").onclick = apartado3;
    document.getElementById("btnValidar").onclick = apartado4;
    document.getElementById("btnPedido").onclick = apartado5;
}

function apartado1() {
    document.getElementById("salidaInicio").textContent =
    "Aplicación lista";
}

function apartado2(){
    const precioBase = document.getElementById("precioBase").value;
    const NPrecioBase = Number(precioBase)
    const unidadesBase = document.getElementById("unidadesBase").value;
    const NUnidadesBase = Number(unidadesBase);
    const Iva = 0.21;
    const subtotal = NPrecioBase * NUnidadesBase;
    const impIva = subtotal * Iva;
    const total = impIva + subtotal;
    document.getElementById("salidaBase").textContent = "precio "+ NPrecioBase + " y unidades "+ NUnidadesBase + " -> subtotal "+ subtotal+ "; IVA "+ impIva+ "; total "+ total; 
}

function apartado3(){
    const tipoCliente = document.getElementById("tipoCliente").value.trim().toUpperCase();
    let mensaje;
    if (tipoCliente == "SOCIO") {
        let detalle = "Descuento especial";
        mensaje = "SOCIO: " + detalle;
    } else {
        mensaje = "Cliente sin descuento especial";
    }

    document.getElementById("salidaAmbito").textContent = mensaje;    
}

function apartado4(){
    let precioValidar = document.getElementById("precioValidar").value.trim();
    let cantidadValidar = document.getElementById("cantidadValidar").value.trim();
    if(precioValidar == "" || cantidadValidar == "") {
        document.getElementById("salidaValidar").textContent = "Datos no validos";
        return;
    } else {
        precioValidar = Number(precioValidar);
        cantidadValidar = Number(cantidadValidar);
        if (Number.isNaN(precioValidar) || Number.isNaN(cantidadValidar)) {
            document.getElementById("salidaValidar").textContent = "Datos no validos";
            return;
        } else {
            if (precioValidar < 0 || cantidadValidar < 0 || !Number.isInteger(cantidadValidar) ) {
            document.getElementById("salidaValidar").textContent = "Datos no validos";
            return;
            } else {
                document.getElementById("salidaValidar").textContent = "Compra valida: " + cantidadValidar + " unidades a "+cantidadValidar * precioValidar + " €";
                return;
            }
        }
    }
}

function apartado5(){
    let importePedido = document.getElementById("importePedido").value.trim();
    let codigoCliente = document.getElementById("codigoCliente").value.trim().toUpperCase();
    const descuentoSocio = 0.10;
    let importeDescuento = 0;
    let envio = 0;
    let total;
    let totalTrasDescuento;

    if (importePedido == ""){
        document.getElementById("salidaPedido").textContent = "Datos no validos";
        return;
    }

    importePedido = Number(importePedido);
    
    if (Number.isNaN(importePedido) || importePedido < 0){
        document.getElementById("salidaPedido").textContent = "Datos no validos";
        return;
    }

    if (codigoCliente != "SOCIO" && codigoCliente != "NORMAL") {
        document.getElementById("salidaPedido").textContent = "Datos no validos";
        return;
    }
    
    if (codigoCliente == "SOCIO") {
        importeDescuento = descuentoSocio * importePedido;
        total = importePedido - importeDescuento;
        totalTrasDescuento = total;
    } else {
        totalTrasDescuento = importePedido;
    }

    if (importePedido < 50) {
        envio = 5;
        total = totalTrasDescuento + envio;
    } else if (codigoCliente == "NORMAL") {
        total = totalTrasDescuento
    }

    document.getElementById("salidaPedido").textContent = "Descuento: " + importeDescuento + ", importe tras descuento: " + totalTrasDescuento + ", envio: " + envio + ", total final: " + total;
}
