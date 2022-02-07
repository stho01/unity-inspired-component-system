/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/stho-game-engine/dist/abstract/IDisposable.js":
/*!********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/abstract/IDisposable.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisposable": () => (/* binding */ isDisposable)
/* harmony export */ });
/**
 * Checks if object is disposable.
 * @param object
 */
function isDisposable(object) {
    return typeof object["dispose"] === "function";
}
//# sourceMappingURL=IDisposable.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/Game.js":
/*!***********************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/Game.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry/Rectangle */ "./node_modules/stho-game-engine/dist/engine/geometry/Rectangle.js");
/* harmony import */ var _rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering/Canvas2DRenderer */ "./node_modules/stho-game-engine/dist/engine/rendering/Canvas2DRenderer.js");
/* harmony import */ var _input_InputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/InputManager */ "./node_modules/stho-game-engine/dist/engine/input/InputManager.js");
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/SceneManager */ "./node_modules/stho-game-engine/dist/engine/scenes/SceneManager.js");




var Game = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Game(options) {
        this._previousDelta = 0;
        this._options = Object.assign({}, _defaultOptions, options);
        this._canvas = document.getElementById("c");
        this._input = new _input_InputManager__WEBPACK_IMPORTED_MODULE_2__.InputManager();
        this._renderer = new _rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_1__.Canvas2DRenderer(this._canvas);
        this._sceneManager = new _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_3__.SceneManager(this);
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
        var clearRect = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle(this._viewPort.width, this._viewPort.height);
        this._renderer.renderRect(0, 0, clearRect, this._options.clearColor);
        this._sceneManager.renderScene();
    };
    return Game;
}());

/**
 *
 */
