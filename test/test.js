let display = document.getElementByClassName("display"); //text field for the form
console.log(display);

function show(x){
  calc.display.value+=x;
  if (x === "C"){
    display.value= " ";
  }
}

function total(){ //equal in HTML using "total()" for the onclick
  x=display.value;
  x=eval(x);
  display.value=x;
}
