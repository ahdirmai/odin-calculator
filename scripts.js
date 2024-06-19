function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero");
    return null;
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function clear() {
  displayValue = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay();
}

function allClear() {
  displayValue = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay();
}

function updateDisplay() {
  const floatNumber = parseFloat(displayValue);
  // Check if the number is an integer and if it's greater than 999 which usually requires a separator
  if (Number.isInteger(floatNumber) && floatNumber > 999) {
    display.value = floatNumber.toLocaleString("en-US");
  } else {
    display.value = displayValue;
  }
}

function handleNumberClick(e) {
  if (displayValue === "0" || operatorClicked) {
    displayValue = e.target.textContent;
    operatorClicked = false;
  } else {
    displayValue += e.target.textContent;
  }
  updateDisplay();
}

function handleOperatorClick(e) {
  if (firstNumber === "") {
    firstNumber = displayValue;
  } else if (operator) {
    secondNumber = displayValue;
    const result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    if (result !== null) {
      firstNumber = String(result);
      displayValue = firstNumber;
    } else {
      displayValue = firstNumber;
    }
  }
  operator = e.target.textContent;
  operatorClicked = true;
  updateDisplay();
}

function handleEqualsClick() {
  if (firstNumber !== "" && operator !== "") {
    secondNumber = displayValue;
    const result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    if (result !== null) {
      displayValue = String(result);
    } else {
      displayValue = firstNumber;
    }
    firstNumber = "";
    operator = "";
    updateDisplay();
  }
}

function handleClearClick() {
  clear();
}

function handleAllClearClick() {
  allClear();
}

function handlePercentageClick() {
  displayValue = String(parseFloat(displayValue) / 100);
  updateDisplay();
}

function handleNegateClick() {
  displayValue = String(parseFloat(displayValue) * -1);
  updateDisplay();
}

function handleDecimalClick() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}

const display = document.querySelector(".calculator-display-screen");
const numberButtons = document.querySelectorAll(".key.number");
const operatorButtons = document.querySelectorAll(".key.operator");
const equalsButton = document.querySelector(".key.equals");
const clearButton = document.querySelector(".key.clear");
const allClearButton = document.querySelector(".key.all-clear");
const percentageButton = document.querySelector(".key.percentage");
const negateButton = document.querySelector(".key.negate");
const decimalButton = document.querySelector("#decimal");

let displayValue = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let operatorClicked = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

equalsButton.addEventListener("click", handleEqualsClick);
clearButton.addEventListener("click", handleClearClick);
allClearButton.addEventListener("click", handleAllClearClick);
percentageButton.addEventListener("click", handlePercentageClick);
negateButton.addEventListener("click", handleNegateClick);
decimalButton.addEventListener("click", handleDecimalClick);
