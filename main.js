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

// for(let i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function() {
// 		let input = document.querySelector('input');
// 		let inputVal = input.innerHTML;
// 		let buttonVal = this.innerHTML;
//     if(buttonVal === 'C') {
// 			input.innerHTML = '';
// 			decimalAdded = false;
// 		} else if(buttonVal === '=') {
//       let equation = inputVal;
//       let lastChar = equation[equation.length - 1];
//       decimalAdded = false;
//     }
//   };
