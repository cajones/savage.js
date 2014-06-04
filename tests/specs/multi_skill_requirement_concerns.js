/*global describe, it*/
var expect = require('expect.js');

var MultiSkillRequirement = require('../../src/Requirements/MultiSkillRequirement'),
    Character = require('../../src/Character'),
    Skill = require('../../src/Skill'),
    Edge = require('../../src/Edge');

describe('Given I have a multi skill requirement for a number of skills at a specific value', function () {
    describe('When i check if is met with an unskilled character', function () {
        it('should be false', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();

            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with a misskilled character', function () {
        it('should be false', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();

            character.learn(new Skill('d10', 'Fighting'));
            character.learn(new Skill('d10', 'Shooting'));
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an under skilled character', function () {
        it('should be false', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();

            character.learn(new Skill('d6', 'Knowledge (Physics)'));
            character.learn(new Skill('d6', 'Knowledge (Chemistry)'));
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an partially skilled character', function () {
        it('should be false', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();


            character.learn(new Skill('d8', 'Knowledge (Physics)'));
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an equal skilled character', function () {
        it('should be true', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();

            character.learn(new Skill('d8', 'Knowledge (Physics)'));
            character.learn(new Skill('d8', 'Knowledge (Chemistry)'));
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a superior skilled character', function () {
        it('should be true', function () {
            var requirement  = new MultiSkillRequirement('d8', /^Knowledge/, 2),
                character = new Character();

            character.learn(new Skill('d10', 'Knowledge (Physics)'));
            character.learn(new Skill('d10', 'Knowledge (Chemistry)'));
            character.learn(new Skill('d10', 'Knowledge (Biology)'));
            expect(requirement.isMet(character)).to.be(true);
        });
    });
});