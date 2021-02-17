"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var UpdateManager_1 = require("../update/UpdateManager");
var RenderManager_1 = require("../rendering/RenderManager");
/**
 * A scene that can update and render game objects.
 */
var Scene = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function Scene(game) {
        this._gameObjects = [];
        this._game = game;
        this._updateManager = new UpdateManager_1.UpdateManager();
        this._rendererManager = new RenderManager_1.RenderManager(game.canvas, this);
    }
    Object.defineProperty(Scene.prototype, "game", {
        //********************************************
        //**getters:
        //********************************************
        get: function () { return this._game; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "updateManager", {
        get: function () { return this._updateManager; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "renderer", {
        get: function () { return this._rendererManager; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "camera", {
        get: function () { return this._camera; },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    /**
     * Adds a game object to the scene
     *
     * @param {GameObject} gameobject
     */
    Scene.prototype.addGameObject = function (gameobject) {
        this._gameObjects.push(gameobject);
    };
    /**
     * Sets the main camera and adds camera to scene
     * @param {Camera} camera
     */
    Scene.prototype.setMainCamera = function (camera) {
        this._camera = camera;
        this._rendererManager.camera = camera;
        this.addGameObject(camera);
    };
    /**
     * Initializes the scene and all
     * it's components.
     *
     * @param {Game} game
     */
    Scene.prototype.initialize = function (game) {
        this._gameObjects.forEach(function (x) { return x.initialize(); });
    };
    /**
     * Pause scene
     * @param entity
     */
    Scene.prototype.pause = function (entity) {
        //TODO: pause rendering and updating    
    };
    /**
     * Resume scene.
     * @param entity
     */
    Scene.prototype.resume = function (entity) {
        //TODO: resume rendering and updating
    };
    /**
     * Dispose scene and all its components.
     * @param {Game} entity
     */
    Scene.prototype.dispose = function (entity) {
        this._gameObjects.forEach(function (x) { return x.dispose(); });
    };
    return Scene;
}());
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map