/*global describe, it*/
var expect = require('expect.js');
var Rank = require('../../src/Rank');

describe('a Rank below 20', function () {
    it('should provide a Novice', function () {
        var rank = new Rank(0);
        expect(rank.name).to.be('Novice');
    });
    it('should provide a Novice', function () {
        var rank = new Rank(19);
        expect(rank.name).to.be('Novice');
    });
});

describe('a Rank 20 - 39', function () {
    it('should provide a Seasoned', function () {
        var rank = new Rank(20);
        expect(rank.name).to.be('Seasoned');
    });
    it('should provide a Seasoned', function () {
        var rank = new Rank(39);
        expect(rank.name).to.be('Seasoned');
    });
});

describe('a Rank 40 - 59', function () {
    it('should provide a Veteran', function () {
        var rank = new Rank(40);
        expect(rank.name).to.be('Veteran');
    });
    it('should provide a Veteran', function () {
        var rank = new Rank(59);
        expect(rank.name).to.be('Veteran');
    });
});

describe('a Rank 60 - 79', function () {
    it('should provide a Heroic', function () {
        var rank = new Rank(60);
        expect(rank.name).to.be('Heroic');
    });
    it('should provide a Heroic', function () {
        var rank = new Rank(79);
        expect(rank.name).to.be('Heroic');
    });
});

describe('a Rank 80+', function () {
    it('should provide a Legendary', function () {
        var rank = new Rank(80);
        expect(rank.name).to.be('Legendary');
    });
    it('should provide a Legendary', function () {
        var rank = new Rank(9999);
        expect(rank.name).to.be('Legendary');
    });
});

