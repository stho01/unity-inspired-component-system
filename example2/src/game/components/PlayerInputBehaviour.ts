import {Behaviour, KeyCode, Transform, Vector2D} from 'stho-game-engine';
import bullet from '../prefab/Bullet';

export class PlayerInputBehaviour extends Behaviour {

    //********************************************************************************
    //** attributes:
    //********************************************************************************

    public steeringForce = 540; // deg/s
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
            this._transform.rotate(-this.steeringForce * deltaTime);
        }
        if (this._input.isKeyDown(KeyCode.D)) {
            this._transform.rotate(this.steeringForce * deltaTime);
        }
        if (this._input.isKeyDown(KeyCode.Q)) {
            const force = this._transform.heading.rotate(-Math.PI/2).multiply(this.thrust);
            this._applyForce(force);
        }
        if (this._input.isKeyDown(KeyCode.E)) {
            const force = this._transform.heading.rotate(Math.PI/2).multiply(this.thrust);
            this._applyForce(force);
        }
        if (this._input.isKeyDown(KeyCode.W)) {
            this._applyForce(this._transform.heading.multiply(this.thrust));
        }
        if (this._input.isKeyDown(KeyCode.S)) {
            this._applyForce(this._transform.heading.multiply(-this.thrust));
        }
        if (this._input.isKeyDown(KeyCode.Space)) {
            this.instantiate(bullet, this._transform.position);
        }


        if (this._isStandingStill()) {
            this._force = Vector2D.Zero;
            this._velocity = Vector2D.Zero;
        } else {
            this._applyFriction();
            this._applyDrag();
        }

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
        let f = this._velocity.normalize().multiply(-50);
        this._force = this._force.add(f);
    }

    private _isStandingStill(): boolean {
        let velLength = this._velocity.lengthSqr();
        let forceLength = this._force.lengthSqr();

        return forceLength === 0
            && velLength < 0.1
            && velLength > -0.1;
    }

    private _applyForce(force: Vector2D): void  {
        this._force = this._force.add(force);
    }
}
