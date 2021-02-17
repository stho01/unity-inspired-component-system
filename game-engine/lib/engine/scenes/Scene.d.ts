import { IState } from "../state/State";
import { Game } from "../Game";
import { UpdateManager } from "../update/UpdateManager";
import { RenderManager } from "../rendering/RenderManager";
import { GameObject } from "../gameobjects/gameobject";
import { Camera } from "../gameobjects/Camera";
/**
 * A scene that can update and render game objects.
 */
export declare class Scene implements IState<Game> {
    private readonly _game;
    private readonly _updateManager;
    private readonly _rendererManager;
    private readonly _gameObjects;
    private _camera;
    constructor(game: Game);
    get game(): Game;
    get updateManager(): UpdateManager;
    get renderer(): RenderManager;
    get camera(): Camera;
    /**
     * Adds a game object to the scene
     *
     * @param {GameObject} gameobject
     */
    addGameObject(gameobject: GameObject): void;
    /**
     * Sets the main camera and adds camera to scene
     * @param {Camera} camera
     */
    setMainCamera(camera: Camera): void;
    /**
     * Initializes the scene and all
     * it's components.
     *
     * @param {Game} game
     */
    initialize(game: Game): void;
    /**
     * Pause scene
     * @param entity
     */
    pause(entity: any): void;
    /**
     * Resume scene.
     * @param entity
     */
    resume(entity: any): void;
    /**
     * Dispose scene and all its components.
     * @param {Game} entity
     */
    dispose(entity: Game): void;
}
