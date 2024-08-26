let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        resetDisplay();
    }

    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '' && op !== '-') return;

    if (previousInput !== '') {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    shouldResetDisplay = false;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(result);
    shouldResetDisplay = true;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
    shouldResetDisplay = false;
}

function resetDisplay() {
    currentInput = '';
    shouldResetDisplay = false;
}

function updateDisplay(value) {
    display.innerText = value;
}