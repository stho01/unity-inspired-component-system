import { Vector2D } from './../math/Vector2D';
import { IShape } from './IShape';

export class Rectangle implements IShape {
    "use strict";

    //********************************************
    //** attributes:
    //********************************************
    
    private _width  : number;
    private _height : number;

    //********************************************
    //** ctor:
    //********************************************
    
    constructor(width: number, height: number) {
        this._width   = width;
        this._height  = height;
    }
    
    //********************************************
    //** getters:
    //********************************************

    get width()     : number   { return this._width; }
    get heigth()    : number   { return this._height; }
}