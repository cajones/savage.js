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

    it('should provide an character with basic parry', function () {
        var character = new Savage.Character();
        expect(character.parry).to.be(2);
    });

    it('should provide an character with basic toughness', function () {
        var character = new Savage.Character();
        expect(character.toughness).to.be(4);
    });

    it('should provide an character with basic charisma', function () {
        var character = new Savage.Character();
        expect(character.charisma).to.be(0);
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

describe('calculating attribute points', function () {
    it('new characters should be zero', function () {
        var character = new Savage.Character();
        expect(character.getAttributePoints()).to.be(0);
    });

    it('every attribute increase should be one more attribute point', function () {
        var character = new Savage.Character();
        character.agility.increase();
        character.strength.increase();
        character.agility.increase();
        expect(character.getAttributePoints()).to.be(3);
    });
});

describe('calculating skill points', function () {
    it('it start new characters with zero', function () {
        var character = new Savage.Character();
        expect(character.getSkillPoints()).to.be(0);
    });

    it('should cost one skill point to learn one skill', function () {
        var character = new Savage.Character();
        character.learn(Savage.Skill.Shooting());
        expect(character.getSkillPoints()).to.be(1);
    });

    it('should cost one skill point to learn or increase one skill up to the linked attribute factor', function () {
        var character = new Savage.Character();
        character.agility = new Savage.Attribute('d8');
        character.learn(new Savage.Skill('d8', 'Shooting', Savage.Attribute.Agility));
        expect(character.getSkillPoints()).to.be(3);
    });

    it('should cost two skill points to learn or increase above the link attribute factor', function () {
        var character = new Savage.Character();
        character.agility = new Savage.Attribute('d8');
        character.learn(new Savage.Skill('d10', 'Shooting', Savage.Attribute.Agility));
        expect(character.getSkillPoints()).to.be(5);
    });
});