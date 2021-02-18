/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/components/PlayerInputBehaviour.ts":
/*!*****************************************************!*\
  !*** ./src/game/components/PlayerInputBehaviour.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerInputBehaviour = void 0;
var game_engine_1 = __webpack_require__(/*! game-engine */ "../game-engine/lib/index.js");
var PlayerInputBehaviour = /** @class */ (function (_super) {
    __extends(PlayerInputBehaviour, _super);
    function PlayerInputBehaviour() {
        //********************************************************************************
        //** attributes:
        //********************************************************************************
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thrust = 100;
        _this._force = game_engine_1.Vector2D.Zero;
        _this._velocity = game_engine_1.Vector2D.Zero;
        return _this;
    }
    //********************************************************************************
    //** public:
    //********************************************************************************
    /**
     * Initialize component
     */
    PlayerInputBehaviour.prototype.initialize = function () {
        this._transform = this._owner.getComponent(game_engine_1.Transform);
    };
    /**
     * Update component
     * @param {number} deltaTime
     */
    PlayerInputBehaviour.prototype.update = function (deltaTime) {
        if (this._input.isKeyDown(game_engine_1.KeyCode.A)) {
            this._applyForce(game_engine_1.Vector2D.Left.multiply(this.thrust));
        }
        if (this._input.isKeyDown(game_engine_1.KeyCode.D)) {
            this._applyForce(game_engine_1.Vector2D.Right.multiply(this.thrust));
        }
        if (this._input.isKeyDown(game_engine_1.KeyCode.W)) {
            this._applyForce(game_engine_1.Vector2D.Up.multiply(this.thrust));
        }
        if (this._input.isKeyDown(game_engine_1.KeyCode.S)) {
            this._applyForce(game_engine_1.Vector2D.Down.multiply(this.thrust));
        }
        this._applyFriction();
        this._applyDrag();
        var acceleration = this._force.multiply(deltaTime);
        this._velocity = this._velocity.add(acceleration);
        this._transform.translate(this._velocity);
        this._force = game_engine_1.Vector2D.Zero;
    };
    PlayerInputBehaviour.prototype._applyDrag = function () {
        var drag = this._velocity.normalize().multiply(-1);
        var c = 0.1;
        this._applyForce(drag.multiply(this._velocity.lengthSqr() * c));
    };
    PlayerInputBehaviour.prototype._applyFriction = function () {
        var velLength = this._velocity.length();
        var forceLength = this._force.length();
        if (forceLength === 0 && velLength < 0.01 && velLength > -0.01) {
            this._force = this._force.multiply(0);
        }
        else {
            var f = this._velocity.normalize().multiply(-50);
            this._force = this._force.add(f);
        }
    };
    PlayerInputBehaviour.prototype._applyForce = function (force) {
        this._force = this._force.add(force);
    };
    return PlayerInputBehaviour;
}(game_engine_1.Behaviour));
exports.PlayerInputBehaviour = PlayerInputBehaviour;


/***/ }),

/***/ "./src/game/prefab/Box.ts":
/*!********************************!*\
  !*** ./src/game/prefab/Box.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_engine_1 = __webpack_require__(/*! game-engine */ "../game-engine/lib/index.js");
function boxFactory(scene) {
    var box = new game_engine_1.GameObject(scene);
    var render = box.attachComponent(game_engine_1.ShapeRenderer);
    render.shape = new game_engine_1.Rectangle(100, 100);
    render.color = "red";
    return box;
}
exports.default = boxFactory;


/***/ }),

/***/ "./src/game/prefab/Pentagon.ts":
/*!*************************************!*\
  !*** ./src/game/prefab/Pentagon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_engine_1 = __webpack_require__(/*! game-engine */ "../game-engine/lib/index.js");
var pentagonVertices = [];
var angle = (Math.PI * 2) / 5;
for (var i = 0; i < 5; i++) {
    pentagonVertices.push([
        Math.cos(angle) * 50,
        Math.sin(angle) * 50
    ]);
}
function pentagonFactory(scene) {
    var pentagon = new game_engine_1.GameObject(scene);
    var shapeRenderer = pentagon.attachComponent(game_engine_1.ShapeRenderer);
    shapeRenderer.shape = new game_engine_1.Polygon(pentagonVertices);
    shapeRenderer.color = "green";
    return pentagon;
}
exports.default = pentagonFactory;


/***/ }),

/***/ "./src/game/prefab/Player.ts":
/*!***********************************!*\
  !*** ./src/game/prefab/Player.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_engine_1 = __webpack_require__(/*! game-engine */ "../game-engine/lib/index.js");
var PlayerInputBehaviour_1 = __webpack_require__(/*! ../components/PlayerInputBehaviour */ "./src/game/components/PlayerInputBehaviour.ts");
function playerFactory(scene) {
    // create a game object that represents the player.
    var player = new game_engine_1.GameObject(scene);
    // attach a rendering component to player game object.
    var renderer = player.attachComponent(game_engine_1.ShapeRenderer);
    renderer.color = "blue";
    renderer.shape = new game_engine_1.Circle(30);
    // attach a PlayerInputBehaviour component to player.
    player.attachComponent(PlayerInputBehaviour_1.PlayerInputBehaviour);
    return player;
}
exports.default = playerFactory;


/***/ }),

/***/ "../game-engine/lib/abstract/IDisposable.js":
/*!**************************************************!*\
  !*** ../game-engine/lib/abstract/IDisposable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDisposable = void 0;
/**
 * Checks if object is disposable.
 * @param object
 */
function isDisposable(object) {
    return typeof object["dispose"] === "function";
}
exports.isDisposable = isDisposable;
//# sourceMappingURL=IDisposable.js.map

/***/ }),

