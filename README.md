# Battle-Engine-Testing

[![Build Status](https://semaphoreci.com/api/v1/roguie/battle-engine-testing/branches/master/badge.svg)](https://semaphoreci.com/roguie/battle-engine-testing)

This script is designed to test varying inputs for a battle engine.

The script assumes that the inputs are fully verified before execution, as you would expect in a production environment.

**Warning:** This is only a very basic battle engine for a RTS game.

# Changing the Mechanics

The script is commented thoroughly which should enable improvement and adaption to the mechanics used. The current mechanic iterates over the attackers units first, with the lowest level unit from the attacker making the first hit and from there it will switch between Attacker and Defender until a winner is found.

# Running the Engine

First of all, clone the repository to your PC and ensure you have Node.js installed.

Then run `npm install` to install dependancies.

To run the engine simply issue `node .` in the console and the current setup will be executed inside your console.

If you wish to configure a different setup, open up `index.js`.

Inside `index.js` is the configuration for the Battle. The fight always consists of 2 players who always have at least 1 unit and Armour + Investment boosts. 

On line 13 you should see 
```JS
p1.addUnits(new units.crook(100));
```
This is added 100x Crook unit types to the player object which will later be passed to the Battle Simulator. To add units, simply duplicate this and change the type and/or amount.

On line 17 you should see
```JS
p1.addArmouryBoosts(new boosts.armoury(new boosts.armoury_item("stick", 0,10),new boosts.armoury_item("stick", 10,0),new boosts.armoury_item("vest", 0,10),new boosts.armoury_item("vest", 10,0)));
```
This is adding an Armoury object to the Player object which consists of 4x Armoury Item objects. Each Armoury Item has a Name, Health and Attack value and an Armoury object consists of exactly 4x Armoury Items.

On line 18 you should see
```JS
p1.addInvestmentsBoosts(new boosts.investments(35,40));
```
This is adding an Investment object to the player. An Investment object consists of only a Health and Attack value.

```JS
console.log(newBattle.fight(p1, p2));
```
This logs the output of a battle between p1 and p2. If you wish to create more than those players you can use this to run fights between them.