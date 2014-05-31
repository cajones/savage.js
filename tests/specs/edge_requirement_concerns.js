/*global describe, it*/
var expect = require('expect.js');

var EdgeRequirement = require('../../src/Requirements/EdgeRequirement'),
    Character = require('../../src/Character'),
    Rank = require('../../src/Rank'),
    Edge =  require('../../src/Edge');

describe('Given I have an edge requirement for another Edge', function () {
    describe('When i check if is met with a character without the Edge', function () {
        it('should be false', function () {
            var requirement  = new EdgeRequirement('Arcane Resistance'),
                character = new Character();

            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with a character with the Edge', function () {
        it('should be false', function () {
            var requirement  = new EdgeRequirement('Arcane Resistance'),
                character = new Character();

            character.spirit.increaseTo('d8');
            character.edges.add(new Edge('Arcane Resistance', [Edge.requires('Novice'), Edge.requires('spirit', 'd8')]))
            
            expect(requirement.isMet(character)).to.be(true);
        });
    });
});