/***/ "../game-engine/lib/engine/Game.js":
/*!*****************************************!*\
  !*** ../game-engine/lib/engine/Game.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
var Rectangle_1 = __webpack_require__(/*! ./geometry/Rectangle */ "../game-engine/lib/engine/geometry/Rectangle.js");
var Canvas2DRenderer_1 = __webpack_require__(/*! ./rendering/Canvas2DRenderer */ "../game-engine/lib/engine/rendering/Canvas2DRenderer.js");
var InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "../game-engine/lib/engine/input/InputManager.js");
var SceneManager_1 = __webpack_require__(/*! ./scenes/SceneManager */ "../game-engine/lib/engine/scenes/SceneManager.js");
var Game = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Game(options) {
        this._previousDelta = 0;
        this._options = Object.assign({}, _defaultOptions, options);
        this._canvas = document.getElementById("c");
        this._input = new InputManager_1.InputManager();
        this._renderer = new Canvas2DRenderer_1.Canvas2DRenderer(this._canvas);
        this._sceneManager = new SceneManager_1.SceneManager(this);
        this._updateViewPort();
    }
    Object.defineProperty(Game.prototype, "viewPort", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._viewPort; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "input", {
        get: function () { return this._input; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "sceneManager", {
        get: function () { return this._sceneManager; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "canvas", {
        get: function () { return this._canvas; },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    /**
     * Initialize game variables and configs.
     * @param options
     */
    Game.prototype.init = function () {
        this._input.init();
        return this;
    };
    /**
     * Start game loop
     */
    Game.prototype.run = function () {
        this._update(0);
    };
    //********************************************
    //**private:
    //********************************************
    /**
     * Updates the view port.
     */
    Game.prototype._updateViewPort = function () {
        this._viewPort = {
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        };
        this._canvas.width = this._viewPort.width;
        this._canvas.height = this._viewPort.height;
    };
    /**
     * Update and redraw game state.
     *
     * @param now
     */
    Game.prototype._update = function (now) {
        var deltaTime = (now - this._previousDelta) / 1000;
        this._previousDelta = now;
        this._updateViewPort();
        this._sceneManager.update(deltaTime);
        this._render(deltaTime);
        this._input.update();
        requestAnimationFrame(this._update.bind(this));
    };
    /**
     * Clear canvas and render scene.
     *
     * @param dt
     */
    Game.prototype._render = function (dt) {
        var clearRect = new Rectangle_1.Rectangle(this._viewPort.width, this._viewPort.height);
        this._renderer.renderRect(0, 0, clearRect, this._options.clearColor);
        this._sceneManager.renderScene();
    };
    return Game;
}());
exports.Game = Game;
/**
 *
 */
var _defaultOptions = {
    clearColor: "#000000"
};
//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "../game-engine/lib/engine/components/Behaviour.js":
/*!*********************************************************!*\
  !*** ../game-engine/lib/engine/components/Behaviour.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Behaviour = void 0;
var Component_1 = __webpack_require__(/*! ./Component */ "../game-engine/lib/engine/components/Component.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/components/Component.js":
/*!*********************************************************!*\
  !*** ../game-engine/lib/engine/components/Component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Component = void 0;
var Component = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Component(owner) {
        this._owner = owner;
    }
    //********************************************
    //**public:
    //********************************************
    Component.prototype.initialize = function () { };
    Component.prototype.dispose = function () { };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=Component.js.map

/***/ }),

/***/ "../game-engine/lib/engine/components/ShapeRenderer.js":
/*!*************************************************************!*\
  !*** ../game-engine/lib/engine/components/ShapeRenderer.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeRenderer = void 0;
var Component_1 = __webpack_require__(/*! ./Component */ "../game-engine/lib/engine/components/Component.js");
var Transform_1 = __webpack_require__(/*! ./Transform */ "../game-engine/lib/engine/components/Transform.js");
var Circle_1 = __webpack_require__(/*! ../geometry/Circle */ "../game-engine/lib/engine/geometry/Circle.js");
var Rectangle_1 = __webpack_require__(/*! ../geometry/Rectangle */ "../game-engine/lib/engine/geometry/Rectangle.js");
var Polygon_1 = __webpack_require__(/*! ../geometry/Polygon */ "../game-engine/lib/engine/geometry/Polygon.js");
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
        else if (this.shape instanceof Polygon_1.default) {
            renderer.renderPolygon(screenPos.x, screenPos.y, this._owner.transform.rotation.angle(), this.shape);
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

/***/ }),

