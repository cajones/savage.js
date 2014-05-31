var Edge = function (name, requirements, effect) {
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'requirements', {
        value: Array.isArray(requirements) ? requirements : [requirements]
    });
    Object.defineProperty(this, 'effect', {
        value: effect
    });
};

Edge.prototype.isMet = function () {
    return false;
};

Edge.prototype.isAvailableTo = function (character) {
    return character.edges.reduce(function (previous, edge) {
        return  previous && edge.isMet(character);
    }, true);
};

Edge.prototype.toString = function () {
    return this.name;
};

Edge.requires = function (/*any*/) {
    var Skill = require('./Skill'),
        Attribute = require('./Attribute'),
        SkillRequirement = require('./Requirements/SkillRequirement'),
        AttributeRequirement = require('./Requirements/AttributeRequirement'),
        RankRequirement = require('./Requirements/RankRequirement');

    if(arguments.length === 1) {
        var obj = arguments[0];
        if(typeof obj === 'object' && obj instanceof Skill) {
            return new SkillRequirement(obj);
        } else {
            return new RankRequirement(obj);
        }
    } else {
        var name = arguments[0],
            value = arguments[1],
            linkedAttribute = arguments[2];

        if(name === Attribute.Agility || name === Attribute.Smarts || name === Attribute.Spirit || name === Attribute.Strength || name === Attribute.Vigor) {
            return new AttributeRequirement(name, value);
        } else {
            return new SkillRequirement(name, value, linkedAttribute);
        }
    }
};

module.exports = Edge;