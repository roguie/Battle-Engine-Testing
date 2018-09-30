const Units = require('./base_unit.js');

module.exports = class Janitor extends Units {

    constructor(amount){

        super(150,80,50,150,"Janitor");
        this.amount = amount;

    }

}