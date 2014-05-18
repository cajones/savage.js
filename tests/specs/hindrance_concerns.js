/*global describe, it*/
var expect = require('expect.js');

var Hindrance = require('../../src/Hindrance');

describe('Given I have a Hindrance', function () {
    describe('When i create it', function () {
        it('should have a name', function () {
            var hindrance = new Hindrance('All Thumbs', 'Minor');
            expect(hindrance.name).to.be('All Thumbs');
        });

        it('should have a cost', function () {
           var hindrance = new Hindrance('All Thumbs', 'Minor');
            expect(hindrance.cost).to.be('Minor'); 
        });
    });
});

