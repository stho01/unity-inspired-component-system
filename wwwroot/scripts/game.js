/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
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
        enumerable: true,
        configurable: true
    });
    return Circle;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "heigth", {
        get: function () { return this._height; },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas2DRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_Circle__ = __webpack_require__(0);

var Canvas2DRenderer = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Canvas2DRenderer(canvas) {
        this._renderables = new Set();
        this._ctx = canvas.getContext("2d");
    }
    Object.defineProperty(Canvas2DRenderer.prototype, "renderingContext", {
        get: function () { return this._ctx; },
        enumerable: true,
        configurable: true
    });
    //********************************************
    //** public:
    //********************************************
    Canvas2DRenderer.prototype.addRenderable = function (renderable) {
        if (renderable == null) {
            throw new Error("Renderable cannot be null or undefined");
        }
        this._renderables.add(renderable);
    };
    /**
     *
     * @param renderable
     */
    Canvas2DRenderer.prototype.removeRenderable = function (renderable) {
        if (renderable == null) {
            throw new Error("Cannot delete renderable of null or undefined");
        }
        this._renderables.delete(renderable);
    };
    /**
     *
     */
    Canvas2DRenderer.prototype.render = function () {
        var _this = this;
        this._renderables.forEach(function (r) { return r.render(_this); });
    };
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
        var c = new __WEBPACK_IMPORTED_MODULE_0__geometry_Circle__["a" /* Circle */](10);
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
    return Canvas2DRenderer;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__["a" /* Vector2D */].Zero;
        _this._direction = __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__["a" /* Vector2D */].Zero;
        _this._scale = __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__["a" /* Vector2D */].One;
        return _this;
    }
    Object.defineProperty(Transform.prototype, "position", {
        get: function () { return this._position; },
        set: function (v) { this._position = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "direction", {
        get: function () { return this._direction; },
        set: function (v) { this._direction = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () { return this._scale; },
        set: function (v) { this._scale = v; },
        enumerable: true,
        configurable: true
    });
    return Transform;
}(__WEBPACK_IMPORTED_MODULE_1__Component__["a" /* Component */]));



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2D; });
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "isZero", {
        get: function () { return this.equal(Vector2D.Zero); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "isOne", {
        get: function () { return this.equal(Vector2D.One); },
        enumerable: true,
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
    Vector2D.prototype.add = function (vec) {
        var x, y;
        if (typeof vec === "number") {
            x = this._x + vec;
            y = this._y + vec;
        }
        else {
            x = this._x + vec.x;
            y = this._y + vec.y;
        }
        return new Vector2D(x, y);
    };
    /**
     * Subtracts another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.subtract = function (vec) {
        var x = this._x - vec.x, y = this._y - vec.y;
        return new Vector2D(x, y);
    };
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param multiplyWith
     */
    Vector2D.prototype.multiply = function (multiplyWith) {
        var x = 0, y = 0;
        if (typeof multiplyWith === "number") {
            x = this._x * multiplyWith;
            y = this._y * multiplyWith;
        }
        else {
            x = this._x * multiplyWith.x;
            y = this._y * multiplyWith.y;
        }
        return new Vector2D(x, y);
    };
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    Vector2D.prototype.divide = function (multiplyWith) {
        var x = 0, y = 0;
        if (typeof multiplyWith === "number") {
            x = this._x / multiplyWith;
            y = this._y / multiplyWith;
        }
        else {
            x = this._x / multiplyWith.x;
            y = this._y / multiplyWith.y;
        }
        return new Vector2D(x, y);
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



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
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



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_Game__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_scenes_Scene__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_gameobjects_player__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engine_components_ShapeRenderer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__engine_geometry_Circle__ = __webpack_require__(0);





__WEBPACK_IMPORTED_MODULE_0__engine_Game__["a" /* Game */].Instance.init({
    clearColor: "wheat"
});
var initialScene = new __WEBPACK_IMPORTED_MODULE_1__engine_scenes_Scene__["a" /* Scene */](__WEBPACK_IMPORTED_MODULE_0__engine_Game__["a" /* Game */].Instance);
var player = new __WEBPACK_IMPORTED_MODULE_2__game_gameobjects_player__["a" /* Player */](initialScene);
var renderer = new __WEBPACK_IMPORTED_MODULE_3__engine_components_ShapeRenderer__["a" /* ShapeRenderer */](player);
renderer.color = "blue";
renderer.shape = new __WEBPACK_IMPORTED_MODULE_4__engine_geometry_Circle__["a" /* Circle */](10);
player.attachComponent(__WEBPACK_IMPORTED_MODULE_3__engine_components_ShapeRenderer__["a" /* ShapeRenderer */], renderer);
__WEBPACK_IMPORTED_MODULE_0__engine_Game__["a" /* Game */].Instance.sceneManager.push(initialScene);
__WEBPACK_IMPORTED_MODULE_0__engine_Game__["a" /* Game */].Instance.run();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_Rectangle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_Canvas2DRenderer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_InputManager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_SceneManager__ = __webpack_require__(9);




var Game = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Game() {
        this._previousDelta = 0;
        this._canvas = document.getElementById("c");
        this._input = new __WEBPACK_IMPORTED_MODULE_2__input_InputManager__["a" /* InputManager */]();
        this._renderer = new __WEBPACK_IMPORTED_MODULE_1__rendering_Canvas2DRenderer__["a" /* Canvas2DRenderer */](this._canvas);
        this._sceneManager = new __WEBPACK_IMPORTED_MODULE_3__scenes_SceneManager__["a" /* SceneManager */](this);
        this._updateViewPort();
    }
    Object.defineProperty(Game.prototype, "viewPort", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._viewPort; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "input", {
        get: function () { return this._input; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "sceneManager", {
        get: function () { return this._sceneManager; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "canvas", {
        get: function () { return this._canvas; },
        enumerable: true,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    /**
     * Initialize game variables and configs.
     * @param options
     */
    Game.prototype.init = function (options) {
        this._options = Object.assign({}, _defaultOptions, options);
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
        var clearRect = new __WEBPACK_IMPORTED_MODULE_0__geometry_Rectangle__["a" /* Rectangle */](this._viewPort.width, this._viewPort.height);
        this._renderer.renderRect(0, 0, clearRect, this._options.clearColor);
        this._sceneManager.renderScene();
    };
    /**
     * Game intance.
     */
    Game.Instance = new Game();
    return Game;
}());

/**
 *
 */
var _defaultOptions = {
    clearColor: "#000000"
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputManager; });
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



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_StateMachine__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
}(__WEBPACK_IMPORTED_MODULE_0__state_StateMachine__["a" /* StateMachine */]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateMachine; });
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


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_UpdateManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_RenderManager__ = __webpack_require__(13);


var Scene = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function Scene(game) {
        this._gameObjects = [];
        this._game = game;
        this._updateManager = new __WEBPACK_IMPORTED_MODULE_0__update_UpdateManager__["a" /* UpdateManager */]();
        this._rendererManager = new __WEBPACK_IMPORTED_MODULE_1__rendering_RenderManager__["a" /* RenderManager */](game.canvas);
    }
    Object.defineProperty(Scene.prototype, "game", {
        //********************************************
        //**getters:
        //********************************************
        get: function () { return this._game; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "updateManager", {
        get: function () { return this._updateManager; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "renderer", {
        get: function () { return this._rendererManager; },
        enumerable: true,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    Scene.prototype.addGameObject = function (gameobject) {
        this._gameObjects.push(gameobject);
    };
    Scene.prototype.initialize = function (game) {
        this._gameObjects.forEach(function (x) { return x.initialize(); });
    };
    Scene.prototype.pause = function (entity) {
        //TODO: pause rendering and updating    
    };
    Scene.prototype.resume = function (entity) {
        //TODO: resume rendering and updating
    };
    Scene.prototype.dispose = function (entity) {
        this._gameObjects.forEach(function (x) { return x.dispose(); });
    };
    return Scene;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateManager; });
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



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas2DRenderer__ = __webpack_require__(2);

var RenderManager = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function RenderManager(canvas) {
        this._renderables = new Set();
        this._renderer = new __WEBPACK_IMPORTED_MODULE_0__Canvas2DRenderer__["a" /* Canvas2DRenderer */](canvas);
    }
    //********************************************
    //**public:
    //********************************************
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
        this._renderables.forEach(function (x) { return x.render(_this._renderer); });
    };
    return RenderManager;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_gameobjects_gameobject__ = __webpack_require__(15);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__engine_gameobjects_gameobject__["a" /* GameObject */]));



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Transform__ = __webpack_require__(3);

var GameObject = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    //********************************************
    //**ctor:
    //********************************************
    function GameObject(scene) {
        this._scene = scene;
        this._components = new Map();
        this._transform = new __WEBPACK_IMPORTED_MODULE_0__components_Transform__["a" /* Transform */](this);
        this.attachComponent(__WEBPACK_IMPORTED_MODULE_0__components_Transform__["a" /* Transform */], this._transform);
    }
    Object.defineProperty(GameObject.prototype, "transform", {
        //********************************************
        //** getters and setters:
        //********************************************
        get: function () { return this._transform; },
        set: function (v) { this._transform = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scene", {
        get: function () { return this._scene; },
        enumerable: true,
        configurable: true
    });
    //********************************************
    //**public:
    //********************************************
    GameObject.prototype.initialize = function () {
    };
    /**
     *
     * @param component
     */
    GameObject.prototype.attachComponent = function (constructor, component) {
        if (component == null) {
            throw new Error("Component cannot be null or undefined");
        }
        if (component instanceof __WEBPACK_IMPORTED_MODULE_0__components_Transform__["a" /* Transform */] && this._components.has(constructor)) {
            throw new Error("A game object can only have one Transform component.");
        }
        var value = this._components.get(constructor);
        // Component does not exist on game object
        if (value == null) {
            this._components.set(constructor, [component]);
        }
        else if (Array.isArray(value)) {
            value.push(component);
        }
        component.initialize();
    };
    /**
     *
     * @param component
     */
    GameObject.prototype.detachComponent = function (constructor, instance) {
        if (instance === void 0) { instance = null; }
        if (this._components.has(constructor) === false) {
            return null;
        }
        if (instance != null) {
            var collection = this._components.get(constructor);
            if (collection.length === 1) {
                var detached = this.getComponent(constructor);
                this._components.delete(constructor);
                return [detached];
            }
            else {
                var detached = collection[collection.indexOf(instance)];
                collection = collection.slice(collection.indexOf(instance), 1);
                return [detached];
            }
        }
        else {
            var detached = this._components.get(constructor);
            this._components.delete(constructor);
            return detached;
        }
    };
    /**
     *
     * @param component
     */
    GameObject.prototype.getComponent = function (constructor) {
        if (this._components.has(constructor) === false) {
            return null;
        }
        return this._components.get(constructor)[0];
    };
    /**
     *
     * @param constructor
     */
    GameObject.prototype.getComponents = function (constructor) {
        if (this._components.has(constructor) === false) {
            return null;
        }
        return this._components.get(constructor);
    };
    /**
     *
     */
    GameObject.prototype.dispose = function () {
        this._components.forEach(function (components) { return components.forEach(function (x) { return x.dispose(); }); });
    };
    return GameObject;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Transform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_Circle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometry_Rectangle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Line__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    ShapeRenderer.prototype.init = function () {
        this._transform = this._owner.getComponent(__WEBPACK_IMPORTED_MODULE_1__Transform__["a" /* Transform */]);
    };
    /**
     *
     * @param ctx
     */
    ShapeRenderer.prototype.render = function (renderer) {
        if (this.shape instanceof __WEBPACK_IMPORTED_MODULE_2__geometry_Circle__["a" /* Circle */]) {
            var c = new __WEBPACK_IMPORTED_MODULE_2__geometry_Circle__["a" /* Circle */](this.shape.r * this._transform.scale.x);
            renderer.renderCircle(this._transform.position.x, this._transform.position.y, c, this.color);
        }
        else if (this.shape instanceof __WEBPACK_IMPORTED_MODULE_3__geometry_Rectangle__["a" /* Rectangle */]) {
            var rect = new __WEBPACK_IMPORTED_MODULE_3__geometry_Rectangle__["a" /* Rectangle */](this.shape.width * this._transform.scale.x, this.shape.heigth * this._transform.scale.y);
            renderer.renderRect(this._transform.position.x, this._transform.position.y, this.shape, this.color);
        }
        else if (this.shape instanceof __WEBPACK_IMPORTED_MODULE_4__geometry_Line__["a" /* Line */]) {
            renderer.renderLine(this.shape, this.color);
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
}(__WEBPACK_IMPORTED_MODULE_0__Component__["a" /* Component */]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__ = __webpack_require__(4);

var Line = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Line(p1, p2) {
        this._p1 = new __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__["a" /* Vector2D */](p1.x, p1.y);
        this._p2 = new __WEBPACK_IMPORTED_MODULE_0__math_Vector2D__["a" /* Vector2D */](p2.x, p2.y);
        this._dir = this._p2.subtract(this._p1);
        this._length = this._dir.length();
    }
    Object.defineProperty(Line.prototype, "p1", {
        //********************************************
        //** getters:
        //********************************************
        get: function () { return this._p1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "p2", {
        get: function () { return this._p2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "direction", {
        get: function () { return this._dir; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "length", {
        get: function () { return this._length; },
        enumerable: true,
        configurable: true
    });
    return Line;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map