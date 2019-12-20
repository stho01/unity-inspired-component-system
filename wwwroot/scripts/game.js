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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine/Game.ts":
/*!****************************!*\
  !*** ./src/engine/Game.ts ***!
  \****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry/Rectangle */ "./src/engine/geometry/Rectangle.ts");
/* harmony import */ var _rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering/Canvas2DRenderer */ "./src/engine/rendering/Canvas2DRenderer.ts");
/* harmony import */ var _input_InputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/InputManager */ "./src/engine/input/InputManager.ts");
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/SceneManager */ "./src/engine/scenes/SceneManager.ts");




var Game = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Game(options) {
        this._previousDelta = 0;
        this._options = Object.assign({}, _defaultOptions, options);
        this._canvas = document.getElementById("c");
        this._input = new _input_InputManager__WEBPACK_IMPORTED_MODULE_2__["InputManager"]();
        this._renderer = new _rendering_Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_1__["Canvas2DRenderer"](this._canvas);
        this._sceneManager = new _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_3__["SceneManager"](this);
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
        var clearRect = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](this._viewPort.width, this._viewPort.height);
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


/***/ }),

/***/ "./src/engine/components/Behaviour.ts":
/*!********************************************!*\
  !*** ./src/engine/components/Behaviour.ts ***!
  \********************************************/
/*! exports provided: Behaviour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Behaviour", function() { return Behaviour; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/engine/components/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/engine/components/Component.ts":
/*!********************************************!*\
  !*** ./src/engine/components/Component.ts ***!
  \********************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
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

/***/ "./src/engine/components/ShapeRenderer.ts":
/*!************************************************!*\
  !*** ./src/engine/components/ShapeRenderer.ts ***!
  \************************************************/
/*! exports provided: ShapeRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeRenderer", function() { return ShapeRenderer; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/engine/components/Component.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transform */ "./src/engine/components/Transform.ts");
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Circle */ "./src/engine/geometry/Circle.ts");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/engine/geometry/Rectangle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
        this._transform = this._owner.getComponent(_Transform__WEBPACK_IMPORTED_MODULE_1__["Transform"]);
    };
    /**
     *
     * @param ctx
     */
    ShapeRenderer.prototype.render = function (renderer, camera) {
        var screenPos = camera.getScreenPosition(this._owner);
        if (this.shape instanceof _geometry_Circle__WEBPACK_IMPORTED_MODULE_2__["Circle"]) {
            var c = new _geometry_Circle__WEBPACK_IMPORTED_MODULE_2__["Circle"](this.shape.r * this._transform.scale.x);
            renderer.renderCircle(screenPos.x, screenPos.y, c, this.color);
        }
        else if (this.shape instanceof _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"]) {
            var rect = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](this.shape.width * this._transform.scale.x, this.shape.heigth * this._transform.scale.y);
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
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/engine/components/Transform.ts":
/*!********************************************!*\
  !*** ./src/engine/components/Transform.ts ***!
  \********************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector2D */ "./src/engine/math/Vector2D.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/engine/components/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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


var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["Vector2D"].Zero;
        _this._rotation = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["Vector2D"].Zero;
        _this._scale = _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["Vector2D"].One;
        return _this;
    }
    Object.defineProperty(Transform.prototype, "position", {
        get: function () { return this._position; },
        set: function (v) { this._position = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (v) { this._rotation = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () { return this._scale; },
        set: function (v) { this._scale = v; },
        enumerable: true,
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
}(_Component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/engine/gameobjects/Camera.ts":
/*!******************************************!*\
  !*** ./src/engine/gameobjects/Camera.ts ***!
  \******************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ "./src/engine/gameobjects/gameobject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
}(_gameobject__WEBPACK_IMPORTED_MODULE_0__["GameObject"]));



/***/ }),

/***/ "./src/engine/gameobjects/gameobject.ts":
/*!**********************************************!*\
  !*** ./src/engine/gameobjects/gameobject.ts ***!
  \**********************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var _components_Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Transform */ "./src/engine/components/Transform.ts");

var GameObject = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function GameObject(scene, name) {
        this._children = new Set();
        this._scene = scene;
        this._components = new Map();
        this._transform = new _components_Transform__WEBPACK_IMPORTED_MODULE_0__["Transform"](this);
        this._transform = this.attachComponent(_components_Transform__WEBPACK_IMPORTED_MODULE_0__["Transform"]);
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
    Object.defineProperty(GameObject.prototype, "children", {
        get: function () { return Array.from(this._children); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
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
        if (type === _components_Transform__WEBPACK_IMPORTED_MODULE_0__["Transform"] && this._components.has(type)) {
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



/***/ }),

/***/ "./src/engine/geometry/Circle.ts":
/*!***************************************!*\
  !*** ./src/engine/geometry/Circle.ts ***!
  \***************************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
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

/***/ "./src/engine/geometry/Rectangle.ts":
/*!******************************************!*\
  !*** ./src/engine/geometry/Rectangle.ts ***!
  \******************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
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

/***/ "./src/engine/input/InputManager.ts":
/*!******************************************!*\
  !*** ./src/engine/input/InputManager.ts ***!
  \******************************************/
/*! exports provided: InputManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputManager", function() { return InputManager; });
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

/***/ "./src/engine/input/KeyCode.ts":
/*!*************************************!*\
  !*** ./src/engine/input/KeyCode.ts ***!
  \*************************************/
/*! exports provided: KeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
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


/***/ }),

/***/ "./src/engine/math/Vector2D.ts":
/*!*************************************!*\
  !*** ./src/engine/math/Vector2D.ts ***!
  \*************************************/
/*! exports provided: Vector2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return Vector2D; });
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

/***/ "./src/engine/rendering/Canvas2DRenderer.ts":
/*!**************************************************!*\
  !*** ./src/engine/rendering/Canvas2DRenderer.ts ***!
  \**************************************************/
/*! exports provided: Canvas2DRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas2DRenderer", function() { return Canvas2DRenderer; });
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../geometry/Circle */ "./src/engine/geometry/Circle.ts");

var Canvas2DRenderer = /** @class */ (function () {
    //********************************************
    //** ctor:
    //********************************************
    function Canvas2DRenderer(canvas) {
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
        var c = new _geometry_Circle__WEBPACK_IMPORTED_MODULE_0__["Circle"](10);
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
    Canvas2DRenderer.prototype.getTextWidth = function (txt) {
        this._ctx.font = "30px Arial";
        return this._ctx.measureText(txt).width;
    };
    return Canvas2DRenderer;
}());



/***/ }),

