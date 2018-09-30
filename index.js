const battle = require('./battle.js');

var attacker = 0;
var defender = 0;

for(var i = 1; i < 100001; i++){

    var result = battle.fight();
    if(result.attacker){

        attacker++;
        console.log(`Iteration: ${i}: Attacker`);

    }else{

        defender++;
        console.log(`Iteration: ${i}: Defender`);

    }

}

console.log(`Attacker: ${attacker} | Defender: ${defender}`);