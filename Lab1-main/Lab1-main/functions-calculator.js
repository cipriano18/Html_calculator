function performCalculation(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error";
        default: return "Error";
    }
}
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(numerador, denominador) {
    let divisor = gcd(numerador, denominador);
    return { num: numerador / divisor, den: denominador / divisor };
}

function fracion(num1, den1, num2, den2, operator) {
    if (den1 === 0 || den2 === 0) return "Error"; 

    let result = { num: 0, den: 1 };

    switch (operator) {
        case "+":
            result.num = num1 * den2 + num2 * den1;
            result.den = den1 * den2;
            break;
        case "-":
            result.num = num1 * den2 - num2 * den1;
            result.den = den1 * den2;
            break;
        case "*":
            result.num = num1 * num2;
            result.den = den1 * den2;
            break;
        case "/":
            if (num2 === 0) return "Error"; 
            result.num = num1 * den2;
            result.den = den1 * num2;
            break;
        default:
            return "Error";
    }

    return simplifyFraction(result.num, result.den);
}
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function convertLength(value, fromUnit, toUnit) {
    const lengthUnits = {
        'meters': 1,
        'kilometers': 1000,
        'centimeters': 0.01,
        'millimeters': 0.001,
        'feet': 0.3048
    };
    if (!lengthUnits[fromUnit] || !lengthUnits[toUnit]) {
        return "Unidad no válida";
    }
    let valueInMeters = value * lengthUnits[fromUnit];
    return valueInMeters / lengthUnits[toUnit];
}
function convertMass(value, fromUnit, toUnit) {
    const massUnits = {
        'grams': 1,
        'kilograms': 1000,
        'pounds': 453.592,
        'tons': 1000000
    };

    if (!massUnits[fromUnit] || !massUnits[toUnit]) {
        return "Unidad no válida";
    }

    let valueInGrams = value * massUnits[fromUnit];
    return valueInGrams / massUnits[toUnit];
}
function convertVolume(value, fromUnit, toUnit) {
    const volumeUnits = {
        'liters': 1,
        'milliliters': 1000,
        'cubic_meters': 0.001,
        'gallons': 0.264172
    };

    if (!volumeUnits[fromUnit] || !volumeUnits[toUnit]) {
        return "Unidad no válida";
    }

    let valueInLiters = value * volumeUnits[fromUnit];
    return valueInLiters / volumeUnits[toUnit];
}
function convertTemperature(value, fromUnit, toUnit) {
    let result;
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (value * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = value + 273.15; 
        } else {
            result = value; 
        }
    }
    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (value - 32) * 5/9; 
        } else if (toUnit === "kelvin") {
            result = (value - 32) * 5/9 + 273.15; 
        } else {
            result = value; 
        }
    }
    else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = value - 273.15; 
        } else if (toUnit === "fahrenheit") {
            result = (value - 273.15) * 9/5 + 32; 
        } else {
            result = value; 
        }
    }
    return result;
}
function calcularInteresCompuesto(capitalInicial, tasaInteres, anios) {
    return capitalInicial * Math.pow(1 + (tasaInteres / 100), anios);
  
}

function calcularImpuesto(montoBase, tasaImpuesto) {
    return montoBase - (montoBase * (tasaImpuesto / 100));
}
function calcularSalarioNeto(salarioBruto, deducciones) {
    return salarioBruto - (salarioBruto * (deducciones / 100));
}
function calcularHidratacion(peso) {
    return peso * 35; 
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classifyBMI(bmi) {
    if (bmi < 16) return "Delgadez severa";
    if (bmi >= 16 && bmi < 17) return "Delgadez moderada";
    if (bmi >= 17 && bmi < 18.5) return "Delgadez leve";
    if (bmi >= 18.5 && bmi < 25) return "Peso normal";
    if (bmi >= 25 && bmi < 30) return "Sobrepeso";
    if (bmi >= 30 && bmi < 35) return "Obesidad grado 1";
    if (bmi >= 35 && bmi < 40) return "Obesidad grado 2";
    return "Obesidad grado 3 (mórbida)";
}

function calcularRitmoCardiaco(edad) {
    let maxHeartRate = 220 - edad;
    let lowerBound = maxHeartRate * 0.5; 
    let upperBound = maxHeartRate * 0.85; 
    return { lowerBound, upperBound };
}
function calcularNuevaFecha(fechaInicial, dias) {
    let fecha = new Date(fechaInicial);
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toISOString().split("T")[0]; 
}
function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}
function calcularConsumoCombustible(distancia, combustible) {
    return distancia / combustible;
}
