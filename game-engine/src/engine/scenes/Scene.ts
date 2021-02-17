import { IState } from "../state/State";
import { Game } from "../Game";
import { UpdateManager } from "../update/UpdateManager";
import { RenderManager } from "../rendering/RenderManager";
import { GameObject } from "../gameobjects/gameobject";
import {Camera} from "../gameobjects/Camera";

/**
 * A scene that can update and render game objects.
 */
export class Scene implements IState<Game> {
    
    //********************************************
    //**attributes:
    //********************************************
    
    private readonly _game            : Game;
    private readonly _updateManager   : UpdateManager;
    private readonly _rendererManager : RenderManager;
    private readonly _gameObjects     : GameObject[] = [];
    private _camera: Camera;
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(game: Game) {
        this._game = game;
        this._updateManager = new UpdateManager();
        this._rendererManager = new RenderManager(game.canvas, this);
    }
    
    //********************************************
    //**getters:
    //********************************************
    
    get game()          : Game          { return this._game;}
    get updateManager() : UpdateManager { return this._updateManager; }
    get renderer()      : RenderManager { return this._rendererManager; }
    get camera()        : Camera        { return this._camera; }
    
    //********************************************
    //**public:
    //********************************************

    /**
     * Adds a game object to the scene
     * 
     * @param {GameObject} gameobject
     */
    addGameObject(gameobject: GameObject): void {
        this._gameObjects.push(gameobject);
    } 

    /**
     * Sets the main camera and adds camera to scene
     * @param {Camera} camera
     */
    setMainCamera(camera: Camera): void {
        this._camera = camera;
        this._rendererManager.camera = camera;
        this.addGameObject(camera);
    }

    /**
     * Initializes the scene and all 
     * it's components.
     * 
     * @param {Game} game
     */
    initialize(game: Game): void {
        
        this._gameObjects.forEach(x => x.initialize());
    }

    /**
     * Pause scene
     * @param entity
     */
    pause(entity: any): void {
        //TODO: pause rendering and updating    
    }

    /**
     * Resume scene. 
     * @param entity
     */
    resume(entity: any): void {
        //TODO: resume rendering and updating
    }

    /**
     * Dispose scene and all its components. 
     * @param {Game} entity
     */
    dispose(entity: Game): void {
        this._gameObjects.forEach(x => x.dispose());
    }
}