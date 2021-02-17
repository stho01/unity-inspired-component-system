import { Point } from "./../math/point";
import { Vector2D } from "../math/Vector2D";
import { IShape } from "./IShape";
export declare class Line implements IShape {
    "use strict": any;
    private _p1;
    private _p2;
    private _dir;
    private _length;
    constructor(p1: Point | Vector2D, p2: Point | Vector2D);
    get p1(): Vector2D;
    get p2(): Vector2D;
    get direction(): Vector2D;
    get length(): number;
}
