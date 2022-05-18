let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/*

This is kinda chaotic. Initially, the murderer is set up as Colonel Mustard.
This is done with "let", not "const", so is vulnerable to modification.
A constant, changeMurderer, is then used to contain a function which
contains an iffy sequence of two reassignments of murdererer, first as Mr.
Green, then to Mrs. White. plotTwist is both defined (contained in a
constant) then called inside changeMurderer, which means that calling
changeMurderer will also call plotTwist (so the murderer will change twice).

Logging the output of declareMurderer will therefore name Mrs. White.

*/
