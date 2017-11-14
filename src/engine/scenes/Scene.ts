import { IState } from "../state/State";
import { Game } from "../Game";
import { UpdateManager } from "../update/UpdateManager";
import { RenderManager } from "../rendering/RenderManager";
import { GameObject } from "../gameobjects/gameobject";


export class Scene implements IState<Game> {
    
    //********************************************
    //**attributes:
    //********************************************
    
    private readonly _game            : Game;
    private readonly _updateManager   : UpdateManager;
    private readonly _rendererManager : RenderManager;
    private readonly _gameObjects     : GameObject[] = [];
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(game: Game) {
        this._game = game;
        this._updateManager = new UpdateManager();
        this._rendererManager = new RenderManager(game.canvas);
    }
    
    //********************************************
    //**getters:
    //********************************************
    
    get game(): Game {return this._game;}
    get updateManager(): UpdateManager { return this._updateManager; }
    get renderer(): RenderManager { return this._rendererManager; }
    
    //********************************************
    //**public:
    //********************************************

    addGameObject(gameobject: GameObject): void {
        this._gameObjects.push(gameobject);
    }

    initialize(game: Game): void {
        this._gameObjects.forEach(x => x.initialize());
    }


    pause(entity: any): void {
        //TODO: pause rendering and updating    
    } 

    resume(entity: any): void {
        //TODO: resume rendering and updating
    }

    dispose(entity: Game): void {
        this._gameObjects.forEach(x => x.dispose());
    }
}