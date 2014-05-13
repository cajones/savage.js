/*global describe, it*/
var expect = require('expect.js');
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

describe('a character', function () {
    it('can tell if it is unskilled', function () {
        var character = new Savage.Character();
        expect(character.isUnskilled('Boating')).to.be(true);
    });
    it('should be able to learn a new skill', function () {
        var character = new Savage.Character();
        var boating = new Savage.Skill('d4', 'Boating', Savage.Attribute.Agility);
        character.learn(boating);
        expect(character.hasSkill(boating)).to.be(true);
        expect(character.skills.Boating).to.be(boating);
    });
    it('can tell if it has a skill (object)', function () {
        var character = new Savage.Character();
        var boating = new Savage.Skill('d4', 'Boating', Savage.Attribute.Agility);
        character.learn(boating);
        expect(character.hasSkill(boating)).to.be(true);
    });
    it('can tell if it has a skill (name)', function () {
        var character = new Savage.Character();
        var boating = new Savage.Skill('d4', 'Boating', Savage.Attribute.Agility);
        character.learn(boating);
        expect(character.hasSkill('Boating')).to.be(true);
    });
});