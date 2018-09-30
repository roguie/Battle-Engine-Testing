exports.fight = function(p1, p2){

    /* MODULE IMPORTS */
    // var units = require('./units.js').aunits; // Attackers Units
    // var enemyUnits = require('./units.js').dunits; // Defenders Units
    // const inv = require('./investments.js').investments; // Investments Boosts (think of as Research)
    // const arm = require('./armoury.js').armoury; // Armoury Boosts

    /* GENERATE RANDOM WEIGHTS */
    var weightHealth = 1 + (Math.random() / 10); // Generate a random weight between 1 and 1.1
    var weightAttack = 1 + (Math.random() / 10); // Generate a random weight between 1 and 1.1

    // console.log("Random Health Weight: " + weightHealth); // Log random Health Weight
    // console.log("Random Health Attack: " + weightAttack); // Log random Attack Weight

    /* APPLY WEIGHTS */
    var newUnits = [];  // Create new variable to hold Units after applied weights
    var count = 0; // Counter init to 0

    for (var unit in p1.units) { // Iterate over all units

        if(!p1.units.hasOwnProperty(unit)) continue; // Check unit exists
        var u = p1.units[unit]; // Fetch unit

        newUnits[count] = { 

            health: Math.round(u.health * weightHealth), // Apply Health Weight
            attack: Math.round(u.attack * weightAttack), // Apply Attack Weight
            amount: u.amount

        }

        count++; // Increment Counter

    }

    weightHealth = 1 + (Math.random() / 10); // Generate a random weight between 1 and 1.1
    weightAttack = 1 + (Math.random() / 10); // Generate a random weight between 1 and 1.1

    var enemyUnits = [];  // Create new variable to hold Units after applied weights
    count = 0; // Counter init to 0

    for (var unit in p2.units) { // Iterate over all units

        if(!p2.units.hasOwnProperty(unit)) continue; // Check unit exists
        var u = p2.units[unit]; // Fetch unit

        enemyUnits[count] = { 

            health: Math.round(u.health * weightHealth), // Apply Health Weight
            attack: Math.round(u.attack * weightAttack), // Apply Attack Weight
            amount: u.amount

        }

        count++; // Increment Counter

    }

    // console.log(newUnits); // Log for debugging

    /* GENERATE BOOSTS */
    var armHealth = 0; // Init Armoury Health Boost Variable
    var armAttack = 0; // Init Armoury Attack Boost Variable 

    for (var item in p1.armoury) { // Iterate over all Armoury Items

        if(!p1.armoury.hasOwnProperty(item)) continue; // Check item exists
        var i = p1.armoury[item]; // Fetch item

        armHealth += i.health; // Increment Health Boost by armoury item value
        armAttack += i.attack; // Increment Attack Boost by armoury item value

    }

    var healthBoost = armHealth + p1.investments.health; // Create and Set Health Boost variable
    var attackBoost = armAttack + p1.investments.attack; // Create and Set Attack Boost variable

    /* GENERATE ENEMY BOOSTS */
    var enemyArmHealth = 0; // Init Armoury Health Boost Variable
    var enemyArmAttack = 0; // Init Armoury Attack Boost Variable 

    for (var item in p2.armoury) { // Iterate over all Armoury Items

        if(!p2.armoury.hasOwnProperty(item)) continue; // Check item exists
        var i = p2.armoury[item]; // Fetch item

        enemyArmHealth += i.health; // Increment Health Boost by armoury item value
        enemyArmAttack += i.attack; // Increment Attack Boost by armoury item value

    }

    var enemyHealthBoost = armHealth + p2.investments.health; // Create and Set Health Boost variable
    var enemyAttackBoost = armAttack + p2.investments.attack; // Create and Set Attack Boost variable

    /* APPLY BOOSTS */
    for (var unit in newUnits) { // Iterate over all units in the newUnits array

        if(!newUnits.hasOwnProperty(unit)) continue; // Check unit exists
        var u = newUnits[unit]; // Fetch unit

        newUnits[unit] = { // Reset value to...

            health: Math.floor(u.health + (p1.units[unit].health * (1 + (healthBoost / 100)))), // Apply Health Boosts
            attack: Math.floor(u.attack + (p1.units[unit].attack * (1 + (attackBoost / 100)))), // Apply Attack Boosts
            amount: u.amount

        }

    }

    for (var unit in enemyUnits) { // Iterate over all units in the newUnits array

        if(!enemyUnits.hasOwnProperty(unit)) continue; // Check unit exists
        var u = enemyUnits[unit]; // Fetch unit

        enemyUnits[unit] = { // Reset value to...

            health: Math.floor(u.health + (p2.units[unit].health * (1 + (healthBoost / 100)))), // Apply Health Boosts
            attack: Math.floor(u.attack + (p2.units[unit].attack * (1 + (attackBoost / 100)))), // Apply Attack Boosts
            amount: u.amount

        }

    }

    // console.log(newUnits); // Log for debugging

    /* SIMULATE BATTLE */

    // console.log(enemyUnits);

    var ended = false; // To track if the battle has ended

    var attacker = false; // To track who wins (True = Attacker, False = Defender)

    var totalAAttack = newUnits[0].attack * newUnits[0].amount;     // Total Attackers Attack
    var totalAHealth = newUnits[0].health * newUnits[0].amount;     // Total Attackers Health
    var totalDHealth = enemyUnits[0].health * enemyUnits[0].amount; // Total Defenders Health
    var totalDAttack = enemyUnits[0].attack * enemyUnits[0].amount; // Total Defenders Attack

    while(!ended){ // While the Battle is ongoing

        if(newUnits.length > 0 && enemyUnits.length > 0){ // Check both sides still have units left

            // console.log("Attacker: Attack: " + totalAAttack + " Health: " + totalAHealth); // Info Log
            // console.log("Defender: Attack: " + totalDAttack + " Health: " + totalDHealth); // Info Log

            // console.log("Both sides still have units."); // Informative Feedback about Battle progress

            if(totalAAttack > totalDHealth){ // If the attacker has greater attack than the defenders health

                // console.log("Attackers Attack > Defenders Health");

                var disposal = enemyUnits.shift(); // Remove first item from the enemy units array (essentially remove those units)
                totalAAttack -= totalDHealth;      // Offset the Attackers Attack by the Health of the Defender
                if(enemyUnits.length > 0 && enemyUnits[0].amount > 0){ // Check that the Defender still has units left

                    totalDHealth = enemyUnits[0].health * enemyUnits[0].amount; // Recalculate Defenders Health

                }else{ // If the Defender has no units left, they've lost

                    // console.log("Ending. Attackers Win!");
                    attacker = true;
                    ended = true; // End the battle
                    continue;

                }

            }else if(totalAAttack == totalDHealth){ // If the attacker has the same attack as the defenders health

                // console.log("Attackers Attack == Defenders Health");

                var disposal = enemyUnits.shift(); // Remove first item from the enemy units array (essentially remove those units)
                if(enemyUnits.length > 0 && enemyUnits[0].amount > 0){ // Check that the Defender still has units left

                    totalDHealth = enemyUnits[0].health  * enemyUnits[0].amount; // Recalculate Defenders Health

                }else{ // If the Defender has no units left, they've lost

                    // console.log("Ending. Attackers Win!");
                    attacker = true;
                    ended = true; // End the battle
                    continue;

                }

            }else{ // If the attacker has less attack than the defenders health

                // console.log("Attackers Attack < Defenders Health");

                totalDHealth -= totalAAttack; // Offset the defenders health by the Attackers attack

            }

            if(totalDAttack > totalAHealth){ // If the defenders attack is greater than the Attackers health

                // console.log("Defenders Attack > Attackers Health");

                var disposal = newUnits.shift(); // Remove first item from the attackes units array (essentially remove those units)
                totalDAttack -= totalAHealth;    // Offset defenders attack by the Attackers Health
                if(newUnits.length > 0 && newUnits[0].amount > 0){ // Check that the Attacker still has units left

                    totalAHealth = newUnits[0].health  * newUnits[0].amount; // Recalculate Attackers health

                }else{ // If the attacker has no units left, they've lost

                    // console.log("Ending. Defenders Win!");
                    attacker = false;
                    ended = true; // End the battle
                    continue;

                }

            }else if(totalDAttack == totalAHealth){

                // console.log("Defenders Attack == Attackers Health");

                var disposal = newUnits.shift(); // Remove first item from the attackes units array (essentially remove those units)
                if(newUnits.length > 0 && newUnits[0].amount > 0){ // Check that the Attacker still has units left

                    totalAHealth = newUnits[0].health * newUnits[0].amount; // Recalculate Attackers health

                }else{ // If the attacker has no units left, they've lost

                    // console.log("Ending. Defenders Win!");
                    attacker = false;
                    ended = true; // End the battle
                    continue;

                }

            }else{ // If the defender has less attack than the attackers health

                // console.log("Defenders Attack < Attackers Health");

                totalAHealth -= totalDAttack; // Offset the Attackers Health by the Defenders Attack

            }

        }else{

            // console.log("Ending.");
            ended = true; // End the battle

        }

    }

    /* POST BATTLE */

    if(attacker){

        var prizes = require('./prizes.js').prizes;

        var loot_table = [];
        var loot_counter = 0;

        for (var prize in prizes){

            if(!prizes.hasOwnProperty(prize)) continue;
            var p = prizes[prize];

            // console.log("Prize: " + p.name);

            for (var i = 0; i < p.dropRate; i++){

                loot_table[loot_counter] = p.name;

                loot_counter++;

            }

        }

        var finalPrize = loot_table[Math.round(Math.random() * loot_table.length - 1)];

        // console.log("Winner: Attacker.");
        // console.log(`Drops: ${finalPrize}`);
        // console.log(`Resources: Cash: ${Math.round(Math.random() * 1000)} | Food: ${Math.round(Math.random() * 1000)} | Steel: ${Math.round(Math.random() * 1000)} | Cement: ${Math.round(Math.random() * 1000)}`);

        return {"attacker": true, "defender": false};

    }else{

        // console.log("Winner: Defender.");
        // console.log("Drops: None.");
        // console.log("Resources: Cash: 0 | Food: 0 | Steel: 0 | Cement: 0");

        return {"attacker": false, "defender": true};    

    }    

}