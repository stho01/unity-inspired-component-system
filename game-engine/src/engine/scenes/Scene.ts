import { IState } from "../state/State";
import { Game } from "../Game";
import {ECSRegistry, Entity} from "../ecs/Ecs";
import MovementSystem from "../systems/MovementSystem";
import {RenderingSystem} from "../systems/RenderingSystem";
import {ContentLoader} from "../content/ContentLoader";

/**
 * A scene that can update and render game objects.
 */
export class Scene implements IState<Game> {

    //********************************************
    //**attributes:
    //********************************************

    private readonly _game            : Game;
    private readonly _registry        : ECSRegistry;
    private readonly _contentLoader   : ContentLoader;

    //********************************************
    //**ctor:
    //********************************************

    constructor(game: Game) {
        this._game = game;
        this._registry = new ECSRegistry();
        this._contentLoader = new ContentLoader(this._registry, game.contentStore);
    }

    //********************************************
    //**getters:
    //********************************************

    get game()          : Game          { return this._game;}

    //********************************************
    //**public:
    //********************************************

    /**
     * Create entity
     */
    createEntity(): Entity {
        return this._registry.createEntity();
    }

    /**
     * Initializes the scene and all
     * it's components.
     *
     * @param {Game} game
     */
    async initialize(game: Game): Promise<void> {
        this._registry.addSystem(MovementSystem);
        this._registry.addSystem(RenderingSystem, game.contentStore);

        // preload all textures and other contents
        // before the scene starts running.
        await this._contentLoader.preload();
    }

    /**
     * Update scene
     */
    update(deltaTime: number): void {
        this._registry.update();
        this._registry.getSystem(MovementSystem).update(deltaTime);
    }

    /**
     *
     */
    draw(): void {
        this._registry.getSystem(RenderingSystem).draw(this.game.renderer);
    }

    /**
     * Pause scene
     * @param game
     */
    pause(game: any): void {
        //TODO: pause rendering and updating
    }

    /**
     * Resume scene.
     * @param game
     */
    resume(game: any): void {
        //TODO: resume rendering and updating
    }

    /**
     * Dispose scene and all its components.
     * @param {Game} game
     */
    dispose(game: Game): void {
        // todo: unload used content
    }
}
