import { calculation } from "./calculator_functions.js";

let input = document.getElementById("input");
let switchButton = document.querySelector(".switchButton");

let firstNum = null;
let operation = null;

//Putting numbers into the input field
let buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (switchButton.textContent !== "Off") input.value += button.textContent;
  });
});

let zeroButton = document.getElementById("0");
zeroButton.addEventListener("click", () => {
  if (switchButton.placeholder !== "Off") input.value += zeroButton.textContent;
});

//Clearing input
let clear = document.getElementById("C");
clear.addEventListener("click", () => {
  input.value = "";
});

//On-Off
let onOff = document.getElementById("on_off");
onOff.addEventListener("click", () => {
  if(switchButton.textContent === "Off"){
    switchButton.textContent = "On"
    switchButton.classList.add("on");
    input.value = "";
  }
  else{
    switchButton.textContent = "Off"
    switchButton.classList.remove("on");
    input.value = "";
  }
});

//Operations
let operations = document.querySelectorAll(".operator");
operations.forEach((op) => {
  op.addEventListener("click", () => {
    firstNum = parseFloat(input.value);
    input.value = "";
    // input.value = op.textContent;
    operation = op.textContent;
  });
});

//Result
let equals = document.getElementById("=");
equals.addEventListener("click", () => {
  if (input.value !== "") {
    let secondNum = parseFloat(input.value);
    calculation(firstNum,secondNum,operation);
    firstNum = 0;
    secondNum = 0;
  }
});