/***/ "../game-engine/lib/engine/components/Transform.js":
/*!*********************************************************!*\
  !*** ../game-engine/lib/engine/components/Transform.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transform = void 0;
var Vector2D_1 = __webpack_require__(/*! ../math/Vector2D */ "../game-engine/lib/engine/math/Vector2D.js");
var Component_1 = __webpack_require__(/*! ./Component */ "../game-engine/lib/engine/components/Component.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/gameobjects/Camera.js":
/*!*******************************************************!*\
  !*** ../game-engine/lib/engine/gameobjects/Camera.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
var gameobject_1 = __webpack_require__(/*! ./gameobject */ "../game-engine/lib/engine/gameobjects/gameobject.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/gameobjects/gameobject.js":
/*!***********************************************************!*\
  !*** ../game-engine/lib/engine/gameobjects/gameobject.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameObject = void 0;
var Transform_1 = __webpack_require__(/*! ../components/Transform */ "../game-engine/lib/engine/components/Transform.js");
var GameObject = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function GameObject(scene, name) {
        this._children = new Set();
        this._scene = scene;
        this._components = new Map();
        this._transform = new Transform_1.Transform(this);
        this._transform = this.attachComponent(Transform_1.Transform);
    }
    Object.defineProperty(GameObject.prototype, "transform", {
        //********************************************
        //** getters and setters:
        //********************************************
        get: function () { return this._transform; },
        set: function (v) { this._transform = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scene", {
        get: function () { return this._scene; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "children", {
        get: function () { return Array.from(this._children); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    GameObject.prototype.initialize = function () {
        this._components.forEach(function (componentOfType) { return componentOfType.forEach(function (x) { return x.initialize(); }); });
    };
    /**
     *
     * @param parent
     */
    GameObject.prototype.setParent = function (parent) {
        if (parent != null) {
            parent.addChild(this);
            this._parent = parent;
        }
        else if (this._parent != null) {
            this._parent.removeChild(this);
            this._parent = null;
        }
    };
    /**
     *
     * @param child
     */
    GameObject.prototype.addChild = function (child) {
        this._children.add(child);
    };
    /**
     *
     * @param child
     */
    GameObject.prototype.removeChild = function (child) {
        this._children.delete(child);
    };
    /**
     *
     * @param type
     */
    GameObject.prototype.attachComponent = function (type) {
        if (type == null) {
            throw new Error("Component cannot be null or undefined");
        }
        if (type === Transform_1.Transform && this._components.has(type)) {
            throw new Error("A game object can only have one Transform component.");
        }
        var component = new type(this);
        var value = this._components.get(type);
        // Component does not exist on game object
        if (value == null) {
            this._components.set(type, [component]);
        }
        //  One or more components exist on game object. Add to existing list.
        else if (Array.isArray(value)) {
            value.push(component);
        }
        return component;
    };
    /**
     *
     * @param type
     * @param instance
     */
    GameObject.prototype.detachComponent = function (type, instance) {
        if (instance === void 0) { instance = null; }
        if (this._components.has(type) === false) {
            return null;
        }
        if (instance != null) {
            var collection = this._components.get(type);
            if (collection.length === 1) {
                var detached = this.getComponent(type);
                this._components.delete(type);
                return [detached];
            }
            else {
                var detached = collection[collection.indexOf(instance)];
                this._components.set(type, collection.slice(collection.indexOf(instance), 1));
                return [detached];
            }
        }
        else {
            var detached = this._components.get(type);
            this._components.delete(type);
            return detached;
        }
    };
    /**
     *
     * @param type
     */
    GameObject.prototype.getComponent = function (type) {
        if (this._components.has(type) === false) {
            return null;
        }
        return this._components.get(type)[0];
    };
    /**
     *
     * @param type
     */
    GameObject.prototype.getComponents = function (type) {
        if (this._components.has(type) === false) {
            return null;
        }
        return this._components.get(type);
    };
    /**
     *
     */
    GameObject.prototype.dispose = function () {
        this._components.forEach(function (componentsOfType) { return componentsOfType.forEach(function (x) { return x.dispose(); }); });
    };
    return GameObject;
}());
exports.GameObject = GameObject;
//# sourceMappingURL=gameobject.js.map

/***/ }),

/***/ "../game-engine/lib/engine/geometry/Circle.js":
/*!****************************************************!*\
  !*** ../game-engine/lib/engine/geometry/Circle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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

/***/ }),

/***/ "../game-engine/lib/engine/geometry/IShape.js":
/*!****************************************************!*\
  !*** ../game-engine/lib/engine/geometry/IShape.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IShape.js.map

/***/ }),

/***/ "../game-engine/lib/engine/geometry/Line.js":
/*!**************************************************!*\
  !*** ../game-engine/lib/engine/geometry/Line.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
var Vector2D_1 = __webpack_require__(/*! ../math/Vector2D */ "../game-engine/lib/engine/math/Vector2D.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/geometry/Polygon.js":
/*!*****************************************************!*\
  !*** ../game-engine/lib/engine/geometry/Polygon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Polygon = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Polygon(vertices) {
        this._vertices = vertices;
    }
    Object.defineProperty(Polygon.prototype, "vertices", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._vertices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Polygon.prototype, "origin", {
        get: function () {
            return this._origin || (this._origin = this._calculateCenterOrigin());
        },
        set: function (origin) { this._origin = origin; },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //** methods:
    //********************************************
    Polygon.prototype._calculateCenterOrigin = function () {
        if (this._vertices.length === 0) {
            return { x: 0, y: 0 };
        }
        var minX = Number.MAX_SAFE_INTEGER;
        var maxX = -Number.MAX_SAFE_INTEGER;
        var minY = Number.MAX_SAFE_INTEGER;
        var maxY = -Number.MAX_SAFE_INTEGER;
        this._vertices.forEach(function (_a) {
            var x = _a[0], y = _a[1];
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        });
        return {
            x: (maxX - minY) / 2,
            y: (maxY - minY) / 2
        };
    };
    return Polygon;
}());
exports.default = Polygon;
//# sourceMappingURL=Polygon.js.map

/***/ }),

