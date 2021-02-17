"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var Vector2D_1 = require("../math/Vector2D");
var Line = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Line(p1, p2) {
        this._p1 = new Vector2D_1.Vector2D(p1.x, p1.y);
        this._p2 = new Vector2D_1.Vector2D(p2.x, p2.y);
        this._dir = this._p2.subtract(this._p1);
        this._length = this._dir.length();
    }
    Object.defineProperty(Line.prototype, "p1", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._p1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "p2", {
        get: function () { return this._p2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "direction", {
        get: function () { return this._dir; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "length", {
        get: function () { return this._length; },
        enumerable: false,
        configurable: true
    });
    return Line;
}());
exports.Line = Line;
//# sourceMappingURL=Line.js.map