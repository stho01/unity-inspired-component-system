import { Rectangle } from './geometry/Rectangle';
import { Canvas2DRenderer } from "./rendering/Canvas2DRenderer";
import { InputManager } from "./input/InputManager";
import { ViewPort } from "./types/ViewPort";
import { SceneManager } from './scenes/SceneManager';
import { ECSRegistry } from "./ecs/Ecs"
import MovementSystem from "./systems/MovementSystem";
import IRenderer from "./rendering/IRenderer";
import {ContentStore} from "./content/ContentStore";

export class Game {
    "use strict";
    
    //********************************************
    //** attributes
    //********************************************
    
    public  readonly _input         : InputManager;
    private readonly _canvas        : HTMLCanvasElement;
    private readonly _renderer      : IRenderer;
    private readonly _sceneManager  : SceneManager;
    private readonly _contentStore  : ContentStore;
    private _options                : GameOptions;
    private _previousDelta          : number = 0;
    private _viewPort               : ViewPort;
    
    //********************************************
    //** ctor:
    //********************************************
    
    constructor(options?: GameOptions) { 
        this._options = Object.assign({}, _defaultOptions, options);        
        this._canvas        = document.getElementById("c") as HTMLCanvasElement;
        this._input         = new InputManager();
        this._renderer      = new Canvas2DRenderer(this._canvas);
        this._sceneManager  = new SceneManager(this);
        this._contentStore  = new ContentStore();

        this._updateViewPort();
    }
    
    //********************************************
    //** getters:
    //********************************************
    
    get viewPort()      : ViewPort      { return this._viewPort; }
    get input()         : InputManager  { return this._input; }
    get sceneManager()  : SceneManager  { return this._sceneManager; }
    get canvas()        : HTMLCanvasElement { return this._canvas; }
    get renderer()      : IRenderer { return this._renderer; }
    get contentStore()  : ContentStore {return this._contentStore;}
    
    //********************************************
    //**public:
    //********************************************
    
    /**
     * Initialize game variables and configs. 
     * @param options 
     */
    init(): Game {
        this._input.init();
        return this;
    }

    /**
     * Start game loop
     */
    run(): void {
        this._update(0);
    }

    //********************************************
    //**private:
    //********************************************
    
    /**
     * Updates the view port.
     */
    private _updateViewPort(): void {
        this._viewPort = {
            width:   Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height:  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }

        this._canvas.width = this._viewPort.width;
        this._canvas.height = this._viewPort.height;
    }

    /**
     * Update and redraw game state. 
     * 
     * @param now 
     */
    private _update(now: number): void {
        let deltaTime: number = (now - this._previousDelta)/1000;
        this._previousDelta = now;
        
        this._updateViewPort();
        
        this._sceneManager.update(deltaTime);
     
        this._render(deltaTime);

        this._input.update();
        requestAnimationFrame(this._update.bind(this));
    }

    /**
     * Clear canvas and render scene.
     * 
     * @param dt  
     */
    private _render(dt: number): void {
        let clearRect: Rectangle = new Rectangle(this._viewPort.width, this._viewPort.height);
        this._renderer.renderRect(0, 0, clearRect, this._options.clearColor);
        this._sceneManager.renderScene();
    }
}

/**
 * 
 */
export interface GameOptions {
    clearColor?: string;
}

/**
 * 
 */
let _defaultOptions: GameOptions = {
    clearColor: "#000000"
};
