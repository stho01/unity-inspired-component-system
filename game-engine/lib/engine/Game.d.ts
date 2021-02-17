import { InputManager } from "./input/InputManager";
import { ViewPort } from "./types/ViewPort";
import { SceneManager } from './scenes/SceneManager';
export declare class Game {
    "use strict": any;
    readonly _input: InputManager;
    private readonly _canvas;
    private readonly _renderer;
    private readonly _sceneManager;
    private _options;
    private _previousDelta;
    private _viewPort;
    constructor(options?: GameOptions);
    get viewPort(): ViewPort;
    get input(): InputManager;
    get sceneManager(): SceneManager;
    get canvas(): HTMLCanvasElement;
    /**
     * Initialize game variables and configs.
     * @param options
     */
    init(): Game;
    /**
     * Start game loop
     */
    run(): void;
    /**
     * Updates the view port.
     */
    private _updateViewPort;
    /**
     * Update and redraw game state.
     *
     * @param now
     */
    private _update;
    /**
     * Clear canvas and render scene.
     *
     * @param dt
     */
    private _render;
}
/**
 *
 */
export interface GameOptions {
    clearColor?: string;
}
