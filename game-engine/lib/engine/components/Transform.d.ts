import { Vector2D } from "../math/Vector2D";
import { Component } from "./Component";
export declare class Transform extends Component {
    private _position;
    get position(): Vector2D;
    set position(v: Vector2D);
    private _rotation;
    get rotation(): Vector2D;
    set rotation(v: Vector2D);
    private _scale;
    get scale(): Vector2D;
    set scale(v: Vector2D);
    /**
     * Translate the position in the direction of the vector.
     *
     * @param {Vector2D} vec
     */
    translate(vec: Vector2D | number, y?: number): void;
}