var _defaultOptions = {
    clearColor: "#000000"
};
//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/components/Behaviour.js":
/*!***************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/components/Behaviour.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Behaviour": () => (/* binding */ Behaviour)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/stho-game-engine/dist/engine/components/Component.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
    //** public methods:
    //********************************************
    /**
     * Remove component from update manager
     */
    Behaviour.prototype.dispose = function () {
        this._owner.scene.updateManager.remove(this);
        _super.prototype.dispose.call(this);
    };
    //********************************************
    /**
     * Instantiate a prefab.
     * @param prefab
     * @param position
     * @param rotation
     */
    Behaviour.prototype.instantiate = function (prefab, position, rotation) {
        if (position === void 0) { position = _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__.Vector2D.Zero; }
        if (rotation === void 0) { rotation = 0; }
        return this._owner.instantiate(prefab, position, rotation);
    };
    return Behaviour;
}(_Component__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=Behaviour.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/components/Component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/components/Component.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
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

//# sourceMappingURL=Component.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/components/ShapeRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/components/ShapeRenderer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeRenderer": () => (/* binding */ ShapeRenderer)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/stho-game-engine/dist/engine/components/Component.js");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ "./node_modules/stho-game-engine/dist/engine/components/Transform.js");
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Circle */ "./node_modules/stho-game-engine/dist/engine/geometry/Circle.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/Rectangle */ "./node_modules/stho-game-engine/dist/engine/geometry/Rectangle.js");
/* harmony import */ var _geometry_Polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/Polygon */ "./node_modules/stho-game-engine/dist/engine/geometry/Polygon.js");
/* harmony import */ var _geometry_Triangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/Triangle */ "./node_modules/stho-game-engine/dist/engine/geometry/Triangle.js");
/* harmony import */ var _math_Trigonometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/Trigonometry */ "./node_modules/stho-game-engine/dist/engine/math/Trigonometry.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
        this._transform = this._owner.getComponent(_Transform__WEBPACK_IMPORTED_MODULE_1__.Transform);
    };
    /**
     *
     * @param ctx
     */
    ShapeRenderer.prototype.render = function (renderer, camera) {
        var screenPos = camera.getScreenPosition(this._owner);
        if (this.shape instanceof _geometry_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle) {
            renderer.renderCircle(screenPos.x, screenPos.y, this.shape, this.color);
        }
        else if (this.shape instanceof _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_3__.Rectangle) {
            renderer.renderRect(screenPos.x, screenPos.y, this.shape, this.color);
        }
        else if (this.shape instanceof _geometry_Polygon__WEBPACK_IMPORTED_MODULE_4__.Polygon
            || this.shape instanceof _geometry_Triangle__WEBPACK_IMPORTED_MODULE_5__.Triangle) {
            renderer.renderPolygon(screenPos.x, screenPos.y, this._owner.transform.rotationRad + (0,_math_Trigonometry__WEBPACK_IMPORTED_MODULE_6__.degreesToRadians)(this.shape.rotationOffset), this.shape, this.color);
        }
    };
    /**
     * Remove component from renderer.
     */
    ShapeRenderer.prototype.dispose = function () {
        this._owner.scene.renderer.remove(this);
        _super.prototype.dispose.call(this);
    };
    return ShapeRenderer;
}(_Component__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=ShapeRenderer.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/components/Transform.js":
/*!***************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/components/Transform.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector2D */ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./node_modules/stho-game-engine/dist/engine/components/Component.js");
/* harmony import */ var _math_Trigonometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Trigonometry */ "./node_modules/stho-game-engine/dist/engine/math/Trigonometry.js");
var __extends = (undefined && undefined.__extends) || (function () {
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



var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        //********************************************
        //** attributes:
        //********************************************
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D.Zero;
        _this._rotation = 0;
        _this._rotationRad = 0;
        _this._heading = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D.Zero;
        _this._scale = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D.One;
        return _this;
    }
    Object.defineProperty(Transform.prototype, "position", {
        //********************************************
        //** props:
        //********************************************
        get: function () { return this._position; },
        set: function (v) { this._position = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (v) {
            this._rotation = v;
            this._rotationRad = (0,_math_Trigonometry__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(v);
            this._heading = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D(Math.cos(this._rotationRad), Math.sin(this._rotationRad));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotationRad", {
        get: function () { return this._rotationRad; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "heading", {
        get: function () { return this._heading; },
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
     * Translate the game object's position.
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
    /**
     * Sets the game object's angle of rotation
     * @param degrees
     */
    Transform.prototype.rotate = function (degrees) {
        this._rotation += degrees;
        this._rotationRad += (0,_math_Trigonometry__WEBPACK_IMPORTED_MODULE_2__.degreesToRadians)(degrees);
        this._heading = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D(Math.cos(this._rotationRad), Math.sin(this._rotationRad));
    };
    return Transform;
}(_Component__WEBPACK_IMPORTED_MODULE_1__.Component));

//# sourceMappingURL=Transform.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/gameobjects/Camera.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/gameobjects/Camera.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ "./node_modules/stho-game-engine/dist/engine/gameobjects/gameobject.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
}(_gameobject__WEBPACK_IMPORTED_MODULE_0__.GameObject));

//# sourceMappingURL=Camera.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/gameobjects/Prefab.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/gameobjects/Prefab.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Prefab.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/gameobjects/gameobject.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/gameobjects/gameobject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameObject": () => (/* binding */ GameObject)
/* harmony export */ });
/* harmony import */ var _components_Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Transform */ "./node_modules/stho-game-engine/dist/engine/components/Transform.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js");


//********************************************
var GameObject = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function GameObject(scene, name) {
        this._children = new Set();
        this._scene = scene;
        this._components = new Map();
        this._transform = new _components_Transform__WEBPACK_IMPORTED_MODULE_0__.Transform(this);
        this._transform = this.attachComponent(_components_Transform__WEBPACK_IMPORTED_MODULE_0__.Transform);
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
        if (type === _components_Transform__WEBPACK_IMPORTED_MODULE_0__.Transform && this._components.has(type)) {
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
     * Instantiate prefab
     * @param prefab
     * @param position
     * @param rotation
     */
    GameObject.prototype.instantiate = function (prefab, position, rotation) {
        if (position === void 0) { position = _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__.Vector2D.Zero; }
        if (rotation === void 0) { rotation = 0; }
        var gm = prefab(this.scene);
        gm.transform.translate(position);
        gm.transform.rotate(rotation);
        // gm.setParent(this);
        return gm;
    };
    /**
     *
     */
    GameObject.prototype.dispose = function () {
        this._components.forEach(function (componentsOfType) { return componentsOfType.forEach(function (x) { return x.dispose(); }); });
    };
    return GameObject;
}());

//# sourceMappingURL=gameobject.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Circle.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    //********************************************
    //** ctor:
    //********************************************
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this._r = radius;
        return _this;
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
}(_Shape__WEBPACK_IMPORTED_MODULE_0__.Shape));

