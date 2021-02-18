import { Shape } from './Shape';

export class Rectangle extends Shape {

    //********************************************
    //** attributes:
    //********************************************

    private _width  : number;
    private _height : number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(width: number, height: number) {
        super();
        this._width   = width;
        this._height  = height;
    }

    //********************************************
    //** getters:
    //********************************************

    get width()     : number   { return this._width; }
    get heigth()    : number   { return this._height; }
}
