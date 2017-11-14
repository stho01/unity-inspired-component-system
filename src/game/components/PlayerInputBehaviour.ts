import { Behaviour } from "../../engine/components/Behaviour";
import { KeyCode } from "../../engine/input/KeyCode";
import { Transform } from "../../engine/components/Transform";
import { Vector2D } from "../../engine/math/Vector2D";

export class PlayerInputBahaviour extends Behaviour {
    
    public speed: number = 100;

    private _transform: Transform;
    
    initialize(): void {
        this._transform = this._owner.getComponent(Transform);
    }


    update(deltaTime: number): void {
        this._transform.direction = Vector2D.Zero;
        if (this._input.isKeyDown(KeyCode.A)) {
            this._transform.direction =  this._transform.direction.add(Vector2D.Left);
        }
        if (this._input.isKeyDown(KeyCode.D)) {
            this._transform.direction =  this._transform.direction.add(Vector2D.Right);
        }
        if (this._input.isKeyDown(KeyCode.W)) {
            this._transform.direction =  this._transform.direction.add(Vector2D.Up);
        }
        if (this._input.isKeyDown(KeyCode.S)) {
            this._transform.direction =  this._transform.direction.add(Vector2D.Down);
        }

        let acceleration: Vector2D = this._transform.direction.multiply(this.speed * deltaTime);
        this._transform.position = this._transform.position.add(acceleration);
    }

}