import { Component } from "./Component";
import { IUpdateable } from "../update/IUpdateable";
import { GameObject } from "../gameobjects/gameobject";

export abstract class Behaviour extends Component implements IUpdateable {
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(owner: GameObject) {
        super(owner);
        // add component to update manager.
        owner.scene.updateManager.add(this);
    }
    
    //********************************************
    //**abstract:
    //********************************************
    
    abstract update(deltaTime: number): void;

    //********************************************
    //** 
    //********************************************
    
    /**
     * Remove component from update manager
     */
    dispose(): void {
        this._owner.scene.updateManager.remove(this);
        super.dispose();
    }
}