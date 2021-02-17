import { Behaviour, KeyCode, Transform, Vector2D } from "game-engine";


export class PlayerInputBehaviour extends Behaviour {
    //********************************************************************************
    //** attributes:
    //********************************************************************************

    public speed: number = 100;
    private _transform: Transform;

    //********************************************************************************
    //** public:
    //********************************************************************************

    /**
     * Initialize component
     */
    initialize(): void {
        this._transform = this._owner.getComponent(Transform);
    }

    /**
     * Update component
     * @param {number} deltaTime
     */
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
