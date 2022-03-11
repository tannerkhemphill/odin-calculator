// Function to add two numbers together
function add(num1, num2) {
    return num1 + num2;
};
// Function to subtract one number from another
function subtract(num1, num2) {
    return num1 - num2;
};
// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
};
// Function to divide one number by another
function divide(num1, num2) {
    return num1 / num2;
};
// Function to make a number negative
function negative(num) {
    return -1 * num;
};
// Function to get the percentage value of a number
function percent(num) {
    return num / 100;
};
// Function to call the given operation on two numbers
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

// Create variables used to provide calculator logic
let display = document.getElementById('display');
let displayValue = '';
let previousValue = 0;
let previousOperator = '';
let operatorPressed = false;
let hasDecimal = false;
let lastOperatorButton = null;

// Function to clear the calculator's display and all variables
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

// Function to display numbers on the calculator as the user presses keys
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

// Function to perform the desired operation logic and display the result
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

// Function to add and display decimal if selected
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

// Function to apply and display percentage if selected
function percentDisplay() {
    display.textContent = percent(parseInt(display.textContent));
    hasDecimal = true;
};

// Function to apply and display negative value if selected
function negativeDisplay() {
    if (operatorPressed || display.textContent === '0') {
        display.textContent = '-0';
    }
    else {
        display.textContent = negative(parseInt(display.textContent)); 
    }
};

// Function to flash number buttons when clicked
function flash(obj) {
    let bgColor = obj.style.backgroundColor;
    obj.style.backgroundColor = 'darkgray';
    setTimeout(function(){
         obj.style.backgroundColor = bgColor;
    }, 100);
};

// Function to highlight currently selected operator when clicked
function highlight(obj) {
    obj.style.backgroundColor = 'white';
    obj.style.color = 'orange';
    if (lastOperatorButton !== null) {
        lastOperatorButton.style.backgroundColor = 'orange';
        lastOperatorButton.style.color = 'white';
    }
    lastOperatorButton = obj;
};

// Add event listeners to each number button to flash when clicked
document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", () => flash(number))
);

// Add event listeners to each symbol button to flash when clicked
document.querySelectorAll(".symbol").forEach(symbol => 
    symbol.addEventListener("click", () => flash(symbol))
);

// Add event listeners to each operator button to highlight when clicked
document.querySelectorAll(".operator").forEach(operator => 
    operator.addEventListener("click", () => highlight(operator))
);

