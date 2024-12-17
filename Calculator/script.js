import { calculation } from "./calculator_functions.js";

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

let zeroButton = document.getElementById("0");
zeroButton.addEventListener("click", () => {
  if (input.value !== "") input.value = zeroButton.textContent;
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
  if (input.value !== "") {
    let secondNum = parseFloat(input.value);
    calculation(firstNum,secondNum,operation);
  }
});