/***/ "../game-engine/lib/engine/geometry/Rectangle.js":
/*!*******************************************************!*\
  !*** ../game-engine/lib/engine/geometry/Rectangle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "heigth", {
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ "../game-engine/lib/engine/input/InputManager.js":
/*!*******************************************************!*\
  !*** ../game-engine/lib/engine/input/InputManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputManager = void 0;
var InputManager = /** @class */ (function () {
    function InputManager() {
        //********************************************
        //** attributes:
        //********************************************
        this._currentKeyMap = {};
        this._previousKeyMap = {};
        this._currentMouseBtnMap = {};
        this._previousMouseBtnMap = {};
        this._mousePosition = { x: 0, y: 0 };
    }
    //********************************************
    //** ctor:
    //********************************************
    InputManager.prototype.InputManager = function () {
    };
    //********************************************
    //** public:
    //********************************************
    /**
     *
     */
    InputManager.prototype.init = function () {
        window.addEventListener("mousedown", this._onMouseDownEventHandler.bind(this));
        window.addEventListener("mouseup", this._onMouseUpEventHandler.bind(this));
        window.addEventListener("mousemove", this._onMouseMoveEventHandler.bind(this));
        window.addEventListener("keydown", this._onKeyDownEventHandler.bind(this));
        window.addEventListener("keyup", this._onKeyUpEventHandler.bind(this));
    };
    /**
     *
     */
    InputManager.prototype.dispose = function () {
        window.removeEventListener("mousedown", this._onMouseDownEventHandler.bind(this));
        window.removeEventListener("mouseup", this._onMouseUpEventHandler.bind(this));
        window.removeEventListener("mousemove", this._onMouseMoveEventHandler.bind(this));
        window.removeEventListener("keydown", this._onKeyDownEventHandler.bind(this));
        window.removeEventListener("keyup", this._onKeyUpEventHandler.bind(this));
    };
    /**
     * Gets the mouse position.
     */
    InputManager.prototype.getMousePosition = function (relativeElement) {
        if (relativeElement == null) {
            return this._mousePosition;
        }
        else {
            var bbox = relativeElement.getBoundingClientRect(), relativeX = this._mousePosition.x - bbox.left, relativeY = this._mousePosition.y - bbox.top;
            relativeX = Math.max(0, Math.min(relativeX, bbox.width));
            relativeY = Math.max(0, Math.min(relativeY, bbox.height));
            return {
                x: relativeX,
                y: relativeY
            };
        }
    };
    /**
     * Checks if the given mouse btn is held down.
     *
     * @param btnCode
     */
    InputManager.prototype.isMouseButtonDown = function (btnCode) {
        return this._currentMouseBtnMap[btnCode] === true;
    };
    /**
     * Checks if the given mouse btn is pressed.
     *
     * @param btnCode
     */
    InputManager.prototype.isMouseButtonPressed = function (btnCode) {
        return this._currentMouseBtnMap[btnCode] === true && this._previousMouseBtnMap[btnCode] !== true;
    };
    /**
     *
     * @param btnCode
     */
    InputManager.prototype.isMouseButtonReleased = function (btnCode) {
        return this._currentMouseBtnMap[btnCode] !== true && this._previousMouseBtnMap[btnCode] === true;
    };
    /**
     * Checks if the given key is held down.
     *
     * @param btnCode
     */
    InputManager.prototype.isKeyDown = function (keyCode) {
        return this._currentKeyMap[keyCode] === true;
    };
    /**
    * Checks if the given key is pressed.
    *
    * @param btnCode
    */
    InputManager.prototype.isKeyPressed = function (keyCode) {
        return this._currentKeyMap[keyCode] === true && this._previousKeyMap[keyCode] !== true;
    };
    /**
     * Update input state.
     */
    InputManager.prototype.update = function () {
        this._previousKeyMap = Object.assign({}, this._currentKeyMap);
        this._previousMouseBtnMap = Object.assign({}, this._currentMouseBtnMap);
    };
    //********************************************
    //** private:
    //********************************************
    InputManager.prototype._onMouseDownEventHandler = function (event) {
        this._currentMouseBtnMap[event.button] = true;
    };
    InputManager.prototype._onMouseUpEventHandler = function (event) {
        delete this._currentMouseBtnMap[event.button];
    };
    InputManager.prototype._onKeyDownEventHandler = function (event) {
        event.preventDefault();
        this._currentKeyMap[event.keyCode] = true;
    };
    InputManager.prototype._onKeyUpEventHandler = function (event) {
        delete this._currentKeyMap[event.keyCode];
    };
    InputManager.prototype._onMouseMoveEventHandler = function (event) {
        this._mousePosition.x = event.clientX;
        this._mousePosition.y = event.clientY;
    };
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map

/***/ }),

