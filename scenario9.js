let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/*

The murderer starts as Professor Plum. If the murderer is Professor Plum,
which is the case, then a new version of the "murderer" variable is declared
to be Mrs. Peacock, but this only has block scope and is never accessed.

Verdict is first assigned the function call declareMurderer() and then logged
to the console, which prints a string declaring the murder to be the one with
global scope, which is Professor Plum.

*/
