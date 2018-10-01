const NPC = require('./npc.js');
const res = require('./npc_resources.json');
const loot = require('./npc_loot.json');
const units = require('./npc_units.js');

module.exports = class PoliceOffice extends NPC{

    constructor(level, x, y){

        super("Police Office", level, x, y, res[level-1].cash, res[level-1].food, res[level-1].steel, res[level-1].cement, loot[level-1].loot, units[level-1].units);

    }

}