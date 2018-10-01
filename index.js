// const battle = require('./battle.js'); OLD BATTLE SCRIPT
const newBattle = require('./newBattle.js'); // Implements new Classes

const _cliProgress = require('cli-progress');
const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);

var attacker = 0;
var defender = 0;

const units = require('./units/units.js');
const player = require('./player/player.js');
const boosts = require('./boosts/index.js');
const npc = require('./npc/index.js');

var p1 = new player("PlayerOne", 1, 1, 1000);

p1.addUnits(new units.crook(100));
p1.addUnits(new units.janitor(100));
p1.addUnits(new units.bouncer(200));

p1.addArmouryBoosts(new boosts.armoury(new boosts.armoury_item("stick", 0,10),new boosts.armoury_item("stick", 10,0),new boosts.armoury_item("vest", 0,10),new boosts.armoury_item("vest", 10,0)));
p1.addInvestmentsBoosts(new boosts.investments(35,40));

var p2 = new player("PlayerTwo", 1, 1, 1000);

p2.addUnits(new units.guard(50));
p2.addUnits(new units.crook(50));
p2.addUnits(new units.janitor(50));
p2.addUnits(new units.bouncer(50));

p2.addArmouryBoosts(new boosts.armoury(new boosts.armoury_item("stick", 0,10),new boosts.armoury_item("stick", 10,0),new boosts.armoury_item("vest", 0,10),new boosts.armoury_item("vest", 10,0)));
p2.addInvestmentsBoosts(new boosts.investments(35,40));

// var PO1 = new npc.police_office(3, 20,20);

var iterations = 25000;

bar1.start(iterations, 0);

for(var i = 1; i < iterations + 1; i++){

    bar1.update(i);

    var result = newBattle.fight(p1, p2);
    if(result.attacker){

        attacker++;
        //console.log(`Iteration: ${i}: Attacker`);

    }else{

        defender++;
        //console.log(`Iteration: ${i}: Defender`);

    }

}

bar1.stop();

console.log(`Attacker: ${attacker} | Defender: ${defender}`);