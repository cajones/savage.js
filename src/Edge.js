var Edge = function (name, requirements, effect, category, notes) {
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'requirements', {
        value: Array.isArray(requirements) ? requirements : [requirements]
    });
    Object.defineProperty(this, 'effect', {
        value: effect
    });
    Object.defineProperty(this, 'category', {
        value: category || 'Edges'
    });
    this.notes = notes   || '';
};

Edge.prototype.isAvailableTo = function (character) {
    return this.requirements.reduce(function (previous, requirement) {
        return previous && requirement.isMet(character);
    }, true);
};

Edge.prototype.toString = function () {
    return this.name;
};

Edge.requires = function (/*any*/) {
    var Skill = require('./Skill'),
        Attribute = require('./Attribute'),
        Rank = require('./Rank'),
        SkillRequirement = require('./Requirements/SkillRequirement'),
        AttributeRequirement = require('./Requirements/AttributeRequirement'),
        RankRequirement = require('./Requirements/RankRequirement'),
        EdgeRequirement = require('./Requirements/EdgeRequirement');

    if(arguments.length === 1) {
        var obj = arguments[0];
        if(Rank.isRank(obj)) {
            return new RankRequirement(obj);
        }
        if(typeof obj === 'object' && obj instanceof Skill) {
            return new SkillRequirement(obj);
        } else {    
            return new EdgeRequirement(obj);
        }
    } else {
        var name = arguments[0],
            value = arguments[1],
            linkedAttribute = arguments[2];

        if(Attribute.isAttribute(name)) {
            return new AttributeRequirement(name, value);
        } else {
            return new SkillRequirement(name, value, linkedAttribute);
        }
    }
};

Edge.requires.either = function (first, second) {
    var EitherRequirement = require('./Requirements/EitherRequirement'),
        EdgeRequirement = require('./Requirements/EdgeRequirement');

    if(typeof first === 'string') {
        first = new EdgeRequirement(second);
    }
    if(typeof second === 'string') {
        second = new EdgeRequirement(second);
    }

    return new EitherRequirement(first, second);
};

Edge.requires.skills = function (expression, quanity, value) {
    var MultiSkillRequirement = require('./Requirements/MultiSkillRequirement');

    return new MultiSkillRequirement(quanity, expression, value);
};

module.exports = Edge;