//# sourceMappingURL=Circle.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Line.js":
/*!********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Line.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector2D */ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape */ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js");
var __extends = (undefined && undefined.__extends) || (function () {
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


var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    //********************************************
    //** ctor:
    //********************************************
    function Line(p1, p2) {
        var _this = _super.call(this) || this;
        _this._p1 = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D(p1.x, p1.y);
        _this._p2 = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__.Vector2D(p2.x, p2.y);
        _this._dir = _this._p2.subtract(_this._p1);
        _this._length = _this._dir.length();
        return _this;
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
}(_Shape__WEBPACK_IMPORTED_MODULE_1__.Shape));

//# sourceMappingURL=Line.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Polygon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Polygon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polygon": () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    //********************************************
    //** ctor:
    //********************************************
    function Polygon(vertices) {
        var _this = _super.call(this) || this;
        _this._vertices = vertices;
        return _this;
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
}(_Shape__WEBPACK_IMPORTED_MODULE_0__.Shape));

//# sourceMappingURL=Polygon.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Rectangle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Rectangle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    //********************************************
    //** ctor:
    //********************************************
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this._width = width;
        _this._height = height;
        return _this;
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
}(_Shape__WEBPACK_IMPORTED_MODULE_0__.Shape));

//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js":
/*!*********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Shape.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shape": () => (/* binding */ Shape)
/* harmony export */ });
var Shape = /** @class */ (function () {
    function Shape() {
        //********************************************
        //** attributes:
        //********************************************
        this.rotationOffset = 0;
    }
    return Shape;
}());

//# sourceMappingURL=Shape.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/geometry/Triangle.js":
/*!************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/geometry/Triangle.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polygon */ "./node_modules/stho-game-engine/dist/engine/geometry/Polygon.js");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    //********************************************
    //** ctor:
    //********************************************
    function Triangle(width, height) {
        var _this = _super.call(this, [
            [0, height * -0.5],
            [width * 0.5, height * 0.5],
            [width * -0.5, height * 0.5],
        ]) || this;
        _this._width = width;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "height", {
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}(_Polygon__WEBPACK_IMPORTED_MODULE_0__.Polygon));

//# sourceMappingURL=Triangle.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/input/InputManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/input/InputManager.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputManager": () => (/* binding */ InputManager)
/* harmony export */ });
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

//# sourceMappingURL=InputManager.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/input/KeyCode.js":
/*!********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/input/KeyCode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCode": () => (/* binding */ KeyCode)
/* harmony export */ });
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
})(KeyCode || (KeyCode = {}));
//# sourceMappingURL=KeyCode.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/input/MouseButtonCode.js":
/*!****************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/input/MouseButtonCode.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseButtonCode": () => (/* binding */ MouseButtonCode)
/* harmony export */ });
var MouseButtonCode;
(function (MouseButtonCode) {
    MouseButtonCode[MouseButtonCode["Left"] = 0] = "Left";
    MouseButtonCode[MouseButtonCode["Middle"] = 1] = "Middle";
    MouseButtonCode[MouseButtonCode["Right"] = 2] = "Right";
})(MouseButtonCode || (MouseButtonCode = {}));
//# sourceMappingURL=MouseButtonCode.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/math/Point.js":
/*!*****************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/math/Point.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/math/Trigonometry.js":
/*!************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/math/Trigonometry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees)
/* harmony export */ });
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
function radiansToDegrees(rad) {
    return rad * 180 / Math.PI;
}
//# sourceMappingURL=Trigonometry.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js":
/*!********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/math/Vector2D.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2D": () => (/* binding */ Vector2D)
/* harmony export */ });
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

//# sourceMappingURL=Vector2D.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/rendering/Canvas2DRenderer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/rendering/Canvas2DRenderer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas2DRenderer": () => (/* binding */ Canvas2DRenderer)
/* harmony export */ });
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../geometry/Circle */ "./node_modules/stho-game-engine/dist/engine/geometry/Circle.js");

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
        var c = new _geometry_Circle__WEBPACK_IMPORTED_MODULE_0__.Circle(10);
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
        this._ctx.translate(x, y);
        this._ctx.translate(origin[0], origin[1]);
        this._ctx.rotate(rotation);
        this._ctx.translate(x - origin[0], y - origin[1]);
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

