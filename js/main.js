// ENTRADA DE DATOS
let nombrePersona = prompt("Ingrese su Nombre: (ESC para salir)");

while (nombrePersona != "ESC") {
    let montoCalcular = parseInt(prompt("Ingrese monto para calcular cuotas a pagar:"));
    let numeroCuotas = "Ingrese cantidad de cuotas a calcular:\n\n";
    numeroCuotas += "3 cuotas\n";
    numeroCuotas += "6 cuotas\n";
    numeroCuotas += "9 cuotas\n";
    numeroCuotas += "12 cuotas\n";
    numeroCuotas += "24 cuotas\n";
    numeroCuotas += "36 cuotas";
    let cuotas = parseInt(prompt(numeroCuotas));

// PROCESAMIENTO DE DATOS
    let cuotaPagar = calcularCuota(montoCalcular, cuotas);

// SALIDA DE DATOS
    informarCalculo(nombrePersona, montoCalcular, cuotas, cuotaPagar);
    nombrePersona = prompt("Ingrese otro Nombre: (ESC para salir)");
}

function calcularCuota(montoCalcular, cuotas) {
    return montoCalcular / cuotas;
}

function informarCalculo(nombrePersona, montoCalcular, cuotas, cuota) {
    let numeroCuotas;

    if (cuotas == 3) {
        numeroCuotas = 3;
    } else if (cuotas == 6) {
        numeroCuotas = 6;
    } else if (cuotas == 9) {
        numeroCuotas = 9;
    } else if (cuotas == 12) {
        numeroCuotas = 12;
    } else if (cuotas == 24) {
        numeroCuotas = 24;
    } else {
        numeroCuotas = 36;
    }

    alert("Cliente: " + nombrePersona + "\nMonto: $" + montoCalcular + "\nCuotas: " + cuotas + " cuotas\nCuota a Pagar: $" + cuota + " pesos");
}