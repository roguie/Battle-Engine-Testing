const Units = require('./base_unit.js');

module.exports = class Corporal extends Units {

    constructor(amount){

        super(150,200,0,0,"Corporal");
        this.amount = amount;

    }

}