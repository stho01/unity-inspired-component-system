"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
var Vector2D_1 = require("../math/Vector2D");
var Component_1 = require("./Component");
var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = Vector2D_1.Vector2D.Zero;
        _this._rotation = Vector2D_1.Vector2D.Zero;
        _this._scale = Vector2D_1.Vector2D.One;
        return _this;
    }
    Object.defineProperty(Transform.prototype, "position", {
        get: function () { return this._position; },
        set: function (v) { this._position = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (v) { this._rotation = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () { return this._scale; },
        set: function (v) { this._scale = v; },
        enumerable: false,
        configurable: true
    });
    //********************************************************************************
    //** public:
    //********************************************************************************
    /**
     * Translate the position in the direction of the vector.
     *
     * @param {Vector2D} vec
     */
    Transform.prototype.translate = function (vec, y) {
        if (typeof vec === "number") {
            this._position = this._position.add(vec, y);
        }
        else {
            this._position = this._position.add(vec);
        }
    };
    return Transform;
}(Component_1.Component));
exports.Transform = Transform;
//# sourceMappingURL=Transform.js.map