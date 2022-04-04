import {System} from "../ecs/Ecs";
import {Transform} from "../components/Transform";
import {Sprite} from "../components/Sprite";
import IRenderer, {RenderRect} from "../rendering/IRenderer";
import {Rectangle} from "../geometry/Rectangle";
import Logger from "../infrastructure/Logger";
import {ContentStore} from "../content/ContentStore";

const logger = Logger.from("RenderingSystem.ts");

export class RenderingSystem extends System {

    private readonly _contentStore: ContentStore;

    constructor(contentStore: ContentStore) {
        super();
        this._contentStore = contentStore;
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

            const texture = this._contentStore.getTexture(sprite.path);

            const source: RenderRect = {
                x: 0,
                y: 0,
                width: texture.width,
                height: texture.height
            };
            const dest: RenderRect = {
                x: transform.position.x,
                y: transform.position.y,
                width: texture.width * transform.scale.x,
                height: texture.height * transform.scale.y
            };

            context.renderTexture(texture, source, dest);
        });
    }
}