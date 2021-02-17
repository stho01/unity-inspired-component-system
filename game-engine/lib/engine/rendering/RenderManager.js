"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderManager = void 0;
var Canvas2DRenderer_1 = require("./Canvas2DRenderer");
var RenderManager = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function RenderManager(canvas, scene) {
        this._renderables = new Set();
        this._renderer = new Canvas2DRenderer_1.Canvas2DRenderer(canvas);
        this._scene = scene;
    }
    Object.defineProperty(RenderManager.prototype, "camera", {
        //********************************************
        //**public:
        //********************************************
        get: function () { return this._camera; },
        set: function (camera) { this._camera = camera; },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    RenderManager.prototype.add = function (updateable) {
        if (updateable == null) {
            throw new Error("Updateable cannot be null er undefined");
        }
        this._renderables.add(updateable);
    };
    /**
     *
     * @param updateable
     */
    RenderManager.prototype.remove = function (updateable) {
        if (updateable == null) {
            throw new Error("Cannot delete updateable cannot be null er undefined");
        }
        this._renderables.delete(updateable);
    };
    /**
     *
     * @param deltaTime
     */
    RenderManager.prototype.render = function () {
        var _this = this;
        if (this._camera != null) {
            this._renderables.forEach(function (x) { return x.render(_this._renderer, _this._camera); });
        }
        else {
            this._renderNoCameraMessage();
        }
    };
    //********************************************************************************
    //** private:
    //********************************************************************************
    RenderManager.prototype._renderNoCameraMessage = function () {
        var viewPort = this._scene.game.viewPort;
        var txt = "No cameras rendering";
        var txtWidth = this._renderer.getTextWidth(txt);
        var x = viewPort.width / 2 - txtWidth / 2;
        var y = viewPort.height / 2;
        this._renderer.renderText(txt, x, y);
    };
    return RenderManager;
}());
exports.RenderManager = RenderManager;
//# sourceMappingURL=RenderManager.js.map