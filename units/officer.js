const Units = require('./base_unit.js');

module.exports = class Officer extends Units {

    constructor(amount){

        super(70,75,0,0,"Officer");
        this.amount = amount;

    }

}