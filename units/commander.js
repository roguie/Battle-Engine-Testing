const Units = require('./base_unit.js');

module.exports = class Commander extends Units {

    constructor(amount){

        super(11240,14000,0,0,"Commander");
        this.amount = amount;

    }

}