var scale = ['d4', 'd6', 'd8', 'd10', 'd12', 'd12+1'];
var Attribute = function (initialValue) {
    this.factor = initialValue ? scale.indexOf(initialValue) : 0;
    Object.defineProperty(this, 'value', {
        get: function () {
            return scale[this.factor];
        }
    });
};

Attribute.prototype.increase = function () {
    return scale[++this.factor];
};
Attribute.prototype.decrease = function () {
    return scale[--this.factor];
};
module.exports = Attribute;