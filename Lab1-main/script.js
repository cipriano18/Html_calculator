document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    function updateDisplay(value) {
        display.value = value;
    }

    window.appendNumber = function (number) {
        currentInput += number;
        updateDisplay(currentInput);
    };

    window.setOperation = function (op) {
        if (currentInput === "") return;
        if (previousInput !== "") calculate();

        operator = op;
        previousInput = currentInput;
        currentInput = "";
    };

    window.calculate = function () {
        if (previousInput === "" || currentInput === "") return;
        let result = performCalculation(previousInput, currentInput, operator);
        updateDisplay(result);
        currentInput = result;
        previousInput = "";
        operator = "";
    };

    window.clearDisplay = function () {
        currentInput = "";
        previousInput = "";
        operator = "";
        updateDisplay("");
    };
});

function checkPrime() {
    let input = document.getElementById("primeValue").value;
    let resultElement = document.getElementById("primeResult");

    if (input === "" || isNaN(input)) {
        resultElement.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    let number = parseInt(input);
    resultElement.textContent = number + (isPrime(number) ? " es un número primo." : " no es un número primo.");
}
document.addEventListener("DOMContentLoaded", function () {
    function calculateFraction() {
        let num1 = parseInt(document.getElementById("num1").value);
        let den1 = parseInt(document.getElementById("den1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let den2 = parseInt(document.getElementById("den2").value);
        let operation = document.getElementById("operation").value;
        let resultElement = document.getElementById("fractionResult");

        let operatorMap = {
            "add": "+",
            "subtract": "-",
            "multiply": "*",
            "divide": "/"
        };
        let operator = operatorMap[operation];

        let result = fracion(num1, den1, num2, den2, operator);

        if (result === "Error") {
            resultElement.textContent = "Error: Operación no válida.";
        } else {
            resultElement.textContent = `Resultado: ${result.num}/${result.den}`;
        }
    }
    window.calculateFraction = calculateFraction;
}); 
function handleConvertLength() {
    let value = parseFloat(document.getElementById("value").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    if (isNaN(value)) {
        resultElement.textContent = "Por favor ingresa un valor numérico válido.";
        return;
    }
    let convertedValue = convertLength(value, fromUnit, toUnit);
    resultElement.textContent = `Resultado: ${convertedValue.toFixed(4)} ${toUnit}`;
}
function handleConvertMass() {
    let value = parseFloat(document.getElementById("massValue").value);
    let fromUnit = document.getElementById("fromMassUnit").value;
    let toUnit = document.getElementById("toMassUnit").value;
    let resultElement = document.getElementById("massResult");

    if (isNaN(value)) {
        resultElement.textContent = "Por favor ingresa un valor numérico válido.";
        return;
    }

    let convertedValue = convertMass(value, fromUnit, toUnit);
    resultElement.textContent = `Resultado: ${convertedValue.toFixed(4)} ${toUnit}`;
}
function handleConvertVolume() {
    let value = parseFloat(document.getElementById("volumeValue").value);
    let fromUnit = document.getElementById("fromVolumeUnit").value;
    let toUnit = document.getElementById("toVolumeUnit").value;
    let resultElement = document.getElementById("volumeResult");

    if (isNaN(value)) {
        resultElement.textContent = "Por favor ingresa un valor numérico válido.";
        return;
    }

    let convertedValue = convertVolume(value, fromUnit, toUnit);
    resultElement.textContent = `Resultado: ${convertedValue.toFixed(4)} ${toUnit}`;
}
function handleConvertTemperature() {
    let value = parseFloat(document.getElementById("tempValue").value);
    let fromUnit = document.getElementById("fromTempUnit").value;
    let toUnit = document.getElementById("toTempUnit").value;
    let resultElement = document.getElementById("tempResult");

    if (isNaN(value)) {
        resultElement.textContent = "Por favor ingresa un valor numérico válido.";
        return;
    }

    let convertedValue = convertTemperature(value, fromUnit, toUnit);
    resultElement.textContent = `Resultado: ${convertedValue.toFixed(4)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
function calculateNetSalary() {
    let grossSalary = parseFloat(document.getElementById("grossSalary").value);
    let deductions = parseFloat(document.getElementById("deductions").value);

    if (isNaN(grossSalary) || isNaN(deductions) || grossSalary <= 0 || deductions < 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    let netSalary = calcularSalarioNeto(grossSalary,deductions);
    document.getElementById("netSalaryResult").textContent = "Salario Neto: $" + netSalary.toFixed(2);
}
function calculateTax(){
    let salary = parseFloat(document.getElementById("preTaxAmount").value);
    let impuesto= parseFloat(document.getElementById("placeholder").value);
    let montoImpuesto=calcularImpuesto(salary,impuesto);
    document.getElementById("taxResult").textContent="Monto con impuesto :$ "+ montoImpuesto.toFixed(2);
}
function calculateTax() {
    let preTaxAmount = parseFloat(document.getElementById("preTaxAmount").value);
    let taxRate = parseFloat(document.getElementById("taxRate").value);

    if (isNaN(preTaxAmount) || isNaN(taxRate) || preTaxAmount <= 0 || taxRate < 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let montoImpuesto = calcularImpuesto(preTaxAmount, taxRate);
    document.getElementById("taxResult").textContent = "Monto con impuesto: $" + montoImpuesto.toFixed(2);
}
function calculateCompoundInterest() {
    let initialCapital = parseFloat(document.getElementById("initialCapital").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseInt(document.getElementById("years").value);

    if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(years) || initialCapital <= 0 || interestRate < 0 || years <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    let finalAmount = calcularInteresCompuesto(initialCapital, interestRate, years);

    document.getElementById("compoundInterestResult").textContent = "Resultado: $" + finalAmount.toFixed(2);
}
function calculateHydration() {
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(weight) || weight <= 0) {
        alert("Por favor, ingrese un peso válido.");
        return;
    }
    let waterIntake = calcularHidratacion(weight);
    document.getElementById("hydrationResult").textContent = `Requerimiento diario: ${waterIntake.toFixed(0)} ml`;
}

function calculateBMI() {
    let weight = parseFloat(document.getElementById("bmiWeight").value);
    let height = parseFloat(document.getElementById("bmiHeight").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let bmi = calcularIMC(weight, height);
    
    let category = classifyBMI(bmi);

    document.getElementById("bmiResult").textContent = `IMC: ${bmi.toFixed(2)} - ${category}`;
}

function calculateHeartRate() {
    let age = parseInt(document.getElementById("age").value);

    if (isNaN(age) || age <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }
    let { lowerBound, upperBound } = calcularRitmoCardiaco(age);
    document.getElementById("heartRateResult").textContent = `Rango ideal: ${lowerBound.toFixed(0)} - ${upperBound.toFixed(0)} latidos/min`;
}
function calculateAge() {
    let birthDate = document.getElementById("birthDate").value;

    if (!birthDate) {
        alert("Por favor, ingrese una fecha de nacimiento válida.");
        return;
    }

    let age = calcularEdad(birthDate);
    document.getElementById("ageResult").textContent = `Edad: ${age} años`;
}
function calculateDate() {
    let startDate = document.getElementById("startDate").value;
    let daysToAdd = parseInt(document.getElementById("daysToAdd").value);

    if (!startDate || isNaN(daysToAdd)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let resultDate = calcularNuevaFecha(startDate, daysToAdd);
    document.getElementById("dateResult").textContent = `Resultado: ${resultDate}`;
}

function calculateFuelConsumption() {
    let distance = parseFloat(document.getElementById("distance").value);
    let fuelUsed = parseFloat(document.getElementById("fuelUsed").value);

    if (isNaN(distance) || isNaN(fuelUsed) || distance <= 0 || fuelUsed <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let consumption = calcularConsumoCombustible(distance, fuelUsed);
    document.getElementById("fuelResult").textContent = `Consumo: ${consumption.toFixed(2)} km/L`;
}