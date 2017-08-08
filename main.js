// let keys = querySelectorAll (".keys");
// let operators = ["+", "-", "/", "x"];
// let decimalAdded = false;

let number = document.getElementsByClassName("number");
let operate = document.getElementsByClassName("operate");
let clear = document.getElementById("clear");
let sub=document.getElementById("sub");
let multiply = document.getElementById("mul");
let divide = document.getElementById("divide");
let add = document.getElementById("plus");
let memory = 0; //holds the previous number
let current = 0; //new number
let operation = 0; //number of the operation
let total = 0; //the total from calculation


// //Functions

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
      let inputValue = entry.querySelector("input").value;
      let buttonValue = this.textContent;
      if (buttonValue === "C") {
        entry.innerHTML = "";
      } else {
        entry.innerHTML += buttonValue;
      }
  })
}

for (let i = 0; i < operate.length; i++) {
  operate[i].addEventListener("click", function() {
      let inputValue = entry.querySelector("input").value;
      let buttonValue = this.textContent;
      if (buttonValue === "=") {
        entry.innerHTML = "";
      } else {
        entry.innerHTML += buttonValue;
      }
  })
}

//Need to check if this could work
let displayNum = "";
let storedNum = "";
let operation = 0;
let queuedOperation = 0;
let calculationFinished = false;
function clearDisplay() { //clearing
    let display = document.querySelector("input");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    display.value = displayNum;

}

function insertDecimal(dec) {
    let display = document.querySelector("input");
    for (i = 0; i < display.value.length; i++) //check to see if decimal
        if (display.value.charAt(i) == '.') {
            return; //if yes then do nothing
        }
        display.value += dec;
}

// function operation(command) {
//     let display = document.querySelector("input"); //selecting the display
//             evalDisplay = eval(displayNum), //need to check
//             evalStored = eval(storedNum); //need to check
//     if (queuedOperation == 0) { //checking for queued operation
//         storedNum = display.value;
//     }
//     else if (queuedOperation == 1) {
//         storedNum = evalStored + evalDisplay;
//     }
//     else if (queuedOperation == 2) {
//         storedNum = evalStored - evalDisplay;
//     }
//     else if (queuedOperation == 3) {
//         storedNum = evalStored * evalDisplay;
//     }
//     if (command == 'add') {
//         operation = 1;
//     }
//     else if (command == 'subtract') {
//         operation = 2;
//     }
//     if (command == 'multiply') {
//         operation = 3;
//     }
//     queuedOperation = operation;
//     display.value = '';
// }
//
// function calculate() {
//     let display = document.querySelector("input");
//             displayNum = display.value;
//     var evalDisplay = eval(displayNum),
//             evalStored = eval(storedNum);
//     if (operation == 1) {
//         displayNum = evalStored + evalDisplay;
//     }
//     else if (operation == 2) {
//         displayNum = evalStored - evalDisplay;
//     }
//     else if (operation == 3) {
//         displayNum = evalStored * evalDisplay;
//     }
//     display.value = displayNum;
//     if (operation != 0)
//         calculationFinished = true;
//
//     operation = 0;
//     queuedOperation = 0;
//     displayNum = "";
//     storedNum = "";
// }
