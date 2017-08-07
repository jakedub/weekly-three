let keys = querySelectorAll (".keys");
let operators = ["+", "-", "/", "x"];
let decimalAdded = false;

for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function() {
		let input = document.querySelector('entry');
		let inputVal = entry.innerHTML;
		let buttonVal = this.innerHTML;
    if(buttonVal === 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		} else if(buttonVal === '=') {
      let equation = inputVal;
      let lastChar = equation[equation.length - 1];
      decimalAdded = false;
    }
  };


let input = document.querySelector('input');
document.querySelectorAll('.number').forEach(function (button, item) {
  button.addEventListener('click', function () {
    input.value = item; //showing numbers in different order
  });
});


let entry = document.querySelector('input');
document.querySelectorAll('.operate').forEach(function (button, index) {
  button.addEventListener('click', function () {
    entry.value += index + 1; //goes one through five
  });
});
