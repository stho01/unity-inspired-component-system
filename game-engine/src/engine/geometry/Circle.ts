import {Shape} from './Shape';

export class Circle extends Shape {
    "use strict";
    //********************************************
    //** attributes:
    //********************************************

    private _r   : number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(radius: number) {
        super();
        this._r = radius;
    }

    //********************************************
    //** getters:
    //********************************************

    get r() { return this._r; }
}
