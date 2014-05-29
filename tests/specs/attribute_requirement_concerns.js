/*global describe, it*/
var expect = require('expect.js');

var AttributeRequirement = require('../../src/Requirements/AttributeRequirement'),
    Character = require('../../src/Character'),
    Attribute = require('../../src/Attribute'),
    Edge = require('../../src/Edge');

describe('Given I have an attribute requirement for a specific value', function () {
    describe('When i check if is met with an lesser traited character', function () {
        it('should be false', function () {
            var requirement  = new AttributeRequirement(Attribute.Agility, 'd8'),
                character = new Character();

            character.agility.increaseTo('d6');
            expect(requirement.isMet(character)).to.be(false);
        });
    });

    describe('When i check if is met with an equal traited character', function () {
        it('should be true', function () {
            var requirement  = new AttributeRequirement(Attribute.Agility, 'd8'),
                character = new Character();

            character.agility.increaseTo('d8');
            expect(requirement.isMet(character)).to.be(true);
        });
    });

    describe('When i check if is met with a superior traited character', function () {
        it('should be true', function () {
            var requirement  = new AttributeRequirement(Attribute.Agility, 'd8'),
                character = new Character();

            character.agility.increaseTo('d10');
            expect(requirement.isMet(character)).to.be(true);
        });
    });
});

describe('creating a requirement by attribute name and value', function () {
    it('should provide an AttributeRequirement', function (){
        var requirement = Edge.requires(Attribute.Agility, 'd8');
        expect(requirement).to.be.an(AttributeRequirement);
        expect(requirement.attribute).to.be(Attribute.Agility);
        expect(requirement.value.effect).to.be(8);
    });
});