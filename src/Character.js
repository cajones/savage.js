var Trait = require('./Trait');
var Rank = require('./Rank');
var Attribute = require('./Attribute');

var Character = function (name) {
    this.name = name;

    this.rank = new Rank();

    this[Attribute.Agility] = new Trait('d4');
    this[Attribute.Smarts] = new Trait('d4');
    this[Attribute.Spirit] = new Trait('d4');
    this[Attribute.Strength] = new Trait('d4');
    this[Attribute.Vigor] = new Trait('d4');

    this.skills = [];
    this.edges = [];
};

Character.prototype.hasSkill = function (skill) {
    if(typeof skill === 'string') {
        skill = { name: skill };
    }
    return !!this.skills[skill.name];
};

Character.prototype.isUnskilled = function (name) {
    return !this.skills[name];
};

Character.prototype.learn = function (skill) {
    if(this.hasSkill(skill)) {
        this.skills[skill.name].increase();
    } else {
        this.skills[skill.name] = skill;
    }
};

module.exports = Character;