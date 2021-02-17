import { IShape } from './IShape';
export declare class Circle implements IShape {
    "use strict": any;
    private _r;
    constructor(radius: number);
    get r(): number;
}
