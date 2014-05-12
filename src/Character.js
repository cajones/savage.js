var Attribute = require('./Attribute');
var Rank = require('./Rank');

var Character = function () {
    this.name = '';

    this.rank = new Rank();

    this.agility = new Attribute('d4');
    this.smarts = new Attribute('d4');
    this.spirit = new Attribute('d4');
    this.strength = new Attribute('d4');
    this.vigor = new Attribute('d4');

    Object.defineProperty(this, 'skills', { value: [] });
    Object.defineProperty(this, 'edges', { value: [] });
};

module.exports = Character;