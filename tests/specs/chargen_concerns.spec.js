/*global describe, it*/
var expect = require('expect.js');
var Savage = require('../../src/savage');
var Savage = require('../../src/savage');

describe('creating a new character', function () {
    it('should provide an character with basic attributes', function () {
        var character = new Savage.Character();
        expect(character.agility.value).to.be('d4');
        expect(character.smarts.value).to.be('d4');
        expect(character.spirit.value).to.be('d4');
        expect(character.strength.value).to.be('d4');
        expect(character.vigor.value).to.be('d4');
    });

    it('should provide an character with a Novice rank', function () {
        var character = new Savage.Character();
        expect(character.rank.name).to.be('Novice');
        expect(character.rank.xp).to.be(0);
    });

    it('should provide an character with no skills', function () {
        var character = new Savage.Character();
        expect(character.skills.length).to.be(0);
    });

    it('should provide an character with no edges', function () {
        var character = new Savage.Character();
        expect(character.edges.length).to.be(0);
    });
});