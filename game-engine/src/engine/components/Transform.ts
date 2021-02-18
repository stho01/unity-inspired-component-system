import { Vector2D } from "../math/Vector2D";
import { Component } from "./Component";

export class Transform extends Component {

    //********************************************
    //** attributes:
    //********************************************

    private _position : Vector2D = Vector2D.Zero;
    private _rotation : number = 0;
    private _rotationRad: number = 0;
    private _heading: Vector2D = Vector2D.Zero;
    private _scale : Vector2D = Vector2D.One;

    //********************************************
    //** props:
    //********************************************

    public get position() : Vector2D { return this._position; }
    public set position(v : Vector2D) { this._position = v; }

    public get rotation() : number { return this._rotation; }
    public set rotation(v : number) {
        this._rotation = v;
        this._rotationRad = v * Math.PI / 180;
        this._heading = new Vector2D(
            Math.cos(this._rotationRad),
            Math.sin(this._rotationRad)
        );
    }
    public get rotationRad(): number { return this._rotationRad; }
    public get heading(): Vector2D { return this._heading; }

    public get scale() : Vector2D { return this._scale; }
    public set scale(v : Vector2D) { this._scale = v; }

    //********************************************************************************
    //** public:
    //********************************************************************************

    /**
     * Translate the game object's position.
     *
     * @param {Vector2D} vec
     */
    translate(vec: Vector2D|number, y?: number): void {
        if(typeof vec === "number") {
            this._position = this._position.add(vec, y);
        } else {
            this._position = this._position.add(vec);
        }
    }

    /**
     * Sets the game object's angle of rotation
     * @param degrees
     */
    rotate(degrees: number): void {
        this._rotation += degrees;
        this._rotationRad += degrees * Math.PI / 180;
        this._heading = new Vector2D(
            Math.cos(this._rotationRad),
            Math.sin(this._rotationRad)
        );
    }
}
