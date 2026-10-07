

// EJERCICIO 1: LABORATORIO DE CONVERSIONES

function ejecutarEj1() {
    console.log("--- Laboratorio de Conversiones ---");
    console.log('"5" + 2:', "5" + 2, typeof ("5" + 2)); //52
    console.log('"5" - 2:', "5" - 2, typeof ("5" - 2)); //3
    console.log('Number("12.5"):', Number("12.5"), typeof Number("12.5")); //12.5 
    console.log('Number(""):', Number(""), typeof Number("")); //0
    console.log('Number("abc"):', Number("abc"), typeof Number("abc")); //NaN
    console.log('String(42):', String(42), typeof String(42)); //"42"
    console.log('Boolean(0):', Boolean(0), typeof Boolean(0)); // false
    console.log('Boolean("false"):', Boolean("false"), typeof Boolean("false")); //True

    document.getElementById("salidaEj1").textContent = "Resultados mostrados en la Consola (F12).";
}



// EJERCICIO 2: ENTRADA NUMÉRICA SEGURA

function ejecutarEj2() {
    const rawValue = document.getElementById("inputSeguro").value;
    const salida = document.getElementById("salidaSegura");

    const trimmedValue = rawValue.trim();

    if (trimmedValue === "") {
        salida.textContent = "Error: El campo está vacío.";
        return;
    }

    const numero = Number(trimmedValue);


    if (Number.isNaN(numero)) {
        salida.textContent = "Error: La entrada no es un número válido.";
    } else {
        salida.textContent = `Éxito! Número válido: ${numero}`;
    }
}



// EJERCICIO 3: CONVERSOR DE TEMPERATURA

function ejecutarEj3() {
    const rawValue = document.getElementById("inputTemp").value;
    const salida = document.getElementById("salidaTemp");

    const trimmedValue = rawValue.trim();

    // 1. Comprobación de cadena vacía antes de convertir
    if (trimmedValue === "") {
        console.error("Ejercicio 3 [Vacío] -> Error: El campo de temperatura está vacío.");
        return;
    }

    const celsius = Number(trimmedValue);

    // 2. Comprobación de conversión no válida con Number.isNaN()
    if (Number.isNaN(celsius)) {
        console.error(`Ejercicio 3 [${trimmedValue}] -> Error: No se puede convertir a número.`);
    } else {
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`Ejercicio 3 [Resultado] -> ${celsius} °C equivalen a ${fahrenheit} °F`);
    }
}





function ejecutarEj4() {
    const rawVal1 = document.getElementById("num1").value.trim();
    const rawVal2 = document.getElementById("num2").value.trim();
    
    // Seleccionamos los dos contenedores de salida para no usar innerHTML
    const salida1 = document.getElementById("salidaSuma1");
    const salida2 = document.getElementById("salidaSuma2");


    // 1. Validar si alguno de los campos está vacío
    if (trimmed1 === "" || trimmed2 === "") {
        console.error("Ejercicio 4 - Error: Uno o ambos campos están vacíos.");
        return;
    }

    const num1 = Number(trimmed1);
    const num2 = Number(trimmed2);


    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.error(`Ejercicio 4 - Error: Entrada no numérica detectada ('${rawVal1}', '${rawVal2}').`);
        return;
    }

    const sumaSinConvertir = trimmed1 + trimmed2; 
    const sumaConvertida = num1 + num2;

    console.log(`Sin convertir (${trimmed1} + ${trimmed2}):`, sumaSinConvertir, typeof sumaSinConvertir);
    console.log(`Convertido (Number(${trimmed1}) + Number(${trimmed2})):`, sumaConvertida, typeof sumaConvertida);

}


