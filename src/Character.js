var Collection = require('./Collection');
var Trait = require('./Trait');
var Rank = require('./Rank');
var Attribute = require('./Attribute');


var Character = function (name) {
    this.name = name;

    this.rank = new Rank();

    this.race = null;

    this[Attribute.Agility] = new Trait('d4');
    this[Attribute.Smarts] = new Trait('d4');
    this[Attribute.Spirit] = new Trait('d4');
    this[Attribute.Strength] = new Trait('d4');
    this[Attribute.Vigor] = new Trait('d4');

    this.skills = new Collection();
    this.edges = new Collection();
    this.hinderances = new Collection();
};

Character.prototype.getAttributePoints = function () {
    var attributes = [
        this[Attribute.Agility],
        this[Attribute.Smarts],
        this[Attribute.Spirit],
        this[Attribute.Strength],
        this[Attribute.Vigor]
    ];
    return attributes.reduce(function (aggregate, attribute) { return aggregate + attribute.factor; }, 0);
};

Character.prototype.getSkillPoints = function () {
    var skills = this.skills.values();
    var basic = skills.reduce(function (aggregate, skill) { return aggregate + skill.factor; }, skills.length);
    var linkedAttributePenalty = skills.map(function (skill) {
        return Math.max(skill.factor - this[skill.linkedAttribute].factor, 0);
    }.bind(this)).reduce(function (aggregate, penalty) {
        return aggregate + penalty;
    }, 0);
    return basic + linkedAttributePenalty;
};

Character.prototype.hasSkill = function (skill) {
    if(typeof skill === 'string') {
        skill = { name: skill };
    }
    return !!this.skills[skill.name];
};

Character.prototype.isUnskilled = function (name) {
    return !this.skills.contains(name);
};

Character.prototype.learn = function (skill) {
    if(this.hasSkill(skill)) {
        this.skills[skill.name].increase();
    } else {
        this.skills[skill.name] = skill;
    }
    return this;
};

module.exports = Character;