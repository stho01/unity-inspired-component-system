import { Transform } from "../components/Transform";
import { Component } from "../components/Component";
import { Scene } from "../scenes/Scene";
import { IDisposable } from "../../abstract/IDisposable";
import { Prefab } from './Prefab';
import { Vector2D } from '../math/Vector2D';

//********************************************

export class GameObject implements IDisposable {

    //********************************************
    //** attributes:
    //********************************************

    private readonly _components : Map<new(owner: GameObject) => Component, Component[]>;
    private _transform           : Transform;
    private _scene               : Scene;
    private readonly _children   : Set<GameObject> = new Set<GameObject>();
    private _parent              : GameObject;
    private _name                : string;

    //********************************************
    //**ctor:
    //********************************************

    constructor(scene: Scene, name?: string) {
        this._scene         = scene;
        this._components    = new Map<new(owner: GameObject) => Component, Component[]>();
        this._transform     = new Transform(this);
        this._transform     = this.attachComponent(Transform);
    }

    //********************************************
    //** getters and setters:
    //********************************************

    get transform()  : Transform    { return this._transform; }
    get scene()      : Scene        { return this._scene; }
    get children()   : GameObject[] { return Array.from(this._children); }
    get parent()     : GameObject   { return this._parent; }
    get name()       : string       { return this._name; }
    set transform(v: Transform)     { this._transform = v; }

    //********************************************
    //**public:
    //********************************************

    initialize(): void {
        this._components.forEach(componentOfType => componentOfType.forEach(x => x.initialize()));
    }

    /**
     *
     * @param parent
     */
    setParent(parent: GameObject): void {
        if (parent != null) {
            parent.addChild(this);
            this._parent = parent;
        } else if(this._parent != null) {
            this._parent.removeChild(this);
            this._parent = null;
        }
    }

    /**
     *
     * @param child
     */
    addChild(child: GameObject): void {
        this._children.add(child);
    }

    /**
     *
     * @param child
     */
    removeChild(child: GameObject): void {
        this._children.delete(child);
    }

    /**
     *
     * @param type
     */
    attachComponent<T extends Component>(type: new(owner: GameObject) => T): T {
        if (type == null) {
            throw new Error("Component cannot be null or undefined");
        }
        if (<any>type === Transform && this._components.has(type)) {
            throw new Error("A game object can only have one Transform component.");
        }
        let component = new type(this);

        let value = this._components.get(type);
         // Component does not exist on game object
        if(value == null) {
            this._components.set(type, [component]);
        }

        //  One or more components exist on game object. Add to existing list.
        else if(Array.isArray(value)) {
            value.push(component);
        }

        return component;
    }

    /**
     *
     * @param type
     * @param instance
     */
    detachComponent<T extends Component>(type: new(owner: GameObject) => T, instance: Component = null): T[] {
        if(this._components.has(type) === false) { return null; }

        if (instance != null) {
            let collection: Component[] = this._components.get(type);

            if (collection.length === 1) {
                let detached: Component = this.getComponent(type);
                this._components.delete(type);

                return [detached] as T[];
            } else {
                let detached: Component = collection[collection.indexOf(instance)];
                this._components.set(type, collection.slice(collection.indexOf(instance), 1));

                return [detached] as T[];
            }
        } else {
            let detached: Component[] = this._components.get(type);
            this._components.delete(type);

            return detached as T[];
        }
    }

    /**
     *
     * @param type
     */
    getComponent<T extends Component>(type: new(owner: GameObject) => T) : T {
        if (this._components.has(type) === false) {
            return null;
        }

        return this._components.get(type)[0] as T;
    }

    /**
     *
     * @param type
     */
    getComponents<T extends Component>(type: new(owner: GameObject) => T) : T[] {
        if (this._components.has(type) === false) {
            return null;
        }

        return this._components.get(type) as T[];
    }

    /**
     * Instantiate prefab
     * @param prefab
     * @param position
     * @param rotation
     */
    instantiate(prefab: Prefab, position: Vector2D = Vector2D.Zero, rotation: number = 0): GameObject {
        const gm = prefab(this.scene);
        gm.transform.translate(position);
        gm.transform.rotate(rotation);
        // gm.setParent(this);
        return gm;
    }

    /**
     *
     */
    dispose(): void {
        this._components.forEach(componentsOfType => componentsOfType.forEach(x => x.dispose()));
    }
}