/***/ "./src/engine/rendering/RenderManager.ts":
/*!***********************************************!*\
  !*** ./src/engine/rendering/RenderManager.ts ***!
  \***********************************************/
/*! exports provided: RenderManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderManager", function() { return RenderManager; });
/* harmony import */ var _Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas2DRenderer */ "./src/engine/rendering/Canvas2DRenderer.ts");

var RenderManager = /** @class */ (function () {
    //********************************************
    //**ctor:
    //********************************************
    function RenderManager(canvas, scene) {
        this._renderables = new Set();
        this._renderer = new _Canvas2DRenderer__WEBPACK_IMPORTED_MODULE_0__["Canvas2DRenderer"](canvas);
        this._scene = scene;
    }
    Object.defineProperty(RenderManager.prototype, "camera", {
        //********************************************
        //**public:
        //********************************************
        get: function () { return this._camera; },
        set: function (camera) { this._camera = camera; },
        enumerable: true,
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



/***/ }),

/***/ "./src/engine/scenes/Scene.ts":
/*!************************************!*\
  !*** ./src/engine/scenes/Scene.ts ***!
  \************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _update_UpdateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update/UpdateManager */ "./src/engine/update/UpdateManager.ts");
/* harmony import */ var _rendering_RenderManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/RenderManager */ "./src/engine/rendering/RenderManager.ts");


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
        this._updateManager = new _update_UpdateManager__WEBPACK_IMPORTED_MODULE_0__["UpdateManager"]();
        this._rendererManager = new _rendering_RenderManager__WEBPACK_IMPORTED_MODULE_1__["RenderManager"](game.canvas, this);
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
    Object.defineProperty(Scene.prototype, "camera", {
        get: function () { return this._camera; },
        enumerable: true,
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



/***/ }),

/***/ "./src/engine/scenes/SceneManager.ts":
/*!*******************************************!*\
  !*** ./src/engine/scenes/SceneManager.ts ***!
  \*******************************************/
