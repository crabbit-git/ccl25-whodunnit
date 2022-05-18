let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

/*

This time, murderer will start off as 'Professor Plum', but within the
declareMurderer function, it will be (successfully) reassigned as
'Mrs. Peacock'.

firstVerdict will access the version of murderer within declareMurderer,
which is Mrs. Peacock. secondVerdict will access the global version,
which is Professor Plum.

*/
