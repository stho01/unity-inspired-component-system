import { Point } from './../math/Point';
import { MouseButtonCode } from './MouseButtonCode';
import { KeyCode } from "./KeyCode";
export declare class InputManager {
    "use strict": any;
    private _currentKeyMap;
    private _previousKeyMap;
    private _currentMouseBtnMap;
    private _previousMouseBtnMap;
    private readonly _mousePosition;
    InputManager(): void;
    /**
     *
     */
    init(): void;
    /**
     *
     */
    dispose(): void;
    /**
     * Gets the mouse position.
     */
    getMousePosition(relativeElement?: HTMLElement): Point;
    /**
     * Checks if the given mouse btn is held down.
     *
     * @param btnCode
     */
    isMouseButtonDown(btnCode: number | MouseButtonCode): boolean;
    /**
     * Checks if the given mouse btn is pressed.
     *
     * @param btnCode
     */
    isMouseButtonPressed(btnCode: number | MouseButtonCode): boolean;
    /**
     *
     * @param btnCode
     */
    isMouseButtonReleased(btnCode: number | MouseButtonCode): boolean;
    /**
     * Checks if the given key is held down.
     *
     * @param btnCode
     */
    isKeyDown(keyCode: number | KeyCode): boolean;
    /**
    * Checks if the given key is pressed.
    *
    * @param btnCode
    */
    isKeyPressed(keyCode: number | KeyCode): boolean;
    /**
     * Update input state.
     */
    update(): void;
    private _onMouseDownEventHandler;
    private _onMouseUpEventHandler;
    private _onKeyDownEventHandler;
    private _onKeyUpEventHandler;
    private _onMouseMoveEventHandler;
}
