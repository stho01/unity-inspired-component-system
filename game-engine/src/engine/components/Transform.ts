import {Vector2D} from "../math/Vector2D";

export class Transform {

    position: Vector2D;
    scale: Vector2D;
    angle: number;

    constructor(
        position: Vector2D = Vector2D.Zero,
        scale: Vector2D = Vector2D.One,
        angle: number = 0) {

        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }
}