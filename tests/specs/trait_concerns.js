/*global describe, it*/
var expect = require('expect.js');

var Trait = require('../../src/Trait');

describe('Given I have a Trait at d4', function () {
    describe('When i increase it', function () {
        it('should become d6', function () {
            var trait = new Trait('d4');
            trait.increase();
            expect(trait.value).to.be('d6');
        });
    });
    describe('When i decrease it', function () {
        it('should remain d4', function () {
            var trait = new Trait('d4');
            trait.decrease();
            expect(trait.value).to.be('d4');
        });
    });
    describe('When i get the effect', function () {
        it('should provide the number of faces of the die', function () {
            var trait = new Trait('d4');
            expect(trait.effect).to.be(4);
        });
    });
});

describe('Given I have a Trait at d6', function () {
    describe('When i increase it', function () {
        it('should become d8', function () {
            var trait = new Trait('d6');
            trait.increase();
            expect(trait.value).to.be('d8');
        });
    });
    describe('When i decrease it', function () {
        it('should become d4', function () {
            var trait = new Trait('d6');
            trait.decrease();
            expect(trait.value).to.be('d4');
        });
    });
    describe('When i get the effect', function () {
        it('should provide the number of faces of the die', function () {
            var trait = new Trait('d6');
            expect(trait.effect).to.be(6);
        });
    });
});

describe('Given I have a Trait at d8', function () {
    describe('When i increase it', function () {
        it('should become d10', function () {
            var trait = new Trait('d8');
            trait.increase();
            expect(trait.value).to.be('d10');
        });
    });
    describe('When i decrease it', function () {
        it('should become d6', function () {
            var trait = new Trait('d8');
            trait.decrease();
            expect(trait.value).to.be('d6');
        });
    });
    describe('When i get the effect', function () {
        it('should provide the number of faces of the die', function () {
            var trait = new Trait('d8');
            expect(trait.effect).to.be(8);
        });
    });
});

describe('Given I have a Trait at d10', function () {
    describe('When i increase it', function () {
        it('should become d12', function () {
            var trait = new Trait('d10');
            trait.increase();
            expect(trait.value).to.be('d12');
        });
    });
    describe('When i decrease it', function () {
        it('should become d8', function () {
            var trait = new Trait('d10');
            trait.decrease();
            expect(trait.value).to.be('d8');
        });
    });
    describe('When i get the effect', function () {
        it('should provide the number of faces of the die', function () {
            var trait = new Trait('d10');
            expect(trait.effect).to.be(10);
        });
    });
});

describe('Given I have a Trait at d12', function () {
    describe('When i increase it', function () {
        it('should become d12+1', function () {
            var trait = new Trait('d12');
            trait.increase();
            expect(trait.value).to.be('d12+1');
        });
    });
    describe('When i decrease it', function () {
        it('should become d10', function () {
            var trait = new Trait('d12');
            trait.decrease();
            expect(trait.value).to.be('d10');
        });
    });
    describe('When i get the effect', function () {
        it('should provide the number of faces of the die', function () {
            var trait = new Trait('d12');
            expect(trait.effect).to.be(12);
        });
    });
});