//# sourceMappingURL=Canvas2DRenderer.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/rendering/IRenderable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/rendering/IRenderable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=IRenderable.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/rendering/RenderManager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/rendering/RenderManager.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderManager": () => (/* binding */ RenderManager)
/* harmony export */ });
/* harmony import */ var _Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas2DRenderer */ "./node_modules/stho-game-engine/dist/engine/rendering/Canvas2DRenderer.js");

var RenderManager = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function RenderManager(canvas, scene) {
        this._renderables = new Set();
        this._renderer = new _Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_0__.Canvas2DRenderer(canvas);
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

//# sourceMappingURL=RenderManager.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/scenes/Scene.js":
/*!*******************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/scenes/Scene.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _update_UpdateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update/UpdateManager */ "./node_modules/stho-game-engine/dist/engine/update/UpdateManager.js");
/* harmony import */ var _rendering_RenderManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/RenderManager */ "./node_modules/stho-game-engine/dist/engine/rendering/RenderManager.js");


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
        this._updateManager = new _update_UpdateManager__WEBPACK_IMPORTED_MODULE_0__.UpdateManager();
        this._rendererManager = new _rendering_RenderManager__WEBPACK_IMPORTED_MODULE_1__.RenderManager(game.canvas, this);
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

//# sourceMappingURL=Scene.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/scenes/SceneManager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/scenes/SceneManager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneManager": () => (/* binding */ SceneManager)
/* harmony export */ });
/* harmony import */ var _state_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/StateMachine */ "./node_modules/stho-game-engine/dist/engine/state/StateMachine.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
}(_state_StateMachine__WEBPACK_IMPORTED_MODULE_0__.StateMachine));

//# sourceMappingURL=SceneManager.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/state/State.js":
/*!******************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/state/State.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=State.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/state/StateMachine.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/state/StateMachine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateMachine": () => (/* binding */ StateMachine)
/* harmony export */ });
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

var _defaultOptions = {
    maxHistoryLenght: 10
};
//# sourceMappingURL=StateMachine.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/types/CommonTypes.js":
/*!************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/types/CommonTypes.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=CommonTypes.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/types/ViewPort.js":
/*!*********************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/types/ViewPort.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=ViewPort.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/update/IUpdateable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/update/IUpdateable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=IUpdateable.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/engine/update/UpdateManager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/engine/update/UpdateManager.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateManager": () => (/* binding */ UpdateManager)
/* harmony export */ });
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

//# sourceMappingURL=UpdateManager.js.map

/***/ }),

