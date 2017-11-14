import { Vector2D } from "../math/Vector2D";
import { Component } from "./Component";

export class Transform extends Component {
    private _position : Vector2D = Vector2D.Zero;
    public get position() : Vector2D { return this._position; }
    public set position(v : Vector2D) { this._position = v; }

    private _rotation : Vector2D = Vector2D.Zero;
    public get rotation() : Vector2D { return this._rotation; }
    public set rotation(v : Vector2D) { this._rotation = v; }
    
    private _scale : Vector2D = Vector2D.One;
    public get scale() : Vector2D { return this._scale; }
    public set scale(v : Vector2D) { this._scale = v; }
    
    //********************************************************************************
    //** public:
    //********************************************************************************
    
    /**
     * Translate the position in the direction of the vector.
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
}