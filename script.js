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
let lastOperatorButton = null;

function allClear() {
    display.textContent = 0;
    previousValue = 0;
    previousOperator = '';
    operatorPressed = false;
    hasDecimal = false;
    if (lastOperatorButton !== null) {
        lastOperatorButton.style.backgroundColor = 'orange';
        lastOperatorButton.style.color = 'white';
    }
    lastOperatorButton = null;
}

function numDisplay(num) {
    if ((operatorPressed || display.textContent === '0' || display.textContent === '-0') && !hasDecimal) {
        if (display.textContent === "-0") {
            display.textContent = negative(num);
        }
        else {
            display.textContent = num; 
        }
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
        displayValue = operate(previousOperator, previousValue, parseFloat(display.textContent));
        if (displayValue.toString().length > 10) {
            displayValue = displayValue.toString().substring(0, 10);
        }
        displayValue = displayValue.toString();
        display.textContent = displayValue;
        previousValue = parseFloat(display.textContent);
        previousOperator = operator;
    }
    else {
        previousValue = parseFloat(display.textContent);
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
};

function percentDisplay() {
    display.textContent = percent(parseInt(display.textContent));
    hasDecimal = true;
};

function negativeDisplay() {
    if (operatorPressed || display.textContent === '0') {
        display.textContent = '-0';
    }
    else {
        display.textContent = negative(parseInt(display.textContent)); 
    }
};

function flash(obj) {
    let bgColor = obj.style.backgroundColor;
    obj.style.backgroundColor = 'darkgray';
    setTimeout(function(){
         obj.style.backgroundColor = bgColor;
    }, 100);
};

function highlight(obj) {
    obj.style.backgroundColor = 'white';
    obj.style.color = 'orange';
    if (lastOperatorButton !== null) {
        lastOperatorButton.style.backgroundColor = 'orange';
        lastOperatorButton.style.color = 'white';
    }
    lastOperatorButton = obj;
};

document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", () => flash(number))
);

document.querySelectorAll(".symbol").forEach(symbol => 
    symbol.addEventListener("click", () => flash(symbol))
);

document.querySelectorAll(".operator").forEach(operator => 
    operator.addEventListener("click", () => highlight(operator))
);
