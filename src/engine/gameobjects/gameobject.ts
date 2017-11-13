import { Vector2D } from "../math/Vector2D";
import { Transform } from "../components/Transform";
import { Component } from "../components/Component";
import { Scene } from "../scenes/Scene";
import { IDisposable } from "../../abstract/IDisposable";


interface ComponentConstructor {
    new(owner: GameObject);
}

export class GameObject implements IDisposable {
    
    //********************************************
    //** attributes:
    //********************************************
    
    private readonly _components: Map<ComponentConstructor, Component[]>;
    private _transform  : Transform;
    private _scene      : Scene;

    //********************************************
    //**ctor:
    //********************************************
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(scene: Scene) {
        this._scene         = scene;
        this._components    = new Map<ComponentConstructor, Component[]>();
        this._transform     = new Transform(this);
        this.attachComponent(Transform, this._transform);
    }
    
    //********************************************
    //** getters and setters:
    //********************************************
    
    public get transform()  : Transform { return this._transform; }
    public get scene()      : Scene { return this._scene; } 
    public set transform(v : Transform) { this._transform = v; }
    

    //********************************************
    //**public:
    //********************************************
    
    initialize(): void {
        this._components.forEach(componentOfType => componentOfType.forEach(x => x.initialize()));
    }

    /**
     * 
     * @param component 
     */
    attachComponent(type: ComponentConstructor, component: Component): void {
        if (component == null) {
            throw new Error("Component cannot be null or undefined");
        }
        if (component instanceof Transform && this._components.has(type)) {
            throw new Error("A game object can only have one Transform component.");
        }

        let value = this._components.get(type);
         // Component does not exist on game object
        if(value == null) {
            this._components.set(type, [component]);
        }
        //  One or more components exist on game object. Add to existing list.
        else if(Array.isArray(value)) { 
            value.push(component);
        }
    }

    /**
     * 
     * @param component 
     */
    detachComponent(type: ComponentConstructor, instance: Component = null): Component[] {
        if(this._components.has(type) === false) {
            return null;
        }
        
        if (instance != null) {
            let collection: Component[] = this._components.get(type);
            
            if (collection.length === 1) {  
                let detached: Component = this.getComponent(type); 
                this._components.delete(type);
            
                return [detached];
            } else {
                let detached: Component = collection[collection.indexOf(instance)]; 
                collection = collection.slice(collection.indexOf(instance), 1);
            
                return [detached];
            }
        } else {
            let detached: Component[] = this._components.get(type);
            this._components.delete(type);
            
            return detached;
        }
    }

    /**
     * 
     * @param component 
     */
    getComponent(type: ComponentConstructor) {
        if (this._components.has(type) === false) {
            return null;
        }

        return this._components.get(type)[0];
    }

    /**
     * 
     * @param constructor 
     */
    getComponents(type: ComponentConstructor): Component[] {
        if (this._components.has(type) === false) {
            return null;
        }

        return this._components.get(type);
    }

    /**
     * 
     */
    dispose(): void {
        this._components.forEach(componentsOfType => componentsOfType.forEach(x => x.dispose()));
    }
}