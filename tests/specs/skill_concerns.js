/*global describe, it*/
var expect = require('expect.js');

var Skill = require('../../src/Skill');

describe('Given I have a Skill at d4', function () {
    describe('When i increase it', function () {
        it('should become d6', function () {
            var skill = new Skill('d4');
            skill.increase();
            expect(skill.value).to.be('d6');
        });
    });
    describe('When i decrease it', function () {
        it('should remain d4', function () {
            var skill = new Skill('d4');
            skill.decrease();
            expect(skill.value).to.be('d4');
        });
    });
});

describe('Given I have a Skill at d6', function () {
    describe('When i increase it', function () {
        it('should become d8', function () {
            var skill = new Skill('d6');
            skill.increase();
            expect(skill.value).to.be('d8');
        });
    });
    describe('When i decrease it', function () {
        it('should become d4', function () {
            var skill = new Skill('d6');
            skill.decrease();
            expect(skill.value).to.be('d4');
        });
    });
});

describe('Given I have a Skill at d8', function () {
    describe('When i increase it', function () {
        it('should become d10', function () {
            var skill = new Skill('d8');
            skill.increase();
            expect(skill.value).to.be('d10');
        });
    });
    describe('When i decrease it', function () {
        it('should become d6', function () {
            var skill = new Skill('d8');
            skill.decrease();
            expect(skill.value).to.be('d6');
        });
    });
});

describe('Given I have a Skill at d10', function () {
    describe('When i increase it', function () {
        it('should become d12', function () {
            var skill = new Skill('d10');
            skill.increase();
            expect(skill.value).to.be('d12');
        });
    });
    describe('When i decrease it', function () {
        it('should become d8', function () {
            var skill = new Skill('d10');
            skill.decrease();
            expect(skill.value).to.be('d8');
        });
    });
});

describe('Given I have a Skill at d12', function () {
    describe('When i increase it', function () {
        it('should become d12+1', function () {
            var skill = new Skill('d12');
            skill.increase();
            expect(skill.value).to.be('d12+1');
        });
    });
    describe('When i decrease it', function () {
        it('should become d10', function () {
            var skill = new Skill('d12');
            skill.decrease();
            expect(skill.value).to.be('d10');
        });
    });
});