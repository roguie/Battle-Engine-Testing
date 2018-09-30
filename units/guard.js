const Units = require('./base_unit.js');

module.exports = class Guard extends Units {

    constructor(amount){

        super(130,210,65,200,"Janitor");
        this.amount = amount;

    }

}