/***/ "../game-engine/lib/engine/input/KeyCode.js":
/*!**************************************************!*\
  !*** ../game-engine/lib/engine/input/KeyCode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyCode = void 0;
var KeyCode;
(function (KeyCode) {
    // Special keys
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Shift"] = 16] = "Shift";
    KeyCode[KeyCode["Cntr"] = 17] = "Cntr";
    KeyCode[KeyCode["Alt"] = 18] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
    KeyCode[KeyCode["End"] = 35] = "End";
    KeyCode[KeyCode["Home"] = 36] = "Home";
    KeyCode[KeyCode["Arrow_Left"] = 37] = "Arrow_Left";
    KeyCode[KeyCode["Arrow_Up"] = 38] = "Arrow_Up";
    KeyCode[KeyCode["Arrow_Right"] = 39] = "Arrow_Right";
    KeyCode[KeyCode["Arrow_Down"] = 40] = "Arrow_Down";
    KeyCode[KeyCode["PrintScreen"] = 44] = "PrintScreen";
    KeyCode[KeyCode["Insert"] = 45] = "Insert";
    KeyCode[KeyCode["Delete"] = 46] = "Delete";
    // Keys
    KeyCode[KeyCode["Key_0"] = 48] = "Key_0";
    KeyCode[KeyCode["Key_1"] = 49] = "Key_1";
    KeyCode[KeyCode["Key_2"] = 50] = "Key_2";
    KeyCode[KeyCode["Key_3"] = 51] = "Key_3";
    KeyCode[KeyCode["Key_4"] = 52] = "Key_4";
    KeyCode[KeyCode["Key_5"] = 53] = "Key_5";
    KeyCode[KeyCode["Key_6"] = 54] = "Key_6";
    KeyCode[KeyCode["Key_7"] = 55] = "Key_7";
    KeyCode[KeyCode["Key_8"] = 56] = "Key_8";
    KeyCode[KeyCode["Key_9"] = 57] = "Key_9";
    KeyCode[KeyCode["A"] = 65] = "A";
    KeyCode[KeyCode["B"] = 66] = "B";
    KeyCode[KeyCode["C"] = 67] = "C";
    KeyCode[KeyCode["D"] = 68] = "D";
    KeyCode[KeyCode["E"] = 69] = "E";
    KeyCode[KeyCode["F"] = 70] = "F";
    KeyCode[KeyCode["G"] = 71] = "G";
    KeyCode[KeyCode["H"] = 72] = "H";
    KeyCode[KeyCode["I"] = 73] = "I";
    KeyCode[KeyCode["J"] = 74] = "J";
    KeyCode[KeyCode["K"] = 75] = "K";
    KeyCode[KeyCode["L"] = 76] = "L";
    KeyCode[KeyCode["M"] = 77] = "M";
    KeyCode[KeyCode["N"] = 78] = "N";
    KeyCode[KeyCode["O"] = 79] = "O";
    KeyCode[KeyCode["P"] = 80] = "P";
    KeyCode[KeyCode["Q"] = 81] = "Q";
    KeyCode[KeyCode["R"] = 82] = "R";
    KeyCode[KeyCode["S"] = 83] = "S";
    KeyCode[KeyCode["T"] = 84] = "T";
    KeyCode[KeyCode["U"] = 85] = "U";
    KeyCode[KeyCode["V"] = 86] = "V";
    KeyCode[KeyCode["W"] = 87] = "W";
    KeyCode[KeyCode["X"] = 88] = "X";
    KeyCode[KeyCode["Y"] = 89] = "Y";
    KeyCode[KeyCode["Z"] = 90] = "Z";
    KeyCode[KeyCode["Comma"] = 188] = "Comma";
    KeyCode[KeyCode["Dash"] = 189] = "Dash";
    KeyCode[KeyCode["Period"] = 190] = "Period";
    KeyCode[KeyCode["Tilde"] = 220] = "Tilde";
})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));
//# sourceMappingURL=KeyCode.js.map

/***/ }),

/***/ "../game-engine/lib/engine/input/MouseButtonCode.js":
/*!**********************************************************!*\
  !*** ../game-engine/lib/engine/input/MouseButtonCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MouseButtonCode = void 0;
var MouseButtonCode;
(function (MouseButtonCode) {
    MouseButtonCode[MouseButtonCode["Left"] = 0] = "Left";
    MouseButtonCode[MouseButtonCode["Middle"] = 1] = "Middle";
    MouseButtonCode[MouseButtonCode["Right"] = 2] = "Right";
})(MouseButtonCode = exports.MouseButtonCode || (exports.MouseButtonCode = {}));
//# sourceMappingURL=MouseButtonCode.js.map

/***/ }),

/***/ "../game-engine/lib/engine/math/Point.js":
/*!***********************************************!*\
  !*** ../game-engine/lib/engine/math/Point.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=point.js.map

/***/ }),

/***/ "../game-engine/lib/engine/math/Vector2D.js":
/*!**************************************************!*\
  !*** ../game-engine/lib/engine/math/Vector2D.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2D = void 0;
var Vector2D = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Vector2D.prototype, "x", {
        //********************************************
        //**
        //********************************************
        get: function () { return this._x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () { return this._y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "isZero", {
        get: function () { return this.equal(Vector2D.Zero); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "isOne", {
        get: function () { return this.equal(Vector2D.One); },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //** public:
    //********************************************
    /**
     * Adds another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.add = function (vec, y) {
        var nx, ny;
        if (typeof vec === "number") {
            nx = this._x + vec;
            ny = this._y + (y || vec);
        }
        else {
            nx = this._x + vec.x;
            ny = this._y + vec.y;
        }
        return new Vector2D(nx, ny);
    };
    /**
     * Subtracts another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.subtract = function (vec, y) {
        var nx, ny;
        if (typeof vec === "number") {
            nx = this._x - vec;
            ny = this._y - (y || vec);
        }
        else {
            nx = this._x - vec.x;
            ny = this._y - vec.y;
        }
        return new Vector2D(nx, ny);
    };
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.multiply = function (vec, y) {
        var nx = 0, ny = 0;
        if (typeof vec === "number") {
            nx = this._x * vec;
            ny = this._y * (y || vec);
        }
        else {
            nx = this._x * vec.x;
            ny = this._y * vec.y;
        }
        return new Vector2D(nx, ny);
    };
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.divide = function (vec, y) {
        var nx = 0, ny = 0;
        if (typeof vec === "number") {
            nx = this._x / vec;
            ny = this._y / (y || vec);
        }
        else {
            nx = this._x / vec.x;
            ny = this._y / vec.y;
        }
        return new Vector2D(nx, ny);
    };
    /**
     * Normalizes the current vector.
     * Returns a new instance of Vector2D
     */
    Vector2D.prototype.normalize = function () {
        var lenght = this.length();
        if (lenght != 0) {
            return new Vector2D(this._x / lenght, this._y / lenght);
        }
        else {
            return new Vector2D();
        }
    };
    /**
     *
     */
    Vector2D.prototype.normal = function () {
        return new Vector2D(-this.y, this.x).normalize();
    };
    /**
     * Gets the length of the current vector.
     */
    Vector2D.prototype.length = function () {
        return Math.sqrt((this._x * this._x) + (this._y * this._y));
    };
    /**
     * Gets the squared length of the current vector.
     */
    Vector2D.prototype.lengthSqr = function () {
        return (this._x * this._x) + (this._y * this._y);
    };
    /**
     * Checks if the vector x and y is equal to the given vector.
     *
     * @param vec
     */
    Vector2D.prototype.equal = function (vec) {
        return vec != null && this._x === vec.x && this._y === vec.y;
    };
    /**
     * Finds the dot product between the two vectors.
     *
     * @param vec
     */
    Vector2D.prototype.dot = function (vec) {
        var unit1 = this.normalize(), unit2 = vec.normalize();
        return (unit1.x * unit2.x) + (unit1.y * unit2.y);
    };
    /**
     * Finds the cross product between two vectors.
     * @param vec
     */
    Vector2D.prototype.cross = function (vec) {
        var unit1 = this.normalize(), unit2 = vec.normalize();
        return (unit1.x * unit2.x) - (unit1.y * unit2.y);
    };
    /**
     * Checks if the
     *
     * @param vec
     */
    Vector2D.prototype.isPerpendicular = function (vec) {
        return this.dot(vec) === 0;
    };
    /**
     *
     * @param {Vector2D} normal
     * @return {Vector2D}
     */
    Vector2D.prototype.reflect = function (normal) {
        var n = normal.normalize();
        var dot = (this.x * n.x) + (this.y * n.y);
        var x = this.x - 2 * dot * n.x;
        var y = this.y - 2 * dot * n.y;
        return new Vector2D(x, y);
    };
    /**
     * Rotates the vector.
     *
     * @param {number} angle
     * @return {Vector2D}
     */
    Vector2D.prototype.rotate = function (angle) {
        var x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        var y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        return new Vector2D(x, y);
    };
    /**
     *
     * @return {Vector2D}
     */
    Vector2D.prototype.flip = function () {
        return new Vector2D(-this.x, -this.y);
    };
    /**
     * Gets the angle of the vector
     */
    Vector2D.prototype.angle = function () {
        return Math.atan2(this.x, this.y);
    };
    //********************************************
    //** read only attributes.
    //********************************************
    Vector2D.Zero = new Vector2D();
    Vector2D.One = new Vector2D(1, 1);
    Vector2D.Left = new Vector2D(-1, 0);
    Vector2D.Right = new Vector2D(1, 0);
    Vector2D.Up = new Vector2D(0, -1);
    Vector2D.Down = new Vector2D(0, 1);
    return Vector2D;
}());
exports.Vector2D = Vector2D;
//# sourceMappingURL=Vector2D.js.map

