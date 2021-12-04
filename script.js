function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function negative(num) {
    return -1 * num;
};

function percent(num) {
    return num / 100;
};

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
};

let display = document.getElementById('display');
let displayValue = '';
let previousValue = 0;
let previousOperator = '';
let operatorPressed = false;
let hasDecimal = false;

function allClear() {
    display.textContent = 0;
    previousValue = 0;
    previousOperator = '';
    operatorPressed = false;
    hasDecimal = false;
}

function numDisplay(num) {
    if ((operatorPressed || display.textContent === '0') && !hasDecimal) {
        display.textContent = num;
        operatorPressed = false;
    }
    else {
        if (display.textContent.length < 10) {
            display.textContent += num;
        }
    }
};

function operatorDisplay(operator) {
    if (previousOperator !== '' && previousOperator !== '=') {
        displayValue = operate(previousOperator, previousValue, parseInt(display.textContent));
        if (displayValue.toString().length > 10) {
            displayValue = displayValue.toString().substring(0, 10);
        }
        display.textContent = displayValue;
        previousValue = parseInt(displayValue);
        previousOperator = operator;
    }
    else {
        previousValue = parseInt(display.textContent);
        previousOperator = operator;
    }
    operatorPressed = true;
    hasDecimal = false;
};

function decimalDisplay() {
    if (!hasDecimal) {
        if (operatorPressed) {
            display.textContent = '0.'
        }
        else {
            display.textContent += '.';
        }
    hasDecimal = true;
    }
}
