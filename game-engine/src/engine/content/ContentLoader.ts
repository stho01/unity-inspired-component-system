import {ECSRegistry} from "../ecs/Ecs";
import {Sprite} from "../components/Sprite";
import {ContentStore} from "./ContentStore";

export class ContentLoader {

    //********************************************
    //** fields:
    //********************************************

    private _registry: ECSRegistry;
    private _contentStore: ContentStore;

    //********************************************
    //** ctor:
    //********************************************
    
    constructor(registry: ECSRegistry, contentStore: ContentStore) {
        this._registry = registry;
        this._contentStore = contentStore;

    }
    
    //********************************************
    //** public:
    //********************************************
    
    async preload(): Promise<void> {
        const sprites = this._registry.getAllComponents(Sprite);
        const tasks = sprites.map(sprite => {
            return this._contentStore.addTexture(sprite.path);
        });
        await Promise.all(tasks);
    }

}