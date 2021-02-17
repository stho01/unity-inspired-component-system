import { Component } from "./Component";
import { IUpdateable } from "../update/IUpdateable";
import { GameObject } from "../gameobjects/gameobject";
import { InputManager } from "../input/InputManager";
export declare abstract class Behaviour extends Component implements IUpdateable {
    protected _input: InputManager;
    constructor(owner: GameObject);
    abstract update(deltaTime: number): void;
    /**
     * Remove component from update manager
     */
    dispose(): void;
}
