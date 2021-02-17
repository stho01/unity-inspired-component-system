"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Circle(radius) {
        this._r = radius;
    }
    Object.defineProperty(Circle.prototype, "r", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._r; },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map