/*! exports provided: SceneManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneManager", function() { return SceneManager; });
/* harmony import */ var _state_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/StateMachine */ "./src/engine/state/StateMachine.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
}(_state_StateMachine__WEBPACK_IMPORTED_MODULE_0__["StateMachine"]));



/***/ }),

/***/ "./src/engine/state/StateMachine.ts":
/*!******************************************!*\
  !*** ./src/engine/state/StateMachine.ts ***!
  \******************************************/
/*! exports provided: StateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachine", function() { return StateMachine; });
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

/***/ "./src/engine/update/UpdateManager.ts":
/*!********************************************!*\
  !*** ./src/engine/update/UpdateManager.ts ***!
  \********************************************/
/*! exports provided: UpdateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateManager", function() { return UpdateManager; });
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

/***/ "./src/game/components/MoveCameraBehaviour.ts":
/*!****************************************************!*\
  !*** ./src/game/components/MoveCameraBehaviour.ts ***!
  \****************************************************/
/*! exports provided: MoveCameraBehaviour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveCameraBehaviour", function() { return MoveCameraBehaviour; });
/* harmony import */ var _engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/Behaviour */ "./src/engine/components/Behaviour.ts");
/* harmony import */ var _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/math/Vector2D */ "./src/engine/math/Vector2D.ts");
/* harmony import */ var _engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/input/KeyCode */ "./src/engine/input/KeyCode.ts");
/* harmony import */ var _engine_components_Transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../engine/components/Transform */ "./src/engine/components/Transform.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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




var MoveCameraBehaviour = /** @class */ (function (_super) {
    __extends(MoveCameraBehaviour, _super);
    function MoveCameraBehaviour() {
        //********************************************************************************
        //** attributes:
        //********************************************************************************
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 100;
        return _this;
    }
    //********************************************************************************
    //** public:
    //********************************************************************************
    /**
     * Initialize component.
     */
    MoveCameraBehaviour.prototype.initialize = function () {
        this._transform = this._owner.getComponent(_engine_components_Transform__WEBPACK_IMPORTED_MODULE_3__["Transform"]);
    };
    /**
     * Update component.
     * @param {number} deltaTime
     */
    MoveCameraBehaviour.prototype.update = function (deltaTime) {
        var dir = _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"].Zero;
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_2__["KeyCode"].Arrow_Left)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"].Left);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_2__["KeyCode"].Arrow_Right)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"].Right);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_2__["KeyCode"].Arrow_Up)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"].Up);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_2__["KeyCode"].Arrow_Down)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["Vector2D"].Down);
        }
        var acceleration = dir.multiply(this.speed * deltaTime);
        this._transform.translate(acceleration);
    };
    return MoveCameraBehaviour;
}(_engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_0__["Behaviour"]));



/***/ }),

/***/ "./src/game/components/PlayerInputBehaviour.ts":
/*!*****************************************************!*\
  !*** ./src/game/components/PlayerInputBehaviour.ts ***!
  \*****************************************************/
/*! exports provided: PlayerInputBehaviour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInputBehaviour", function() { return PlayerInputBehaviour; });
/* harmony import */ var _engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/components/Behaviour */ "./src/engine/components/Behaviour.ts");
/* harmony import */ var _engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/input/KeyCode */ "./src/engine/input/KeyCode.ts");
/* harmony import */ var _engine_components_Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/components/Transform */ "./src/engine/components/Transform.ts");
/* harmony import */ var _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../engine/math/Vector2D */ "./src/engine/math/Vector2D.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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




