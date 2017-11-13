import { Vector2D } from './../math/Vector2D';
import { IShape } from './IShape';

export class Circle implements IShape {
    "use strict";
    //********************************************
    //** attributes:
    //********************************************
    
    private _r   : number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(radius: number) {
        this._r = radius;
    }
    
    //********************************************
    //** getters:
    //********************************************
    
    get r() { return this._r; }
}