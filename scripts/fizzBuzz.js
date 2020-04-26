const fizzBuzzList = document.getElementById('fizzList');
const fizzBuzzButonEl = document.getElementById('fizzBuzzButton');

const num1El = document.getElementById('number1');
const num2El = document.getElementById('number2');

fizzBuzzButonEl.addEventListener('click', () => {
  const num1 = num1El.value;
  const num2 = num2El.value;
  fizzBuzz(num1, num2);
});

function fizzBuzz(num1, num2) {
  console.log(num1, num2);
  for (i = 0; i <= 100; i++) {
    // TODO: Check if fizzBuzzList is > 1 if so clear the list before running again
    let output = document.createTextNode(i);
    let liNode = document.createElement('LI');
    liNode.appendChild(output);
    fizzBuzzList.appendChild(liNode);
  }
}
