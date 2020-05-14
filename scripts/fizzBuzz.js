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
  // Check if the fizzBuzz list has already been populated, if so empty the <ul>
  while (fizzBuzzList.hasChildNodes()) {
    fizzBuzzList.removeChild(fizzBuzzList.firstChild);
  }
  for (i = 1; i <= 100; i++) {
    let output = '';
    const liNode = document.createElement('LI');

    if (i % num1 === 0) {
      output += 'Fizz ';
    }
    if (i % num2 === 0) {
      output += 'Buzz';
    }

    if (output === '') {
      output = i;
    }

    const listNode = document.createTextNode(output);
    liNode.appendChild(listNode);
    if (output === 'Fizz ') {
      liNode.style.color = 'crimson';
    }
    if (output === 'Buzz') {
      liNode.style.color = 'darkcyan';
    }
    if (output === 'Fizz Buzz') {
      liNode.style.color = '#79792f';
    }
    fizzBuzzList.appendChild(liNode);
  }
}
