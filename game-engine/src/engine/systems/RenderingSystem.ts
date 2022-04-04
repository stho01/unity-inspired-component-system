import {System} from "../ecs/Ecs";
import {Transform} from "../components/Transform";
import {Sprite} from "../components/Sprite";
import IRenderer from "../rendering/IRenderer";
import {Rectangle} from "../geometry/Rectangle";
import Logger from "../infrastructure/Logger";

const logger = Logger.from("RenderingSystem.ts");

export class RenderingSystem extends System {

    constructor() {
        super();
        this.requireComponent(Transform);
        this.requireComponent(Sprite);
        logger.info("RenderingSystem created...");
    }

    setCamera(): void {

    }

    draw(context: IRenderer): void {

        this.entities.forEach(e => {
            const transform = e.getComponent(Transform);
            const sprite = e.getComponent(Sprite);

            context.renderRect(
                transform.position.x,
                transform.position.y,
                new Rectangle(sprite.width, sprite.height),
                "white"
            );
        });
    }
}