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
exports.Behaviour = void 0;
var Component_1 = require("./Component");
var Behaviour = /** @class */ (function (_super) {
    __extends(Behaviour, _super);
    //********************************************
    //**ctor:
    //********************************************
    function Behaviour(owner) {
        var _this = _super.call(this, owner) || this;
        // add component to update manager.
        owner.scene.updateManager.add(_this);
        _this._input = owner.scene.game.input;
        return _this;
    }
    //********************************************
    //** 
    //********************************************
    /**
     * Remove component from update manager
     */
    Behaviour.prototype.dispose = function () {
        this._owner.scene.updateManager.remove(this);
        _super.prototype.dispose.call(this);
    };
    return Behaviour;
}(Component_1.Component));
exports.Behaviour = Behaviour;
//# sourceMappingURL=Behaviour.js.map