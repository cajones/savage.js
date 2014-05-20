/*global describe, it*/
var expect = require('expect.js');

var Hindrance = require('../../src/Hindrance');

describe('Given I have a minor Hindrance', function () {
    describe('When i create it', function () {
        it('should have a name', function () {
            var hindrance = new Hindrance('All Thumbs', 'Minor', '-2 to Repair');
            expect(hindrance.name).to.be('All Thumbs');
        });

        it('should have a severity', function () {
           var hindrance = new Hindrance('All Thumbs', 'Minor', '-2 to Repair');
            expect(hindrance.severity).to.be('Minor');
        });

        it('should have an effect', function () {
           var hindrance = new Hindrance('All Thumbs', 'Minor', '-2 to Repair');
            expect(hindrance.effect).to.be('-2 to Repair');
        });

        it('should not be major', function () {
           var hindrance = new Hindrance('All Thumbs', 'Minor', '-2 to Repair');
            expect(hindrance.isMajor).to.not.be(true);
        });
    });
});

describe('Given I have a major Hindrance', function () {
    describe('When i create it', function () {
        it('should be major', function () {
           var hindrance = new Hindrance('One Eye', 'Major', '-2 skills');
            expect(hindrance.isMajor).to.be(true);
        });
    });
});

