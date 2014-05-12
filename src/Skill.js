var Trait = require('./Trait');
var Attribute = require('./Attribute');

var Skill = function (initialValue, linkedAttribute) {
    Trait.apply(this, arguments);
    this.linkedAttribute = linkedAttribute || Attribute.Smarts;
};
Skill.prototype = Trait.prototype;

module.exports = Skill;