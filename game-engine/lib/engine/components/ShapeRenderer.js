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
exports.ShapeRenderer = void 0;
var Component_1 = require("./Component");
var Transform_1 = require("./Transform");
var Circle_1 = require("../geometry/Circle");
var Rectangle_1 = require("../geometry/Rectangle");
var ShapeRenderer = /** @class */ (function (_super) {
    __extends(ShapeRenderer, _super);
    /**
     *
     */
    function ShapeRenderer(owner) {
        var _this = _super.call(this, owner) || this;
        // add component to renderer. 
        _this._owner.scene.renderer.add(_this);
        return _this;
    }
    //********************************************
    //**public:
    //********************************************
    /**
     *
     */
    ShapeRenderer.prototype.initialize = function () {
        this._transform = this._owner.getComponent(Transform_1.Transform);
    };
    /**
     *
     * @param ctx
     */
    ShapeRenderer.prototype.render = function (renderer, camera) {
        var screenPos = camera.getScreenPosition(this._owner);
        if (this.shape instanceof Circle_1.Circle) {
            var c = new Circle_1.Circle(this.shape.r * this._transform.scale.x);
            renderer.renderCircle(screenPos.x, screenPos.y, c, this.color);
        }
        else if (this.shape instanceof Rectangle_1.Rectangle) {
            var rect = new Rectangle_1.Rectangle(this.shape.width * this._transform.scale.x, this.shape.heigth * this._transform.scale.y);
            renderer.renderRect(screenPos.x, screenPos.y, this.shape, this.color);
        }
        /*else if (this.shape instanceof Line) {
            renderer.renderLine(this.shape, this.color);
        }*/
    };
    /**
     * Remove component from renderer.
     */
    ShapeRenderer.prototype.dispose = function () {
        this._owner.scene.renderer.remove(this);
        _super.prototype.dispose.call(this);
    };
    return ShapeRenderer;
}(Component_1.Component));
exports.ShapeRenderer = ShapeRenderer;
//# sourceMappingURL=ShapeRenderer.js.map