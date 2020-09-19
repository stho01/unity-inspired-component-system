import { Behaviour } from "../../engine/components/Behaviour";
import { Transform } from "../../engine/components/Transform";
import { Vector2D } from "../../engine/math/Vector2D";

export class CenterBehaviour extends Behaviour {

    private _transform: Transform;

    initialize() {
        this._transform = this._owner.getComponent(Transform);
    }

    update(deltaTime: number): void {
        let viewPort = this._owner.scene.game.viewPort;
        this._transform.position = new Vector2D(viewPort.width/2, viewPort.height/2);
    }
}
