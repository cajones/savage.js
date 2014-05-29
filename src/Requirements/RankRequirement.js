var Rank = require('../Rank');

var RankRequirement = function (rank) {
    if(typeof rank === 'string') {
        this.rank = Rank.create(rank);
    } else {
        this.rank = rank;
    }
};

RankRequirement.prototype.isMet = function (character) {
    var caseInsensitiveMatch = new  RegExp('^' + this.rank.name + '$', 'i');
    return caseInsensitiveMatch.test(character.rank.name);
};

module.exports = RankRequirement;