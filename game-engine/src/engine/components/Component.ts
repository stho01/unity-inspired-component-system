import { GameObject } from "../gameobjects/gameobject";
import { IDisposable } from "../../abstract/IDisposable";

export abstract class Component implements IDisposable {

    //********************************************
    //** attributes:
    //********************************************
    
    protected _owner: GameObject;
    
    //********************************************
    //** ctor:
    //********************************************
    
    constructor(owner: GameObject) {
        this._owner = owner;
    }

    //********************************************
    //**public:
    //********************************************
    
    initialize(): void {}    
    dispose(): void {}
} 