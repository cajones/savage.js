var RankRequirement = function (rank) {
    this.rank = rank;
};

RankRequirement.prototype.isMet = function (character) {
    var caseInsensitiveMatch = new  RegExp('^' + this.rank + '$');
    return caseInsensitiveMatch.test(character.rank.name);
};

module.exports = RankRequirement;