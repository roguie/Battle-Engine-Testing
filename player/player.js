module.exports = class Player{

    constructor(name, level, xp, influence){

        this.name = name;
        this.level = level;
        this.xp = xp;
        this.influence = influence;

        this.units = [];
        this.armoury;
        this.investments;

    }

    addUnits(unit){

        this.units.push(unit);

    }

    addArmouryBoosts(boost){

        this.armoury = boost;

    }

    addInvestmentsBoosts(boost){

        this.investments = boost;

    }

}