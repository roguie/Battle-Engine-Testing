const Units = require('./base_unit.js');

module.exports = class Lieutenant extends Units {

    constructor(amount){

        super(1360,1525,0,0,"Lieutenant");
        this.amount = amount;

    }

}