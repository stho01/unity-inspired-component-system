import { GameObject } from "../gameobjects/gameobject";
import { IDisposable } from "../../abstract/IDisposable";
export declare abstract class Component implements IDisposable {
    protected _owner: GameObject;
    constructor(owner: GameObject);
    initialize(): void;
    dispose(): void;
}
