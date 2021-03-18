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

function operate(operator, a, b) {
  console.log(`Operator: ${operator}\na: ${a}\nb: ${b}`);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      break;
  }
}

const display = document.getElementById("display");
display.textContent = "";
let operator = "";
let a = 0;
let b = 0;

function numberButtonHandler(id) {
  const display = document.getElementById("display");
  display.textContent += id;
}

function operatorButtonHandler(operation) {
  console.log(operation);
  switch (operation) {
    case "divide":
      operator = "/";
      break;
    case "multiply":
      operator = "*";
      break;
    case "add":
      operator = "+";
      break;
    case "subtract":
      operator = "-";
      break;
    default:
      break;
  }
}

document
  .querySelectorAll(".number")
  .forEach((button) =>
    button.addEventListener("click", () => numberButtonHandler(button.id))
  );

document.querySelector("#clear").addEventListener("click", () => {
  const display = document.getElementById("display");
  display.textContent = "";
  a = 0;
  b = 0;
});

document.querySelector("#point").addEventListener("click", () => {
  const display = document.getElementById("display");
  display.textContent += ".";
});

document.querySelectorAll(".operator").forEach((button) =>
  button.addEventListener("click", () => {
    operatorButtonHandler(button.id);
    a = Number(display.textContent);
    display.textContent = "";
  })
);

document.querySelector("#operate").addEventListener("click", () => {
  b = Number(display.textContent);
  display.textContent = operate(operator, a, b);
});
