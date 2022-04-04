import {System} from "../ecs/Ecs";
import {Transform} from "../components/Transform";
import {RigidBody} from "../components/RigidBody";
import Logger from "../infrastructure/Logger";

//********************************************

const logger = Logger.from("MovementSystem.ts");

//********************************************

export default class MovementSystem extends System {

    constructor() {
        super();
        this.requireComponent(Transform);
        this.requireComponent(RigidBody);
        logger.info("MovementSystem created...");
    }

    update(deltaTime: number): void {
        this.entities.forEach(e => {
            const transform = e.getComponent(Transform);
            const rigidBody = e.getComponent(RigidBody);

            transform.position = transform.position.add(rigidBody.velocity.multiply(deltaTime));
            transform.angle += 180 * deltaTime;
        });
    }
}