/***/ "./node_modules/stho-game-engine/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/stho-game-engine/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisposable": () => (/* reexport safe */ _abstract_IDisposable__WEBPACK_IMPORTED_MODULE_0__.isDisposable),
/* harmony export */   "Behaviour": () => (/* reexport safe */ _engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_1__.Behaviour),
/* harmony export */   "Component": () => (/* reexport safe */ _engine_components_Component__WEBPACK_IMPORTED_MODULE_2__.Component),
/* harmony export */   "ShapeRenderer": () => (/* reexport safe */ _engine_components_ShapeRenderer__WEBPACK_IMPORTED_MODULE_3__.ShapeRenderer),
/* harmony export */   "Transform": () => (/* reexport safe */ _engine_components_Transform__WEBPACK_IMPORTED_MODULE_4__.Transform),
/* harmony export */   "Camera": () => (/* reexport safe */ _engine_gameobjects_Camera__WEBPACK_IMPORTED_MODULE_5__.Camera),
/* harmony export */   "GameObject": () => (/* reexport safe */ _engine_gameobjects_gameobject__WEBPACK_IMPORTED_MODULE_6__.GameObject),
/* harmony export */   "Circle": () => (/* reexport safe */ _engine_geometry_Circle__WEBPACK_IMPORTED_MODULE_8__.Circle),
/* harmony export */   "Shape": () => (/* reexport safe */ _engine_geometry_Shape__WEBPACK_IMPORTED_MODULE_9__.Shape),
/* harmony export */   "Line": () => (/* reexport safe */ _engine_geometry_Line__WEBPACK_IMPORTED_MODULE_10__.Line),
/* harmony export */   "Rectangle": () => (/* reexport safe */ _engine_geometry_Rectangle__WEBPACK_IMPORTED_MODULE_11__.Rectangle),
/* harmony export */   "Polygon": () => (/* reexport safe */ _engine_geometry_Polygon__WEBPACK_IMPORTED_MODULE_12__.Polygon),
/* harmony export */   "Triangle": () => (/* reexport safe */ _engine_geometry_Triangle__WEBPACK_IMPORTED_MODULE_13__.Triangle),
/* harmony export */   "InputManager": () => (/* reexport safe */ _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_14__.InputManager),
/* harmony export */   "KeyCode": () => (/* reexport safe */ _engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_15__.KeyCode),
/* harmony export */   "MouseButtonCode": () => (/* reexport safe */ _engine_input_MouseButtonCode__WEBPACK_IMPORTED_MODULE_16__.MouseButtonCode),
/* harmony export */   "Vector2D": () => (/* reexport safe */ _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_18__.Vector2D),
/* harmony export */   "Canvas2DRenderer": () => (/* reexport safe */ _engine_rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_19__.Canvas2DRenderer),
/* harmony export */   "RenderManager": () => (/* reexport safe */ _engine_rendering_RenderManager__WEBPACK_IMPORTED_MODULE_21__.RenderManager),
/* harmony export */   "Scene": () => (/* reexport safe */ _engine_scenes_Scene__WEBPACK_IMPORTED_MODULE_22__.Scene),
/* harmony export */   "SceneManager": () => (/* reexport safe */ _engine_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_23__.SceneManager),
/* harmony export */   "StateMachine": () => (/* reexport safe */ _engine_state_StateMachine__WEBPACK_IMPORTED_MODULE_25__.StateMachine),
/* harmony export */   "UpdateManager": () => (/* reexport safe */ _engine_update_UpdateManager__WEBPACK_IMPORTED_MODULE_29__.UpdateManager),
/* harmony export */   "Game": () => (/* reexport safe */ _engine_Game__WEBPACK_IMPORTED_MODULE_30__.Game)
/* harmony export */ });
/* harmony import */ var _abstract_IDisposable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/IDisposable */ "./node_modules/stho-game-engine/dist/abstract/IDisposable.js");
/* harmony import */ var _engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/components/Behaviour */ "./node_modules/stho-game-engine/dist/engine/components/Behaviour.js");
/* harmony import */ var _engine_components_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/components/Component */ "./node_modules/stho-game-engine/dist/engine/components/Component.js");
/* harmony import */ var _engine_components_ShapeRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/components/ShapeRenderer */ "./node_modules/stho-game-engine/dist/engine/components/ShapeRenderer.js");
/* harmony import */ var _engine_components_Transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/components/Transform */ "./node_modules/stho-game-engine/dist/engine/components/Transform.js");
/* harmony import */ var _engine_gameobjects_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/gameobjects/Camera */ "./node_modules/stho-game-engine/dist/engine/gameobjects/Camera.js");
/* harmony import */ var _engine_gameobjects_gameobject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/gameobjects/gameobject */ "./node_modules/stho-game-engine/dist/engine/gameobjects/gameobject.js");
/* harmony import */ var _engine_gameobjects_Prefab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/gameobjects/Prefab */ "./node_modules/stho-game-engine/dist/engine/gameobjects/Prefab.js");
/* harmony import */ var _engine_geometry_Circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/geometry/Circle */ "./node_modules/stho-game-engine/dist/engine/geometry/Circle.js");
/* harmony import */ var _engine_geometry_Shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/geometry/Shape */ "./node_modules/stho-game-engine/dist/engine/geometry/Shape.js");
/* harmony import */ var _engine_geometry_Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine/geometry/Line */ "./node_modules/stho-game-engine/dist/engine/geometry/Line.js");
/* harmony import */ var _engine_geometry_Rectangle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engine/geometry/Rectangle */ "./node_modules/stho-game-engine/dist/engine/geometry/Rectangle.js");
/* harmony import */ var _engine_geometry_Polygon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./engine/geometry/Polygon */ "./node_modules/stho-game-engine/dist/engine/geometry/Polygon.js");
/* harmony import */ var _engine_geometry_Triangle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engine/geometry/Triangle */ "./node_modules/stho-game-engine/dist/engine/geometry/Triangle.js");
/* harmony import */ var _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./engine/input/InputManager */ "./node_modules/stho-game-engine/dist/engine/input/InputManager.js");
/* harmony import */ var _engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./engine/input/KeyCode */ "./node_modules/stho-game-engine/dist/engine/input/KeyCode.js");
/* harmony import */ var _engine_input_MouseButtonCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./engine/input/MouseButtonCode */ "./node_modules/stho-game-engine/dist/engine/input/MouseButtonCode.js");
/* harmony import */ var _engine_math_Point__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./engine/math/Point */ "./node_modules/stho-game-engine/dist/engine/math/Point.js");
/* harmony import */ var _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./engine/math/Vector2D */ "./node_modules/stho-game-engine/dist/engine/math/Vector2D.js");
/* harmony import */ var _engine_rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./engine/rendering/Canvas2DRenderer */ "./node_modules/stho-game-engine/dist/engine/rendering/Canvas2DRenderer.js");
/* harmony import */ var _engine_rendering_IRenderable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./engine/rendering/IRenderable */ "./node_modules/stho-game-engine/dist/engine/rendering/IRenderable.js");
/* harmony import */ var _engine_rendering_RenderManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./engine/rendering/RenderManager */ "./node_modules/stho-game-engine/dist/engine/rendering/RenderManager.js");
/* harmony import */ var _engine_scenes_Scene__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./engine/scenes/Scene */ "./node_modules/stho-game-engine/dist/engine/scenes/Scene.js");
/* harmony import */ var _engine_scenes_SceneManager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./engine/scenes/SceneManager */ "./node_modules/stho-game-engine/dist/engine/scenes/SceneManager.js");
/* harmony import */ var _engine_state_State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./engine/state/State */ "./node_modules/stho-game-engine/dist/engine/state/State.js");
/* harmony import */ var _engine_state_StateMachine__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./engine/state/StateMachine */ "./node_modules/stho-game-engine/dist/engine/state/StateMachine.js");
/* harmony import */ var _engine_types_ViewPort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./engine/types/ViewPort */ "./node_modules/stho-game-engine/dist/engine/types/ViewPort.js");
/* harmony import */ var _engine_types_CommonTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./engine/types/CommonTypes */ "./node_modules/stho-game-engine/dist/engine/types/CommonTypes.js");
/* harmony import */ var _engine_update_IUpdateable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./engine/update/IUpdateable */ "./node_modules/stho-game-engine/dist/engine/update/IUpdateable.js");
/* harmony import */ var _engine_update_UpdateManager__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./engine/update/UpdateManager */ "./node_modules/stho-game-engine/dist/engine/update/UpdateManager.js");
/* harmony import */ var _engine_Game__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./engine/Game */ "./node_modules/stho-game-engine/dist/engine/Game.js");





















 // no export needed?

 // no export needed?





 // no export needed?

