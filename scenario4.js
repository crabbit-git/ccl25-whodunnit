let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

/*

declareAllSuspects returns a string declaring all three suspects, but also
reassigns suspectThree within block scope to 'Colonel Mustard'.

This means that logging suspects, a constant containing declareAllSuspects(),
will spit out the three suspects defined within the function (suspectThree
being Colonel Mustard). However, logging a string directly calling on
suspectThree will print out the global version, Mrs. Peacock.

*/
