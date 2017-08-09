//Element Grabs
let number = document.getElementsByClassName("number");
let operate = document.getElementsByClassName("operate");
let clear = document.getElementById("clear");
let display = document.querySelector("input");

//For Loops
for (let i = 0; i < number.length; i++) { //runs through number class to generate the input
  number[i].addEventListener("click", function() {
      let inputValue = entryText.value; //value from the input
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


//Functions
function total(){ //performs the calculation
  entryText.value=eval(entryText.value) || ""; 
}

function clearDisplay(){ //clears the display field
  let display = document.querySelector("input");
  let buttonValue = this.textContent;
    entryText.value = " ";
}
