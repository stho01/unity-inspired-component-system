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
exports.Camera = void 0;
var gameobject_1 = require("./gameobject");
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get screen position
     *
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    Camera.prototype.getScreenPosition = function (gameObject) {
        var viewPort = this.scene.game.viewPort;
        var cameraOrigin = this.transform.position.flip().add(viewPort.width / 2, viewPort.height / 2);
        var worldPos = this.getWorldPosition(gameObject);
        var offset = cameraOrigin.add(worldPos);
        return (offset);
    };
    /**
     * Gets the world position of the game object's position.
     *
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    Camera.prototype.getWorldPosition = function (gameObject) {
        var worldPos = gameObject.transform.position;
        if (gameObject.parent != null) {
            worldPos = worldPos.add(this.getWorldPosition(gameObject.parent));
        }
        return worldPos;
    };
    return Camera;
}(gameobject_1.GameObject));
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map