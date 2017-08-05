let number = document.getElementsByClassName("number");
let operate = document.getElementsByClassName("operate");
let entry = document.getElementById("entry");
let clear = document.getElementById("clear");
let sub=document.getElementById("sub");
let multiply = document.getElementById("mul");
let divide = document.getElementById("divide");
let add = document.getElementById("plus");

// Add event listener to 'button'
sub.addEventListener("click", subCallBack);
multiply.addEventListener("click", mulCallBack);

function subCallBack() {
    if( sub.style.color === "red" ){
        sub.style.color = "blue";
    }else{
        sub.style.color = "red";
    }
}

function mulCallBack() {
    if( multiply.style.color === "red" ){
        multiply.style.color = "blue";
    }else{
        multiply.style.color = "red";
    }
}

document.getElementById("entry").onchange = function(){
  if( multiply.style.color === "red" ){
      multiply.style.color = "blue";
  }else{
      multiply.style.color = "red";
  }
}
//Variables
let numbers = [1,2,3,4,5,6,7,8,9,0]; //don't know if needed but reference point
let memory = 0; //holds the previous number
let current = 0; //new number
let operation = 0; //number of the operation
// let entry = document.getElementById("entry");
let total = 0; //the total from calculation
let newEntry = false;
// //Functions
//
// function addDigits (){
//   if (newEntry){
//     entry.readout.value=num;
//     newEntry = false;
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
//
// }

// document.getElementById("add").addEventListener("click", function(){
//   count.textContent = add(1,count.textContent);
// });
//
// document.getElementById("mul").addEventListener("click", function(){
//   count.textContent = mul(1,count.textContent);
// });
//
// document.getElementById("divide").addEventListener("click", function(){
//   count.textContent = divide(1,count.textContent);
// });
//
// document.getElementById("equal").addEventListener("click", function(){
//   count.textContent = equal(1,count.textContent);
// });

// function increment(x){
//   return Number(x) +1
// }
//
// function decrement(x){
//   return Number(x)-1
// }
//
//
// function run(fn) {
//   return function (x,y){
//     return fn(Number(x), Number(y));
//   }
// }
//
// const add = run (function(x,y) {
//   return x+y
// });
// const sub = run (function(x,y) {
//   return x-y
// });
//
// const mul = run (function(x,y) {
//   return x*y
// });
//
// const div = run(function(x,y) {
//   return x/y
// });
