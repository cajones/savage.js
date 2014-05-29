/*global describe, it*/
var expect = require('expect.js');

var RankRequirement = require('../../src/Requirements/RankRequirement'),
    Character = require('../../src/Character'),
    Rank = require('../../src/Rank'),
    Edge =  require('../../src/Edge');

describe('Given I have a rank requirement for Novice', function () {
    describe('When i check if is met with a Novice character', function () {
        it('should be true', function () {
            var requirement  = new RankRequirement('Novice'),
                character = new Character();

            character.rank = Rank.Novice();
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a non-Novice character', function () {
        it('should be false', function () {
            var requirement  = new RankRequirement('Novice'),
                character = new Character();

            character.rank = Rank.Seasoned();
            expect(requirement.isMet(character)).to.be(false);
            character.rank = Rank.Legendary();
            expect(requirement.isMet(character)).to.be(false);
        });
    });
});

describe('creating a requirement by rank', function () {
    it('should provide a RankRequirement', function (){
        var requirement = Edge.requires('Seasoned');
        expect(requirement).to.be.a(RankRequirement);
        expect(requirement.rank.name).to.be('Seasoned');
    });
});