/***/ }),

/***/ "../game-engine/lib/engine/rendering/Canvas2DRenderer.js":
/*!***************************************************************!*\
  !*** ../game-engine/lib/engine/rendering/Canvas2DRenderer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas2DRenderer = void 0;
var Circle_1 = __webpack_require__(/*! ./../geometry/Circle */ "../game-engine/lib/engine/geometry/Circle.js");
var Canvas2DRenderer = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Canvas2DRenderer(canvas) {
        this._ctx = canvas.getContext("2d");
    }
    Object.defineProperty(Canvas2DRenderer.prototype, "renderingContext", {
        get: function () { return this._ctx; },
        enumerable: false,
        configurable: true
    });
    //********************************************
    //** public:
    //********************************************
    /**
     *
     * @param x
     * @param y
     * @param w
     * @param h
     * @param colorStyle
     */
    Canvas2DRenderer.prototype.renderRect = function (x, y, rect, colorStyle) {
        if (colorStyle === void 0) { colorStyle = "gray"; }
        this._ctx.fillStyle = colorStyle;
        this._ctx.beginPath();
        this._ctx.rect(x, y, rect.width, rect.heigth);
        this._ctx.fill();
    };
    /**
     *
     * @param x
     * @param y
     * @param r
     * @param colorStyle
     */
    Canvas2DRenderer.prototype.renderCircle = function (x, y, c, colorStyle) {
        if (colorStyle === void 0) { colorStyle = "gray"; }
        this._ctx.fillStyle = colorStyle;
        this._ctx.beginPath();
        this._ctx.arc(x, y, c.r, 0, 2 * Math.PI);
        this._ctx.fill();
    };
    /**
     *
     * @param l
     */
    Canvas2DRenderer.prototype.renderLine = function (l, color) {
        if (color === void 0) { color = "red"; }
        this._ctx.strokeStyle = color;
        this._ctx.lineWidth = 2;
        this._ctx.beginPath();
        this._ctx.moveTo(l.p1.x, l.p1.y);
        this._ctx.lineTo(l.p2.x, l.p2.y);
        this._ctx.stroke();
    };
    /**
     *
     * @param l
     * @param color
     */
    Canvas2DRenderer.prototype.renderDirLine = function (l, color) {
        if (color === void 0) { color = "red"; }
        this.renderLine(l);
        var c = new Circle_1.Circle(10);
        this.renderCircle(l.p2.x, l.p2.y, c, color);
    };
    /**
     *
     * @param l
     * @param color
     */
    Canvas2DRenderer.prototype.renderFatLine = function (l, color) {
        if (color === void 0) { color = "red"; }
        this._ctx.strokeStyle = color;
        this._ctx.lineWidth = 5;
        this._ctx.beginPath();
        this._ctx.moveTo(l.p1.x, l.p1.y);
        this._ctx.lineTo(l.p2.x, l.p2.y);
        this._ctx.stroke();
    };
    /**
     *
     * @param x
     * @param y
     * @param txt
     */
    Canvas2DRenderer.prototype.renderText = function (txt, x, y) {
        this._ctx.fillStyle = "black";
        this._ctx.font = "30px Arial";
        if (typeof x === "number") {
            this._ctx.fillText(txt, x, y);
        }
        else {
            this._ctx.fillText(txt, x.x, x.y);
        }
    };
    /**
     *
     * @param txt
     */
    Canvas2DRenderer.prototype.getTextWidth = function (txt) {
        this._ctx.font = "30px Arial";
        return this._ctx.measureText(txt).width;
    };
    Canvas2DRenderer.prototype.renderPolygon = function (x, y, rotation, polygon, color) {
        var _this = this;
        if (color === void 0) { color = "red"; }
        this._ctx.save();
        this._ctx.fillStyle = color;
        var origin = polygon.origin || [0, 0];
        this._ctx.translate(x + origin[0], y + origin[1]);
        this._ctx.rotate(rotation);
        this._ctx.translate(-origin[0], -origin[1]);
        this._ctx.beginPath();
        polygon.vertices.forEach(function (vertex, i) {
            (i === 0)
                ? _this._ctx.moveTo(vertex[0], vertex[1])
                : _this._ctx.lineTo(vertex[0], vertex[1]);
        });
        this._ctx.closePath();
        this._ctx.fill();
        // this._ctx.stroke();
        this._ctx.restore();
    };
    return Canvas2DRenderer;
}());
exports.Canvas2DRenderer = Canvas2DRenderer;
//# sourceMappingURL=Canvas2DRenderer.js.map

