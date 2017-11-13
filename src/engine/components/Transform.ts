import { Vector2D } from "../math/Vector2D";
import { Component } from "./Component";

export class Transform extends Component {
    private _position : Vector2D = Vector2D.Zero;
    public get position() : Vector2D { return this._position; }
    public set position(v : Vector2D) { this._position = v; }

    private _direction : Vector2D = Vector2D.Zero;
    public get direction() : Vector2D { return this._direction; }
    public set direction(v : Vector2D) { this._direction = v; }
    
    private _scale : Vector2D = Vector2D.One;
    public get scale() : Vector2D { return this._scale; }
    public set scale(v : Vector2D) { this._scale = v; }
}