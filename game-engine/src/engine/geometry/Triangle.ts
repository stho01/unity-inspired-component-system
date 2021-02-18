import {Polygon} from './Polygon';

export class Triangle extends Polygon {

    //********************************************
    //** attributes:
    //********************************************

    private _width: number;
    private _height: number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(width: number, height: number) {
        super([
            [0,height * -0.5],
            [width * 0.5, height * 0.5],
            [width * -0.5, height * 0.5],
        ]);
        this._width = width;
        this._height = height;
    }

    get width(): number { return this._width; }
    get height(): number { return this._height; }
}
