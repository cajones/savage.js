/*global describe, it*/
var expect = require('expect.js');

var RankRequirement = require('../../src/Requirements/RankRequirement'),
    Character = require('../../src/Character'),
    Rank = require('../../src/Rank'),
    Edge =  require('../../src/Edge');

describe('Given I have a rank requirement', function () {
    describe('When i check if is met with an equal rank character', function () {
        it('should be true', function () {
            var requirement  = new RankRequirement('Seasoned'),
                character = new Character();

            character.rank = Rank.Seasoned();
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a less than rank character', function () {
        it('should be false', function () {
            var requirement  = new RankRequirement('Seasoned'),
                character = new Character();

            character.rank = Rank.Novice();
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with a higher rank character', function () {
        it('should be true', function () {
            var requirement  = new RankRequirement('Seasoned'),
                character = new Character();

            character.rank = Rank.Heroic();
            expect(requirement.isMet(character)).to.be(true);
        });
    });
});

describe('Given I have a rank requirement for Novice using a single letter', function () {
    describe('When i check if is met with a Novice character', function () {
        it('should be true', function () {
            var requirement  = new RankRequirement('N'),
                character = new Character();

            character.rank = Rank.Novice();
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a non-Novice character', function () {
        it('should be true', function () {
            var requirement  = new RankRequirement('N'),
                character = new Character();

            character.rank = Rank.Seasoned();
            expect(requirement.isMet(character)).to.be(true);
            character.rank = Rank.Legendary();
            expect(requirement.isMet(character)).to.be(true);
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