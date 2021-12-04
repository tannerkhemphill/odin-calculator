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
}

function operate(operator, num1, num2) {
    if (operator === add) {
        return add(num1, num2);
    }
    else if (operator === subtract) {
        return subtract(num1, num2);
    }
    else if (operator === multiply) {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
};

let display = document.getElementById('display');
let firstValue = null;
let operator = null;

function numDisplay(num) {
    if (parseInt(display.textContent) === 0) {
        display.textContent = num;
    }
    else {
        if (display.textContent.length < 9) {
            display.textContent += num;
        }
    }
};

function operatorDisplay() {
    if (firstValue !== null) {
        firstValue = operate(operator, firstValue, num);
        display.textContent = firstValue;
    }
};

numDisplay(999999999);