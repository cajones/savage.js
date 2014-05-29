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

Rank.prototype.increase = function (xp) {
    this.xp += Math.max(0, parseInt(xp));
    return this;
};

Rank.Novice = function () {
    return new Rank(0);
};

Rank.Seasoned = function () {
    return new Rank(20);
};

Rank.Veteran = function () {
    return new Rank(40);
};

Rank.Heroic = function () {
    return new Rank(60);
};

Rank.Legendary = function () {
    return new Rank(80);
};

Rank.create = function (name) {
    var isRank = /Novice|Seasoned|Veteran|Heroic|Legendary/i;
    if(isRank.test(name)) {
        return Rank[name].call();
    }
    return Rank.Novice();
};
module.exports = Rank;