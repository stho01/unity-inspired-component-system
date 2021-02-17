import { Transform } from "../components/Transform";
import { Component } from "../components/Component";
import { Scene } from "../scenes/Scene";
import { IDisposable } from "../../abstract/IDisposable";
export declare class GameObject implements IDisposable {
    private readonly _components;
    private _transform;
    private _scene;
    private readonly _children;
    private _parent;
    private _name;
    constructor(scene: Scene, name?: string);
    get transform(): Transform;
    get scene(): Scene;
    get children(): GameObject[];
    get parent(): GameObject;
    get name(): string;
    set transform(v: Transform);
    initialize(): void;
    /**
     *
     * @param parent
     */
    setParent(parent: GameObject): void;
    /**
     *
     * @param child
     */
    addChild(child: GameObject): void;
    /**
     *
     * @param child
     */
    removeChild(child: GameObject): void;
    /**
     *
     * @param type
     */
    attachComponent<T extends Component>(type: new (owner: GameObject) => T): T;
    /**
     *
     * @param type
     * @param instance
     */
    detachComponent<T extends Component>(type: new (owner: GameObject) => T, instance?: Component): T[];
    /**
     *
     * @param type
     */
    getComponent<T extends Component>(type: new (owner: GameObject) => T): T;
    /**
     *
     * @param type
     */
    getComponents<T extends Component>(type: new (owner: GameObject) => T): T[];
    /**
     *
     */
    dispose(): void;
}
