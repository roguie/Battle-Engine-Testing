const Units = require('./base_unit.js');

module.exports = class Crook extends Units {

    constructor(amount){

        super(100,100,50,150,"Crook");
        this.amount = amount;

    }

}