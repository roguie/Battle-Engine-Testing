// const battle = require('./battle.js'); OLD BATTLE SCRIPT
const newBattle = require('./newBattle.js'); // Implements new Classes

var attacker = 0;
var defender = 0;

const units = require('./units/units.js');
const player = require('./player/player.js');
const boosts = require('./boosts/index.js');

var p1 = new player("PlayerOne", 1, 1, 1000);

p1.addUnits(new units.crook(100));
p1.addUnits(new units.janitor(100));
p1.addUnits(new units.bouncer(200));

p1.addArmouryBoosts(new boosts.armoury(new boosts.armoury_item("stick", 0,10),new boosts.armoury_item("stick", 10,0),new boosts.armoury_item("vest", 0,10),new boosts.armoury_item("vest", 10,0)));
p1.addInvestmentsBoosts(new boosts.investments(35,40));

console.log(p1);

var p2 = new player("PlayerTwo", 1, 1, 1000);

p2.addUnits(new units.guard(50));
p2.addUnits(new units.crook(50));
p2.addUnits(new units.janitor(50));
p2.addUnits(new units.bouncer(50));

p2.addArmouryBoosts(new boosts.armoury(new boosts.armoury_item("stick", 0,10),new boosts.armoury_item("stick", 10,0),new boosts.armoury_item("vest", 0,10),new boosts.armoury_item("vest", 10,0)));
p2.addInvestmentsBoosts(new boosts.investments(35,40));

console.log(p2);

// for(var i = 1; i < 101; i++){

//     var result = battle.fight();
//     if(result.attacker){

//         attacker++;
//         console.log(`Iteration: ${i}: Attacker`);

//     }else{

//         defender++;
//         console.log(`Iteration: ${i}: Defender`);

//     }

// }

// console.log(`Attacker: ${attacker} | Defender: ${defender}`);

console.log(newBattle.fight(p1, p2));