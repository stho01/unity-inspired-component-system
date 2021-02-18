import { Point } from "./../math/point";
import { Vector2D } from "../math/Vector2D";
import { Shape } from "./Shape";

export class Line extends Shape {

    //********************************************
    //** attributes:
    //********************************************

    private _p1     : Vector2D;
    private _p2     : Vector2D;
    private _dir    : Vector2D;
    private _length : number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(p1: Point|Vector2D, p2: Point|Vector2D) {
        super();
        this._p1     = new Vector2D(p1.x, p1.y);
        this._p2     = new Vector2D(p2.x, p2.y);
        this._dir    = this._p2.subtract(this._p1);
        this._length = this._dir.length();
    }

    //********************************************
    //** getters:
    //********************************************

    get p1()        : Vector2D  { return this._p1; }
    get p2()        : Vector2D  { return this._p2; }
    get direction() : Vector2D  { return this._dir; }
    get length()    : number    { return this._length; }
}
