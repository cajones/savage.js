(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Trait = require('./Trait');
var Attribute = function () {
    Trait.apply(this, arguments);
};
Attribute.prototype = Trait.prototype;

Attribute.Agility = 'agility';
Attribute.Smarts = 'smarts';
Attribute.Spirit = 'spirit';
Attribute.Strength = 'strength';
Attribute.Vigor = 'vigor';

module.exports = Attribute;
},{"./Trait":10}],2:[function(require,module,exports){
var Collection = require('./Collection');
var Trait = require('./Trait');
var Rank = require('./Rank');
var Attribute = require('./Attribute');

var Character = function (name) {
    this.name = name;

    this.rank = new Rank();

    this.pace = 6;

    this.race = null;

    this[Attribute.Agility] = new Trait('d4');
    this[Attribute.Smarts] = new Trait('d4');
    this[Attribute.Spirit] = new Trait('d4');
    this[Attribute.Strength] = new Trait('d4');
    this[Attribute.Vigor] = new Trait('d4');

    Object.defineProperty(this, 'parry', {
        get: function () {
            if(this.isUnskilled('Fighting')) return 2;

            return 2 + (this.skills.Fighting.effect /2);
        }
    });

    Object.defineProperty(this, 'toughness', {
        get: function () {
            return 2 + (this.vigor.effect /2);
        }
    });

    Object.defineProperty(this, 'charisma', {
        get: function () {
            return 0;
        }
    });

    this.skills = new Collection();
    this.edges = new Collection();
    this.hindrances = new Collection();
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

Character.prototype.toString = function () {
    var output = '[Character' +
        (this.name ? ' ' + this.name : '') +
        this.race.toString() +
        this.rank.toString() +
        ',Ag(' + this.agility.value + ')' +  
        ',Sm(' + this.smarts.value + ')' +  
        ',Sp(' + this.spirit.value + ')' +  
        ',St(' + this.strength.value + ')' +  
        ',Vi(' + this.vigor.value + ')' +  
        ']';
    return output;
};

module.exports = Character;
},{"./Attribute":1,"./Collection":3,"./Rank":7,"./Trait":10}],3:[function(require,module,exports){
var Collection = function() {
    Object.defineProperty(this, 'length', {
        get: function () {
            return Object.keys(this).length;
        }
    });
};

Collection.prototype = {
    add: function (key, value) {
        if(this.contains(key)) return false;
        if(arguments.length = 1 && typeof key === 'object' && key.toString) {
            value = key;
            key = value.toString()
        }
        this[key] = value;
        return true;
    },
    remove: function (key) {
        if(!this.contains(key)) return false;
        delete this[key];
        return true;
    },
    contains: function (item) {
        return typeof this[item] !== 'undefined' || Object.keys(this).indexOf(item) != -1;
    },
    keys: function() {
        return Object.keys(this);
    },
    values: function () {
        return this.keys().map(function (key) { return this[key]; }.bind(this));
    },
    map: function (/* arguments */) {
        return Array.prototype.map.apply(this.values(), arguments);
    },
    filter: function (/* arguments */) {
        return Array.prototype.filter.apply(this.values(), arguments);
    },
    reduce: function (/* arguments */) {
        return Array.prototype.reduce.apply(this.values(), arguments);
    },
    forEach: function (/* arguments */) {
        return Array.prototype.forEach.apply(this.values(), arguments);
    },
};
module.exports = Collection;
},{}],4:[function(require,module,exports){
var Hindrance = function (name, cost) {
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'cost', {
        value: /^Major$/i.test(cost) ? 'Major' : 'Minor'
    });
};

Hindrance.prototype.toString = function () {
    return this.name;
};

Hindrance.AllThumbs = new Hindrance('All Thumbs');
Hindrance.Anemic = new Hindrance('Anemic');
Hindrance.Arrogant = new Hindrance('Arrogant', 'Major');
Hindrance.BadEyes = new Hindrance('Bad Eyes', 'Major');
Hindrance.BadEyesMinor = new Hindrance('Bad Eyes (Minor)', 'Minor');
Hindrance.BadLuck = new Hindrance('Bad Luck', 'Major');
Hindrance.BigMouth = new Hindrance('Bad Eyes');
Hindrance.Blind = new Hindrance('Blind', 'Major');
Hindrance.Bloodthirsty = new Hindrance('Bloodthirsty', 'Major');
Hindrance.Cautious = new Hindrance('Cautious');
Hindrance.Clueless = new Hindrance('Clueless', 'Major');
Hindrance.CodeOfHonour = new Hindrance('Code Of Honour', 'Major');
Hindrance.DeathWish = new Hindrance('Death Wish', 'Major');
Hindrance.Delusional = new Hindrance('Delusional', 'Major');
Hindrance.DelusionalMinor = new Hindrance('Delusional (Minor)');
Hindrance.DoubtingThomas = new Hindrance('Doubting Thomas');
Hindrance.Elderly = new Hindrance('Elderly', 'Major');
Hindrance.Enemy = new Hindrance('Enemy', 'Major');
Hindrance.EnemyMinor = new Hindrance('Enemy (Minor)');
Hindrance.Greedy = new Hindrance('Greedy');

module.exports = Hindrance;
},{}],5:[function(require,module,exports){
var Race = function (name) {
    this.name = name;
};

Race.prototype.toString = function () {
	return this.name;
};

Race.Human = new Race('Human');
module.exports = Race;
},{}],6:[function(require,module,exports){
var RandomNameGenerator = function () {
};

RandomNameGenerator.prototype.fullname = function () {

};

var firstnames = [
];
var lastnames = [
];
module.exports = RandomNameGenerator;
},{}],7:[function(require,module,exports){
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

Rank.prototype.toString = function () {
    return this.name + '(' + this.xp + ')';
};

module.exports = Rank;
},{}],8:[function(require,module,exports){
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
        Skill: require('./Skill'),
        Race: require('./Race')
    };
}));
},{"./Attribute":1,"./Character":2,"./Race":5,"./Skill":9}],9:[function(require,module,exports){
var Trait = require('./Trait');
var Attribute = require('./Attribute');

var Skill = function (initialValue, name, linkedAttribute) {
    Trait.apply(this, arguments);
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'linkedAttribute', {
        value: linkedAttribute || Attribute.Smarts
    });
};

Skill.prototype = new Trait();
Skill.prototype.toString = function () {
    return this.name;
}
//Agility Skills
Skill.Boating = function () {
    return new Skill('d4', 'Boating', Attribute.Agility);
};
Skill.Driving = function () {
    return new Skill('d4', 'Driving', Attribute.Agility);
};
Skill.Fighting = function () {
    return new Skill('d4', 'Fighting', Attribute.Agility);
};
Skill.Lockpicking = function () {
    return new Skill('d4', 'Lockpicking', Attribute.Agility);
};
Skill.Piloting = function () {
    return new Skill('d4', 'Piloting', Attribute.Agility);
};
Skill.Riding = function () {
    return new Skill('d4', 'Riding', Attribute.Agility);
};
Skill.Shooting = function () {
    return new Skill('d4', 'Shooting', Attribute.Agility);
};
Skill.Stealth = function () {
    return new Skill('d4', 'Stealth', Attribute.Agility);
};
Skill.Swimming = function () {
    return new Skill('d4', 'Swimming', Attribute.Agility);
};
Skill.Throwing = function () {
    return new Skill('d4', 'Throwing', Attribute.Agility);
};

//Smarts Skills
Skill.Gambling = function () {
    return new Skill('d4', 'Gambling', Attribute.Smarts);
};
Skill.Healing = function () {
    return new Skill('d4', 'Healing', Attribute.Smarts);
};
Skill.Investigation = function () {
    return new Skill('d4', 'Investigation', Attribute.Smarts);
};
Skill.Notice = function () {
    return new Skill('d4', 'Notice', Attribute.Smarts);
};
Skill.Repair = function () {
    return new Skill('d4', 'Repair', Attribute.Smarts);
};
Skill.Streetwise = function () {
    return new Skill('d4', 'Streetwise', Attribute.Smarts);
};
Skill.Survival = function () {
    return new Skill('d4', 'Survival', Attribute.Smarts);
};
Skill.Taunt = function () {
    return new Skill('d4', 'Taunt', Attribute.Smarts);
};
Skill.Tracking = function () {
    return new Skill('d4', 'Tracking', Attribute.Smarts);
};

//Spirit Skills
Skill.Intimidation = function () {
    return new Skill('d4', 'Intimidation', Attribute.Spirit);
};
Skill.Persuasion = function (specialty) {
    return new Skill('d4', 'Persuasion', Attribute.Spirit);
};

//Strength Skills
Skill.Climbing = function (specialty) {
    return new Skill('d4', 'Climbing', Attribute.Strength);
};

module.exports = Skill;
},{"./Attribute":1,"./Trait":10}],10:[function(require,module,exports){
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
    Object.defineProperty(this, 'effect', {
        get: function () {
            return (this.factor * 2) + 4;
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
},{}]},{},[1,2,3,4,5,6,7,8,9,10])