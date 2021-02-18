import {IShape} from './IShape';
import {Vertex} from '../types/CommonTypes';
import {Point} from '../math/Point';

export class Polygon implements IShape {

    //********************************************
    //** attributes:
    //********************************************

    private _vertices: Vertex[];
    private _origin: Point | null;

    //********************************************
    //** ctor:
    //********************************************

    constructor(vertices: Vertex[]) {
        this._vertices = vertices;
    }

    //********************************************
    //** getters:
    //********************************************

    get vertices(): Vertex[] { return this._vertices; }
    get origin(): Point {
        return this._origin || (this._origin = this._calculateCenterOrigin());
    }
    set origin(origin: Point) { this._origin = origin; }

    //********************************************
    //** methods:
    //********************************************

    private _calculateCenterOrigin(): Point {
        if (this._vertices.length === 0) {
            return { x: 0, y: 0 };
        }

        let minX: number = Number.MAX_SAFE_INTEGER;
        let maxX: number = -Number.MAX_SAFE_INTEGER;
        let minY: number = Number.MAX_SAFE_INTEGER;
        let maxY: number = -Number.MAX_SAFE_INTEGER;

        this._vertices.forEach(([x, y]) => {
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        });

        return {
            x: (maxX - minY) / 2,
            y: (maxY - minY) / 2
        };
    }
}
