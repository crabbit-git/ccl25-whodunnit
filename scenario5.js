const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

/*

Here, changeWeapon is being used to reassign the value of the "scenario"
constant's key "weapon", which will work, because the properties of a constant
can be changed, just not the assignment of the constant as a whole.

This is being done globally, so declareWeapon will have access to the change,
if one is made... which it is, on line 15. A constant, verdict, is then
assigned to call declareWeapon(), which is logged to the console. This will
print a statement that declares the weapon to be 'Revolver'.

*/
