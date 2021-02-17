import { IShape } from './IShape';
export declare class Rectangle implements IShape {
    "use strict": any;
    private _width;
    private _height;
    constructor(width: number, height: number);
    get width(): number;
    get heigth(): number;
}
