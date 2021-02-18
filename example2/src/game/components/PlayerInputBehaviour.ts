import {Behaviour, KeyCode, Transform, Vector2D} from 'game-engine';


export class PlayerInputBehaviour extends Behaviour {

    //********************************************************************************
    //** attributes:
    //********************************************************************************

    public thrust: number = 100;
    public _force: Vector2D = Vector2D.Zero;
    public _velocity: Vector2D = Vector2D.Zero;
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
        if (this._input.isKeyDown(KeyCode.A)) {
            this._applyForce(Vector2D.Left.multiply(this.thrust));
        }
        if (this._input.isKeyDown(KeyCode.D)) {
            this._applyForce(Vector2D.Right.multiply(this.thrust));
        }
        if (this._input.isKeyDown(KeyCode.W)) {
            this._applyForce(Vector2D.Up.multiply(this.thrust));
        }
        if (this._input.isKeyDown(KeyCode.S)) {
            this._applyForce(Vector2D.Down.multiply(this.thrust));
        }

        this._applyFriction();
        this._applyDrag();

        let acceleration: Vector2D = this._force.multiply(deltaTime);
        this._velocity = this._velocity.add(acceleration);
        this._transform.translate(this._velocity);
        this._force = Vector2D.Zero;
    }

    private _applyDrag() {
        const drag: Vector2D = this._velocity.normalize().multiply(-1);
        const c = 0.1;
        this._applyForce(drag.multiply(this._velocity.lengthSqr() * c))
    }

    private _applyFriction(): void {
        let velLength = this._velocity.length();
        let forceLength = this._force.length();
        if (forceLength === 0 && velLength < 0.01 && velLength > -0.01) {
            this._force = this._force.multiply(0);
        } else {
            let f = this._velocity.normalize().multiply(-50);
            this._force = this._force.add(f);
        }
    }

    private _applyForce(force: Vector2D): void  {
        this._force = this._force.add(force);
    }
}
