/*global describe, it*/
var expect = require('expect.js');

var Edge = require('../../src/Edge'),
    Edges = require('../../src/Edges'),
    Edges = require('../../src/Edges'),
    Savage = require('../../src/Savage');

describe('Given I have an array of Edges', function () {
    describe('When i extend the Edges', function () {
        it('should include the imported Edges', function () {
            var importedEdges = [
                new Edge('Beast Bond', [Edge.requires('Novice')], 'Character may spend bennies for his animals'),
                new Edge('Beast Master', [Edge.requires('Novice'), Edge.requires('smarts', 'd8')], 'You gain an animal companion')
            ];
            Edges.extend(importedEdges);
            expect(Edges.contains('Beast Bond')).to.be(true);
            expect(Edges.contains('Beast Master')).to.be(true);
        });
    });
});



describe('Given I have an Edges with requirements and a character who meets those requirements', function () {
    describe('When check for eligbility', function () {
        it('should be true', function () {
            var edge = new Edge('New Edge', [Edge.requires('Seasoned'), Edge.requires('agility', 'd10'), Edge.requires('Fighting', 'd8')]),
                character = new Savage.Character();

            character.rank = Savage.Rank.Seasoned();
            character.agility.increaseTo('d10');
            character.learn(Savage.Skill.Fighting().increaseTo('d8'));

            expect(edge.isAvailableTo(character)).to.be(true);
        });
    });
});