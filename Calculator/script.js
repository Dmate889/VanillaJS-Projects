let input = document.getElementById("input");

let firstNum = null;
let operation = null;

//Putting numbers into the input field
let buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (input.value !== "") input.value = button.textContent;
  });
});

//Clearing input
let clear = document.getElementById("C");
clear.addEventListener("click", () => {
  if (input.value !== "") input.value = "0";
});

//On-Off
let onOff = document.getElementById("on_off");
onOff.addEventListener("click", () => {
  input.value = input.value === "" ? "0" : "";
});

//Operations
let operations = document.querySelectorAll(".operator");
operations.forEach((op) => {
  op.addEventListener("click", () => {
    firstNum = parseFloat(input.value);
    operation = op.textContent;
  });
});

//Result
let equals = document.getElementById("=");
equals.addEventListener("click", () => {
  let secondNum = parseFloat(input.value);
  let result;

  switch (operation) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    case "/":
      result = divide(firstNum, secondNum);
      break;
    default:
      result = "Error";
  }

  input.value = result;
  firstNum = null;
  secondNum = null;
});

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
  return a / b;
}
