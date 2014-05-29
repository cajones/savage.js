/*global describe, it*/
var expect = require('expect.js');

var SkillRequirement = require('../../src/Requirements/SkillRequirement'),
    Character = require('../../src/Character'),
    Skill = require('../../src/Skill');

describe('Given I have a skill requirement for a specific value', function () {
    describe('When i check if is met with an unskilled character', function () {
        it('should be false', function () {
            var requirement  = new SkillRequirement(Skill.Fighting().increaseTo('d8')),
                character = new Character();

            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an lesser skilled character', function () {
        it('should be false', function () {
            var requirement  = new SkillRequirement(Skill.Fighting().increaseTo('d8')),
                character = new Character();

            character.learn(Skill.Fighting().increaseTo('d6'));
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an equal skilled character', function () {
        it('should be true', function () {
            var requirement  = new SkillRequirement(Skill.Fighting().increaseTo('d8')),
                character = new Character();

            character.learn(Skill.Fighting().increaseTo('d8'));
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a superior skilled character', function () {
        it('should be true', function () {
            var requirement  = new SkillRequirement(Skill.Fighting().increaseTo('d10')),
                character = new Character();

            character.learn(Skill.Fighting().increaseTo('d10'));
            expect(requirement.isMet(character)).to.be(true);
        });
    });
});
