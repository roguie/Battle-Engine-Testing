const Units = require('./base_unit.js');

module.exports = class Deputy extends Units {

    constructor(amount){

        super(37600,41250,0,0,"Deputy");
        this.amount = amount;

    }

}