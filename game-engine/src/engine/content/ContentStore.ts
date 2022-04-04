import Logger from "../infrastructure/Logger";
import {ECSRegistry} from "../ecs/Ecs";
import {Sprite} from "../components/Sprite";

const logger = Logger.from("ContentStore.ts");

export class ContentStore {

    //********************************************

    private _textures: Map<string, HTMLImageElement> = new Map<string, any>();

    //********************************************

    constructor() {
        logger.info("ContentStore constructor called!");
    }

    //********************************************

    public addTexture(path: string): Promise<void> {
        logger.debug(`Adding texture ${path}`);
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => {
                this._textures.set(path, image);
                logger.info(`Texture ${path} loaded and added to store.`);
                resolve();
            });
            image.src = path;
        });
    }

    //********************************************

    getTexture(name: string): HTMLImageElement {
        return this._textures.get(name);
    }

    //********************************************

    clear(): void {
        this._textures.clear();
    }

    //********************************************

    async preload(registry: ECSRegistry): Promise<void> {
        const sprites = registry.getAllComponents(Sprite);
    }
}