import {Vector2D} from "../math/Vector2D";

export class RigidBody {

    velocity: Vector2D;
    acceleration: Vector2D;

    constructor(velocity: Vector2D = Vector2D.Zero) {
        this.velocity = velocity;
        this.acceleration = Vector2D.Zero;
    }
}