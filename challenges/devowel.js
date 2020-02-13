console.log('devowel script has loaded');

// write this function!
function devowel() {
}

// remove all vowels, lower and upper case!
console.assert(devowel('alphAbet') === 'lphbt', 'frst');
console.assert(devowel('If it must bE') === 'f t must b', 'second');
console.assert(devowel('Over and out') === 'Over and t', 'third');
console.assert(devowel('Up!') === 'p!', 'fourth');
console.assert(devowel('AaEeIiOoUuAaEeIiOoUu') === '', 'fifth');


function devowelHandler() {
  // prompt the user for a noun, verb and adjective
  const userText = prompt('enter some text');

  // perform core logic
  const result = devowel(userText);

  // alert result for the user
  alert(result);

  // log action for the developer
  console.log('\n--- devowel ---');
  console.log('userText:', '(' + typeof userText + '),', userText);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('devowel-button').addEventListener('click', devowelHandler);
