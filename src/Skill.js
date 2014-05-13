var Trait = require('./Trait');
var Attribute = require('./Attribute');

var Skill = function (initialValue, name, linkedAttribute) {
    Trait.apply(this, arguments);
    this.name = name || 'Common Knowledge';
    this.linkedAttribute = linkedAttribute || Attribute.Smarts;
};
Skill.prototype = Trait.prototype;

module.exports = Skill;