/***/ }),

/***/ "../game-engine/lib/engine/rendering/IRenderable.js":
/*!**********************************************************!*\
  !*** ../game-engine/lib/engine/rendering/IRenderable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IRenderable.js.map

/***/ }),

/***/ "../game-engine/lib/engine/rendering/RenderManager.js":
/*!************************************************************!*\
  !*** ../game-engine/lib/engine/rendering/RenderManager.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderManager = void 0;
var Canvas2DRenderer_1 = __webpack_require__(/*! ./Canvas2DRenderer */ "../game-engine/lib/engine/rendering/Canvas2DRenderer.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/scenes/Scene.js":
/*!*************************************************!*\
  !*** ../game-engine/lib/engine/scenes/Scene.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
var UpdateManager_1 = __webpack_require__(/*! ../update/UpdateManager */ "../game-engine/lib/engine/update/UpdateManager.js");
var RenderManager_1 = __webpack_require__(/*! ../rendering/RenderManager */ "../game-engine/lib/engine/rendering/RenderManager.js");
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

/***/ }),

/***/ "../game-engine/lib/engine/scenes/SceneManager.js":
/*!********************************************************!*\
  !*** ../game-engine/lib/engine/scenes/SceneManager.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneManager = void 0;
var StateMachine_1 = __webpack_require__(/*! ../state/StateMachine */ "../game-engine/lib/engine/state/StateMachine.js");
/**
 * A manager for managing scenes.
 */
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updates the current scene
     * @param deltaTime - time since last frame.
     */
    SceneManager.prototype.update = function (deltaTime) {
        var scene = this.peek();
        if (scene != null) {
            scene.updateManager.update(deltaTime);
        }
    };
    /**
     * Render the current scene
     */
    SceneManager.prototype.renderScene = function () {
        var scene = this.peek();
        if (scene != null) {
            scene.renderer.render();
        }
    };
    return SceneManager;
}(StateMachine_1.StateMachine));
exports.SceneManager = SceneManager;
//# sourceMappingURL=SceneManager.js.map

/***/ }),

/***/ "../game-engine/lib/engine/state/State.js":
/*!************************************************!*\
  !*** ../game-engine/lib/engine/state/State.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=State.js.map

/***/ }),

/***/ "../game-engine/lib/engine/state/StateMachine.js":
/*!*******************************************************!*\
  !*** ../game-engine/lib/engine/state/StateMachine.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateMachine = void 0;
/**
 * A state machine for handeling states.
 */
var StateMachine = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    /**
     *
     * @param entity The owner of this state manager.
     * @param [options] State machine options.
     */
    function StateMachine(entity, options) {
        this._stateStack = [];
        this._options = Object.assign({}, _defaultOptions, options);
        this._entity = entity;
    }
    /**
     * Sets the current state.
     *
     * @param state
     */
    StateMachine.prototype.push = function (state) {
        if (state == null) {
            throw new Error("Cannot push null or undefinde to state stack");
        }
        if (this._stateStack.length > 0) {
            this.peek().pause(this._entity);
        }
        this._stateStack.push(state);
        state.initialize(this._entity);
    };
    /**
     * Sets the active state and removes resets history.
     *
     * @param state
     */
    StateMachine.prototype.pushAndClearHistory = function (state) {
        if (state == null) {
            throw new Error("State cannot be null or undefined");
        }
        this._stateStack = [];
        this._stateStack.push(state);
        state.initialize(this._entity);
    };
    /**
     * Returns the first element in the stack without
     * removing it.
     */
    StateMachine.prototype.peek = function () {
        if (this._stateStack.length === 0) {
            return null;
        }
        return this._stateStack[this._stateStack.length - 1];
    };
    /**
     * Sets state history.
     *
     * @param states
     */
    StateMachine.prototype.setHistory = function (states) {
        if (states == null) {
            throw new Error("Cannot set history state collection is null or undefined");
        }
        this._stateStack = states.slice(0, this._options.maxHistoryLenght);
    };
    /**
     * Pops the current state off the top off the history stack
     * and calls resume on next state in the stack.
     */
    StateMachine.prototype.pop = function () {
        if (this._stateStack.length <= 0) {
            return null;
        }
        var removed = this._stateStack.pop();
        var top = this.peek();
        if (top != null) {
            top.resume(this._entity);
        }
        return removed;
    };
    return StateMachine;
}());
exports.StateMachine = StateMachine;
var _defaultOptions = {
    maxHistoryLenght: 10
};
//# sourceMappingURL=StateMachine.js.map

/***/ }),

/***/ "../game-engine/lib/engine/types/CommonTypes.js":
/*!******************************************************!*\
  !*** ../game-engine/lib/engine/types/CommonTypes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=CommonTypes.js.map

/***/ }),

