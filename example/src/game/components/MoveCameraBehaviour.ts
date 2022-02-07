import {
    Behaviour,
    KeyCode,
    Transform,
    Vector2D
} from "stho-game-engine";

export class MoveCameraBehaviour extends Behaviour {

    //********************************************************************************
    //** attributes:
    //********************************************************************************

    public speed: number = 100;
    private _transform: Transform;

    //********************************************************************************
    //** public:
    //********************************************************************************

    /**
     * Initialize component.
     */
    initialize(): void {
        this._transform = this._owner.getComponent(Transform);
    }

    /**
     * Update component.
     * @param {number} deltaTime
     */
    update(deltaTime: number): void {
        let dir: Vector2D = Vector2D.Zero;

        if (this._input.isKeyDown(KeyCode.Arrow_Left)) {
            dir = dir.add(Vector2D.Left);
        }
        if (this._input.isKeyDown(KeyCode.Arrow_Right)) {
            dir = dir.add(Vector2D.Right);
        }
        if (this._input.isKeyDown(KeyCode.Arrow_Up)) {
            dir = dir.add(Vector2D.Up);
        }
        if (this._input.isKeyDown(KeyCode.Arrow_Down)) {
            dir = dir.add(Vector2D.Down);
        }

        let acceleration: Vector2D = dir.multiply(this.speed * deltaTime);
        this._transform.translate(acceleration);
    }
}
