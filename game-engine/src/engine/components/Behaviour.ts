import { Component } from "./Component";
import { IUpdateable } from "../update/IUpdateable";
import { GameObject } from "../gameobjects/gameobject";
import { InputManager } from "../input/InputManager";
import {Prefab} from '../gameobjects/Prefab';
import {Vector2D} from '../math/Vector2D';

export abstract class Behaviour extends Component implements IUpdateable {

    protected _input: InputManager;

    //********************************************
    //**ctor:
    //********************************************

    constructor(owner: GameObject) {
        super(owner);
        // add component to update manager.
        owner.scene.updateManager.add(this);
        this._input = owner.scene.game.input;
    }

    //********************************************
    //** abstract:
    //********************************************

    abstract update(deltaTime: number): void;

    //********************************************
    //** public methods:
    //********************************************

    /**
     * Remove component from update manager
     */
    dispose(): void {
        this._owner.scene.updateManager.remove(this);
        super.dispose();
    }

    //********************************************

    /**
     * Instantiate a prefab.
     * @param prefab
     * @param position
     * @param rotation
     */
    instantiate(prefab: Prefab, position: Vector2D = Vector2D.Zero, rotation: number = 0): GameObject {
        return this._owner.instantiate(prefab, position, rotation);
    }
}
