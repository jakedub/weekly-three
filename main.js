// let keys = querySelectorAll (".keys");
// let operators = ["+", "-", "/", "x"];
// let decimalAdded = false;

let number = document.getElementsByClassName("number");
let operate = document.getElementsByClassName("operate");
// let entry = document.getElementById("entryText");
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

let input = document.querySelector('input');
document.querySelectorAll('.number').forEach(function (button, index) {
  button.addEventListener('click', function () {
    input.value += index + 1;
  });
});

// for(let i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function() {
// 		let input = document.querySelector('entry');
// 		let inputVal = entry.innerHTML;
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


// let input = document.querySelector('input');
// document.querySelectorAll('.number').forEach(function (button, item) {
//   button.addEventListener('click', function () {
//     input.value = item; //showing numbers in different order
//   });
// });
//
//
// let entry = document.querySelector('input');
// document.querySelectorAll('.operate').forEach(function (button, index) {
//   button.addEventListener('click', function () {
//     entry.value += index + 1; //goes one through five
//   });
// });