//# sourceMappingURL=index.js.map

/***/ }),

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
var stho_game_engine_1 = __webpack_require__(/*! stho-game-engine */ "./node_modules/stho-game-engine/dist/index.js");
var Bullet_1 = __webpack_require__(/*! ../prefab/Bullet */ "./src/game/prefab/Bullet.ts");
var PlayerInputBehaviour = /** @class */ (function (_super) {
    __extends(PlayerInputBehaviour, _super);
    function PlayerInputBehaviour() {
        //********************************************************************************
        //** attributes:
        //********************************************************************************
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.steeringForce = 540; // deg/s
        _this.thrust = 100;
        _this._force = stho_game_engine_1.Vector2D.Zero;
        _this._velocity = stho_game_engine_1.Vector2D.Zero;
        return _this;
    }
    //********************************************************************************
    //** public:
    //********************************************************************************
    /**
     * Initialize component
     */
    PlayerInputBehaviour.prototype.initialize = function () {
        this._transform = this._owner.getComponent(stho_game_engine_1.Transform);
    };
    /**
     * Update component
     * @param {number} deltaTime
     */
    PlayerInputBehaviour.prototype.update = function (deltaTime) {
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.A)) {
            this._transform.rotate(-this.steeringForce * deltaTime);
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.D)) {
            this._transform.rotate(this.steeringForce * deltaTime);
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.Q)) {
            var force = this._transform.heading.rotate(-Math.PI / 2).multiply(this.thrust);
            this._applyForce(force);
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.E)) {
            var force = this._transform.heading.rotate(Math.PI / 2).multiply(this.thrust);
            this._applyForce(force);
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.W)) {
            this._applyForce(this._transform.heading.multiply(this.thrust));
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.S)) {
            this._applyForce(this._transform.heading.multiply(-this.thrust));
        }
        if (this._input.isKeyDown(stho_game_engine_1.KeyCode.Space)) {
            this.instantiate(Bullet_1.default, this._transform.position);
        }
        if (this._isStandingStill()) {
            this._force = stho_game_engine_1.Vector2D.Zero;
            this._velocity = stho_game_engine_1.Vector2D.Zero;
        }
        else {
            this._applyFriction();
            this._applyDrag();
        }
        var acceleration = this._force.multiply(deltaTime);
        this._velocity = this._velocity.add(acceleration);
        this._transform.translate(this._velocity);
        this._force = stho_game_engine_1.Vector2D.Zero;
    };
    PlayerInputBehaviour.prototype._applyDrag = function () {
        var drag = this._velocity.normalize().multiply(-1);
        var c = 0.1;
        this._applyForce(drag.multiply(this._velocity.lengthSqr() * c));
    };
    PlayerInputBehaviour.prototype._applyFriction = function () {
        var f = this._velocity.normalize().multiply(-50);
        this._force = this._force.add(f);
    };
    PlayerInputBehaviour.prototype._isStandingStill = function () {
        var velLength = this._velocity.lengthSqr();
        var forceLength = this._force.lengthSqr();
        return forceLength === 0
            && velLength < 0.1
            && velLength > -0.1;
    };
    PlayerInputBehaviour.prototype._applyForce = function (force) {
        this._force = this._force.add(force);
    };
    return PlayerInputBehaviour;
}(stho_game_engine_1.Behaviour));
exports.PlayerInputBehaviour = PlayerInputBehaviour;


