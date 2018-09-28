# Battle-Engine-Testing

[![Build Status](https://semaphoreci.com/api/v1/roguie/battle-engine-testing/branches/master/badge.svg)](https://semaphoreci.com/roguie/battle-engine-testing)

This script is designed to test varying inputs for a battle engine.

The script assumes that the inputs are fully verified before execution, as you would expect in a production environment.

**Warning:** This is only a very basic battle engine for a RTS game.

# Changing the Mechanics

The script is commented thoroughly which should enable improvement and adaption to the mechanics used. The current mechanic iterates over the attackers units first, with the lowest level unit from the attacker making the first hit and from there it will switch between Attacker and Defender until a winner is found.