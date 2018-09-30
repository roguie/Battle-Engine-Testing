const Units = require('./base_unit.js');

module.exports = class Bouncer extends Units {

    constructor(amount){

        super(270,110,100,100,"Bouncer");
        this.amount = amount;

    }

}