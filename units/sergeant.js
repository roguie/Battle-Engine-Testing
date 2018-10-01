const Units = require('./base_unit.js');

module.exports = class Sergeant extends Units {

    constructor(amount){

        super(760,700,0,0,"Sergeant");
        this.amount = amount;

    }

}