var PlayerInputBehaviour = /** @class */ (function (_super) {
    __extends(PlayerInputBehaviour, _super);
    function PlayerInputBehaviour() {
        //********************************************************************************
        //** attributes:
        //********************************************************************************
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 100;
        return _this;
    }
    //********************************************************************************
    //** public:
    //********************************************************************************
    /**
     * Initialize component
     */
    PlayerInputBehaviour.prototype.initialize = function () {
        this._transform = this._owner.getComponent(_engine_components_Transform__WEBPACK_IMPORTED_MODULE_2__["Transform"]);
    };
    /**
     * Update component
     * @param {number} deltaTime
     */
    PlayerInputBehaviour.prototype.update = function (deltaTime) {
        var dir = _engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__["Vector2D"].Zero;
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["KeyCode"].A)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__["Vector2D"].Left);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["KeyCode"].D)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__["Vector2D"].Right);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["KeyCode"].W)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__["Vector2D"].Up);
        }
        if (this._input.isKeyDown(_engine_input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["KeyCode"].S)) {
            dir = dir.add(_engine_math_Vector2D__WEBPACK_IMPORTED_MODULE_3__["Vector2D"].Down);
        }
        var acceleration = dir.multiply(this.speed * deltaTime);
        this._transform.translate(acceleration);
    };
    return PlayerInputBehaviour;
}(_engine_components_Behaviour__WEBPACK_IMPORTED_MODULE_0__["Behaviour"]));



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Game */ "./src/engine/Game.ts");
/* harmony import */ var _engine_scenes_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/scenes/Scene */ "./src/engine/scenes/Scene.ts");
/* harmony import */ var _engine_components_ShapeRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/components/ShapeRenderer */ "./src/engine/components/ShapeRenderer.ts");
/* harmony import */ var _engine_geometry_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/geometry/Circle */ "./src/engine/geometry/Circle.ts");
/* harmony import */ var _game_components_PlayerInputBehaviour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/components/PlayerInputBehaviour */ "./src/game/components/PlayerInputBehaviour.ts");
/* harmony import */ var _engine_gameobjects_gameobject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/gameobjects/gameobject */ "./src/engine/gameobjects/gameobject.ts");
/* harmony import */ var _engine_gameobjects_Camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/gameobjects/Camera */ "./src/engine/gameobjects/Camera.ts");
/* harmony import */ var _game_components_MoveCameraBehaviour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/components/MoveCameraBehaviour */ "./src/game/components/MoveCameraBehaviour.ts");
/* harmony import */ var _engine_geometry_Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/geometry/Rectangle */ "./src/engine/geometry/Rectangle.ts");









// create game instance. 
var game = new _engine_Game__WEBPACK_IMPORTED_MODULE_0__["Game"]({ clearColor: "wheat" });
// create initial scene 
var initialScene = new _engine_scenes_Scene__WEBPACK_IMPORTED_MODULE_1__["Scene"](game);
// create and add camera to scene
var camera = new _engine_gameobjects_Camera__WEBPACK_IMPORTED_MODULE_6__["Camera"](initialScene);
camera.attachComponent(_game_components_MoveCameraBehaviour__WEBPACK_IMPORTED_MODULE_7__["MoveCameraBehaviour"]);
initialScene.setMainCamera(camera);
// create a game object that represents the player.
var player = new _engine_gameobjects_gameobject__WEBPACK_IMPORTED_MODULE_5__["GameObject"](initialScene);
// attach a rendering component to player game object.
var renderer = player.attachComponent(_engine_components_ShapeRenderer__WEBPACK_IMPORTED_MODULE_2__["ShapeRenderer"]);
renderer.color = "blue";
renderer.shape = new _engine_geometry_Circle__WEBPACK_IMPORTED_MODULE_3__["Circle"](30);
// attach a PlayerInputBehaviour component to player.
player.attachComponent(_game_components_PlayerInputBehaviour__WEBPACK_IMPORTED_MODULE_4__["PlayerInputBehaviour"]);
// add player to scene. 
initialScene.addGameObject(player);
// create a game object that represents a obstacle 
var obstacle = new _engine_gameobjects_gameobject__WEBPACK_IMPORTED_MODULE_5__["GameObject"](initialScene);
obstacle.transform.translate(100, 100);
var obstacleShape = obstacle.attachComponent(_engine_components_ShapeRenderer__WEBPACK_IMPORTED_MODULE_2__["ShapeRenderer"]);
obstacleShape.color = "red";
obstacleShape.shape = new _engine_geometry_Rectangle__WEBPACK_IMPORTED_MODULE_8__["Rectangle"](100, 100);
initialScene.addGameObject(obstacle);
// push initial scene to game's scene manager. 
game.sceneManager.push(initialScene);
// initialize game
game.init();
// run game loop
game.run();


/***/ })

/******/ });
//# sourceMappingURL=game.js.map