/***/ "../game-engine/lib/engine/types/ViewPort.js":
/*!***************************************************!*\
  !*** ../game-engine/lib/engine/types/ViewPort.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ViewPort.js.map

/***/ }),

/***/ "../game-engine/lib/engine/update/IUpdateable.js":
/*!*******************************************************!*\
  !*** ../game-engine/lib/engine/update/IUpdateable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IUpdateable.js.map

/***/ }),

/***/ "../game-engine/lib/engine/update/UpdateManager.js":
/*!*********************************************************!*\
  !*** ../game-engine/lib/engine/update/UpdateManager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateManager = void 0;
var UpdateManager = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function UpdateManager() {
        this._updateables = new Set();
    }
    //********************************************
    //**public:
    //********************************************
    /**
     *
     */
    UpdateManager.prototype.add = function (updateable) {
        if (updateable == null) {
            throw new Error("Updateable cannot be null er undefined");
        }
        this._updateables.add(updateable);
    };
    /**
     *
     * @param updateable
     */
    UpdateManager.prototype.remove = function (updateable) {
        if (updateable == null) {
            throw new Error("Cannot delete updateable cannot be null er undefined");
        }
        this._updateables.delete(updateable);
    };
    /**
     *
     * @param deltaTime
     */
    UpdateManager.prototype.update = function (deltaTime) {
        this._updateables.forEach(function (x) { return x.update(deltaTime); });
    };
    return UpdateManager;
}());
exports.UpdateManager = UpdateManager;
//# sourceMappingURL=UpdateManager.js.map

/***/ }),

/***/ "../game-engine/lib/index.js":
/*!***********************************!*\
  !*** ../game-engine/lib/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./abstract/IDisposable */ "../game-engine/lib/abstract/IDisposable.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/components/Behaviour */ "../game-engine/lib/engine/components/Behaviour.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/components/Component */ "../game-engine/lib/engine/components/Component.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/components/ShapeRenderer */ "../game-engine/lib/engine/components/ShapeRenderer.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/components/Transform */ "../game-engine/lib/engine/components/Transform.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/gameobjects/Camera */ "../game-engine/lib/engine/gameobjects/Camera.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/gameobjects/gameobject */ "../game-engine/lib/engine/gameobjects/gameobject.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/geometry/Circle */ "../game-engine/lib/engine/geometry/Circle.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/geometry/IShape */ "../game-engine/lib/engine/geometry/IShape.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/geometry/Line */ "../game-engine/lib/engine/geometry/Line.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/geometry/Rectangle */ "../game-engine/lib/engine/geometry/Rectangle.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/geometry/Polygon */ "../game-engine/lib/engine/geometry/Polygon.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/input/InputManager */ "../game-engine/lib/engine/input/InputManager.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/input/KeyCode */ "../game-engine/lib/engine/input/KeyCode.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/input/MouseButtonCode */ "../game-engine/lib/engine/input/MouseButtonCode.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/math/Point */ "../game-engine/lib/engine/math/Point.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/math/Vector2D */ "../game-engine/lib/engine/math/Vector2D.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/rendering/Canvas2DRenderer */ "../game-engine/lib/engine/rendering/Canvas2DRenderer.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/rendering/IRenderable */ "../game-engine/lib/engine/rendering/IRenderable.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/rendering/RenderManager */ "../game-engine/lib/engine/rendering/RenderManager.js"), exports); // no export needed?
__exportStar(__webpack_require__(/*! ./engine/scenes/Scene */ "../game-engine/lib/engine/scenes/Scene.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/scenes/SceneManager */ "../game-engine/lib/engine/scenes/SceneManager.js"), exports); // no export needed?
__exportStar(__webpack_require__(/*! ./engine/state/State */ "../game-engine/lib/engine/state/State.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/state/StateMachine */ "../game-engine/lib/engine/state/StateMachine.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/types/ViewPort */ "../game-engine/lib/engine/types/ViewPort.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/types/CommonTypes */ "../game-engine/lib/engine/types/CommonTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/update/IUpdateable */ "../game-engine/lib/engine/update/IUpdateable.js"), exports);
__exportStar(__webpack_require__(/*! ./engine/update/UpdateManager */ "../game-engine/lib/engine/update/UpdateManager.js"), exports); // no export needed?
__exportStar(__webpack_require__(/*! ./engine/Game */ "../game-engine/lib/engine/Game.js"), exports);
//# sourceMappingURL=index.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_engine_1 = __webpack_require__(/*! game-engine */ "../game-engine/lib/index.js");
var Player_1 = __webpack_require__(/*! ./game/prefab/Player */ "./src/game/prefab/Player.ts");
var Box_1 = __webpack_require__(/*! ./game/prefab/Box */ "./src/game/prefab/Box.ts");
var Pentagon_1 = __webpack_require__(/*! ./game/prefab/Pentagon */ "./src/game/prefab/Pentagon.ts");
var game = new game_engine_1.Game({ clearColor: "cornflowerblue" });
// create initial scene
var scene = new game_engine_1.Scene(game);
// create and add camera to scene
var camera = new game_engine_1.Camera(scene);
scene.setMainCamera(camera);
// player
var player = Player_1.default(scene);
scene.addGameObject(player);
// box
var box1 = Box_1.default(scene);
box1.transform.translate(-100, -100);
scene.addGameObject(box1);
var box2 = Box_1.default(scene);
box2.transform.translate(100, 0);
scene.addGameObject(box2);
var pentagon = Pentagon_1.default(scene);
// pentagon.transform.translate()
scene.addGameObject(pentagon);
// push initial scene to game's scene manager.
game.sceneManager.push(scene);
// initialize game
game.init();
// run game loop
game.run();

})();

/******/ })()
;
//# sourceMappingURL=game.js.map