/***/ }),

/***/ "./src/game/prefab/Bullet.ts":
/*!***********************************!*\
  !*** ./src/game/prefab/Bullet.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var stho_game_engine_1 = __webpack_require__(/*! stho-game-engine */ "./node_modules/stho-game-engine/dist/index.js");
var bullet = function (scene) {
    var gm = new stho_game_engine_1.GameObject(scene);
    var renderer = gm.attachComponent(stho_game_engine_1.ShapeRenderer);
    renderer.shape = new stho_game_engine_1.Circle(5);
    renderer.color = "black";
    return gm;
};
exports.default = bullet;


/***/ }),

/***/ "./src/game/prefab/Player.ts":
/*!***********************************!*\
  !*** ./src/game/prefab/Player.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var stho_game_engine_1 = __webpack_require__(/*! stho-game-engine */ "./node_modules/stho-game-engine/dist/index.js");
var PlayerInputBehaviour_1 = __webpack_require__(/*! ../components/PlayerInputBehaviour */ "./src/game/components/PlayerInputBehaviour.ts");
//********************************************
function playerFactory(scene) {
    // create a game object that represents the player.
    var player = new stho_game_engine_1.GameObject(scene);
    // attach a rendering component to player game object.
    var renderer = player.attachComponent(stho_game_engine_1.ShapeRenderer);
    renderer.color = "purple";
    renderer.shape = new stho_game_engine_1.Triangle(30, 40);
    renderer.shape.rotationOffset = 90;
    // attach a PlayerInputBehaviour component to player.
    player.attachComponent(PlayerInputBehaviour_1.PlayerInputBehaviour);
    return player;
}
exports.default = playerFactory;


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
var stho_game_engine_1 = __webpack_require__(/*! stho-game-engine */ "./node_modules/stho-game-engine/dist/index.js");
var Player_1 = __webpack_require__(/*! ./game/prefab/Player */ "./src/game/prefab/Player.ts");
var game = new stho_game_engine_1.Game({ clearColor: "cornflowerblue" });
// create initial scene
var scene = new stho_game_engine_1.Scene(game);
// create and add camera to scene
var camera = new stho_game_engine_1.Camera(scene);
scene.setMainCamera(camera);
// player
scene.addGameObject(Player_1.default(scene));
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