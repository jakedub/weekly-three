// let keys = querySelectorAll (".keys");
// let operators = ["+", "-", "/", "x"];
// let decimalAdded = false;

let number = document.getElementsByClassName("number");
let operate = document.getElementsByClassName("operate");
let clear = document.getElementById("clear");
// let sub=document.getElementById("sub");
// let multiply = document.getElementById("mul");
// let divide = document.getElementById("divide");
// let add = document.getElementById("plus");
let display = document.querySelector("input");
// let plus = eval(x+y);
// let sub = eval(x-y);
// let multiply = eval(x*y);
// let divide = eval(x/y);

//Functions or For Loops

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
      let inputValue = entryText.value;
      let buttonValue = this.textContent;
        entryText.value += buttonValue;
        console.log(entryText.value);
  })
}

for (let i = 0; i < operate.length; i++) {
   operate[i].addEventListener("click", function() {
     let inputValue = entryText.value;
     let buttonValue = this.textContent;
     if (buttonValue !== "=") {
       entryText.value += buttonValue;
     }
  })
}

// function insertDecimal(dec) {
//     let display = entryText;
//     for (i = 0; i < display.value.length; i++) //check to see if decimal
//         if (display.value.charAt(i) == '.') {
//             return; //if yes then do nothing
//         }
//         display.value += dec;
// }

function total(){
  entryText.value=eval(entryText.value) || "";
}

function clearDisplay(){
  let display = document.querySelector("input");
  let buttonValue = this.textContent;
    entryText.value = " ";
}

// let displayNum = "";
// let storedNum = "";
//
// function calculate(){
//   let display = document.querySelector("input");
//     displayedNum = display.value;
//   let evalDisplay = eval(displayNum),
//     evalStored = eval(storedNum);
//   if (display.value === "x") {
//       displayNum = evalStored * evalDisplay;
//       }
// }


// Need to check if this could work
// let displayNum = "";
// let storedNum = "";
// // let operation = 0;
// let storedOperation = 0;
// let calculationFinished = false;
// function clearDisplay() { //clearing
//     let display = document.querySelector("input");
//     displayNum = "";
//     storedNum = "";
//     operation = 0;
//     storedOperation = 0;
//     display.value = displayNum;
//
// }



// function operation(command) {
//     let display = document.querySelector("input"); //selecting the display
//             evalDisplay = eval(displayNum), //need to check
//             evalStored = eval(storedNum); //need to check
//     if (storedOperation == 0) { //checking for queued operation
//         storedNum = display.value;
//     }
//     else if (storedOperation == 1) {
//         storedNum = evalStored + evalDisplay;
//     }
//     else if (storedOperation == 2) {
//         storedNum = evalStored - evalDisplay;
//     }
//     else if (storedOperation == 3) {
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
//     storedOperation = operation;
//     display.value = '';
// }
//
// function calculate() {
//     let display = document.querySelector("input");
//       displayNum = display.value;
//     let evalDisplay = eval(displayNum),
//         evalStored = eval(storedNum);
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
// }
