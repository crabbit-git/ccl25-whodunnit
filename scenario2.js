const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/*

This one won't work because you can't reassign a constant, which means murderer can't be changed to 'Mrs. Peacock'.
It'll error when it gets to the attempt to reassign murderer.

*/
