import { Behaviour } from "../../engine/components/Behaviour";
import { KeyCode } from "../../engine/input/KeyCode";
import { Transform } from "../../engine/components/Transform";
import { Vector2D } from "../../engine/math/Vector2D";

export class PlayerInputBehaviour extends Behaviour {
    
    public speed: number = 100;

    private _transform: Transform;
    
    initialize(): void {
        this._transform = this._owner.getComponent(Transform);
    }

    update(deltaTime: number): void {
        let dir: Vector2D = Vector2D.Zero;
        if (this._input.isKeyDown(KeyCode.A)) {
            dir = dir.add(Vector2D.Left);
        }
        if (this._input.isKeyDown(KeyCode.D)) {
            dir = dir.add(Vector2D.Right); 
        }
        if (this._input.isKeyDown(KeyCode.W)) {
            dir = dir.add(Vector2D.Up);
        }
        if (this._input.isKeyDown(KeyCode.S)) {
            dir = dir.add(Vector2D.Down);
        }
        let acceleration: Vector2D = dir.multiply(this.speed * deltaTime);
        this._transform.translate(acceleration);
    }
}