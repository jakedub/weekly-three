document.getElementById("add").addEventListener("click", function(){
  count.textContent = add(1,count.textContent);
});

document.getElementById("mul").addEventListener("click", function(){
  count.textContent = mul(1,count.textContent);
});

document.getElementById("divide").addEventListener("click", function(){
  count.textContent = divide(1,count.textContent);
});

document.getElementById("equal").addEventListener("click", function(){
  count.textContent = equal(1,count.textContent);
});

function increment(x){
  return Number(x) +1
}

function decrement(x){
  return Number(x)-1
}


function run(fn) {
  return function (x,y){
    return fn(Number(x), Number(y));
  }
}

const add = run (function(x,y) {
  return x+y
});
const sub = run (function(x,y) {
  return x-y
});

const mul = run (function(x,y) {
  return x*y
});

const div = run(function(x,y) {
  return x/y
});
