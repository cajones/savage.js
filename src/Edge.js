var Edge = function (name, requirements, effect) {
    Object.defineProperty(this, 'name', {
        value: name
    });
    Object.defineProperty(this, 'effect', {
        value: effect
    });
};

module.exports = Edge;