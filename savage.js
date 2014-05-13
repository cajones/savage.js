(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Attribute = function () {};

Attribute.Agility = 'agility';
Attribute.Smarts = 'smarts';
Attribute.Spirit = 'spirit';
Attribute.Strength = 'strength';
Attribute.Vigor = 'vigor';

module.exports = Attribute;
},{}],2:[function(require,module,exports){
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

    this.skills = {};
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
},{"./Attribute":1,"./Rank":3,"./Trait":6}],3:[function(require,module,exports){
var Rank = function (xp) {
    this.xp = parseInt(xp) || 0;
    Object.defineProperty(this, 'name', {
        get: function () {
            if(this.xp < 20) {
                return 'Novice';
            } else if (this.xp < 40) {
                return 'Seasoned';
            } else if( this.xp < 60) {
                return 'Veteran';
            } else if( this.xp < 80) {
                return 'Heroic';
            } else {
                return 'Legendary';
            }
        }
    });
    
};

module.exports = Rank;
},{}],4:[function(require,module,exports){
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (root.Savage = factory());
        });
    } else if (typeof exports === 'object') {
        module.exports = root.Savage = factory();
    }
    if(typeof window !== 'undefined') {
        window.Savage = root.Savage;
    }
}(this, function () {
    return {
        Character: require('./Character'),
        Attribute: require('./Attribute'),
        Skill: require('./Skill')
    };
}));
},{"./Attribute":1,"./Character":2,"./Skill":5}],5:[function(require,module,exports){
var Trait = require('./Trait');
var Attribute = require('./Attribute');

var Skill = function (initialValue, name, linkedAttribute) {
    Trait.apply(this, arguments);
    this.name = name || 'Common Knowledge';
    this.linkedAttribute = linkedAttribute || Attribute.Smarts;
};
Skill.prototype = Trait.prototype;

module.exports = Skill;
},{"./Attribute":1,"./Trait":6}],6:[function(require,module,exports){
var scale = ['d4', 'd6', 'd8', 'd10', 'd12', 'd12+1', 'd12+2', 'd12+3', 'd12+4'];
var Trait = function (initialValue) {
    var _factor = initialValue ? scale.indexOf(initialValue) : 0;
    Object.defineProperty(this, 'factor', {
        get: function () {
            return _factor;
        },
        set: function (value) {
            _factor = Math.max(0, Math.min(scale.length, value));
        }
    });
    Object.defineProperty(this, 'value', {
        get: function () {
            return scale[this.factor];
        }
    });
    Object.defineProperty(this, 'cost', {
        get: function () {
            return this.factor;
        }
    });
};

Trait.prototype.increase = function () {
    return scale[++this.factor];
};
Trait.prototype.decrease = function () {
    return scale[--this.factor];
};
module.exports = Trait;
},{}]},{},[1,2,3,4,5,6])