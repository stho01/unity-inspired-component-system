"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
var Transform_1 = require("../components/Transform");
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