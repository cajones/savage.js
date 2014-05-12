(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var scale = ['d4', 'd6', 'd8', 'd10', 'd12', 'd12+1'];
var Attribute = function (initialValue) {
    this.factor = initialValue ? scale.indexOf(initialValue) : 0;
    Object.defineProperty(this, 'value', {
        get: function () {
            return scale[this.factor];
        }
    });
};

Attribute.prototype.increase = function () {
    return scale[++this.factor];
};
Attribute.prototype.decrease = function () {
    return scale[--this.factor];
};
module.exports = Attribute;
},{}],2:[function(require,module,exports){
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
},{"./Attribute":1,"./Rank":4}],3:[function(require,module,exports){
var Level = function (value, name) {
    this.value = value;
    this.name = name;
};

module.exports = Level;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
        Rank: require('./Rank')
    };
}));
},{"./Character":2,"./Rank":4}]},{},[1,2,3,4,5])