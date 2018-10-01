const Units = require('./base_unit.js');

module.exports = class Captain extends Units {

    constructor(amount){

        super(3780,3780,0,0,"Captain");
        this.amount = amount;

    }

}