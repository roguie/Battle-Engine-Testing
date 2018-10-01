const Units = require('./base_unit.js');

module.exports = class Chief extends Units {

    constructor(amount){

        super(85000,100000,0,0,"Chief");
        this.amount = amount;

    }

}