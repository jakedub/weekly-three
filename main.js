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


let input = document.querySelector('input');
document.querySelectorAll('.number').forEach(function (button, index) {
  button.addEventListener('click', function () {
    input.value += index + 1; //showing numbers in different order
  });
});


let entry = document.querySelector('input');
document.querySelectorAll('.operate').forEach(function (button, index) {
  button.addEventListener('click', function () {
    entry.value += index + 1; //goes one through five
  });
});

// function memory(){
//   if (number.onclick)
//   return number.value;
// }
// function addDigits (){
//   if (memory = 0);{
//     number.value;
//     ;
//   }
// }
//
// function addition(x,y) { //needs to include a trigger for equal. Callback?
//
// }
//
// function subtraction(x,y){
//
// }
//
// function multiply(x,y){
//
// }
//
// function divide(x,y){
//
// }
//
// function dot(){
//
// }
//
// function clear() {
//   set value to 0
// }
//
// function calculate(){
//   total = memory - current //if doing subtraction
//   total = memory * current //if doing multiply
//   total = memory + current //if doing addition
//   total = memory / current //if doing divide
// }
