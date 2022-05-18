const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

/*

This combines the two different changing elements: murderer and weapon.

The murderer starts as Mrs. Peacock; the weapon starts as a lead pipe.
Then, changeScenario is called, followed by declareWeapon (by storing it in
verdit then logging verdict to the console). Calling changeScenario first
overwrites the murderer and room values with 'Mrs. Peacock' (same as before)
and 'Dining Room' respectively, then defines and calls on two further
functions, plotTwist and unexpectedOutcome.

plotTwist only does anything if the room it takes as an argument matches the
room in the scenario, which it will, because 'Dining Room' is being passed to
plotTwist when it's called, so that block runs and changes the murderer to
Colonel Mustard.

unexpectedOutcome is indented such that it looks like it's contained within
plotTwist's conditional, but it's not: it's under plotTwist but not inside the
"if" statement, so it'll run. It too contains a conditional, which checks if
a murderer passed in as an argument (which in this case is 'Colonel Mustard')
matches the one currently stored in the scenario and then changes the weapon
to 'Candle Stick'.

Although the murderer has been changed, we only know that it's ultimately
Colonel Mustard from reading the source code, because no function call ever
prints out the murderer to the console. We do get the weapon declared though,
which is the Candle Stick.

*/
