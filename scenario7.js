let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/*

Lots to unpack here. The murderer is defined initially with "let" as
Professor Plum. An anonymous function, stored in the constant changeMurderer,
then reassigns the murderer as Mr. Green, then assigns two constants,
plotTwist and unexpectedOutcome, each of which contain anonymous functions
which reassign the murderer as well. These are nested: changeMurderer contains
plotTwist, which contains unexpectedOutcome. Like last time, the function
further up in the hierarchy (changeMurderer) also contains function calls for
the lower functions, so both of the lower functions run when the top one does.

Crucially, however, the version of "murderer" being modified from plotTwist
down is a separate one, because the "let" keyword is used: i.e. this is not
going to change the globally defined version of "murderer", and will remain
limited in scope to the code block beneath plotTwist.

This means that calling changeMurderer first changes the original global
murderer variable's value to 'Mr. Green', then defines a separate "murderer"
as 'Colonel Mustard' via plotTwist, then changes 'Colonel Mustard' to
'Miss Scarlet'. The declareMurderer call only has access to the original
global murderer (ultimately Mr. Green), not the block scoped one (ultimately
Miss Scarlet), so Mr. Green is declared to be the murderer.

*/
