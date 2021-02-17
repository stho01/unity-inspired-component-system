import { Point } from './../math/Point';
import { MouseButtonCode } from './MouseButtonCode';
import { KeyCode } from "./KeyCode";

export class InputManager {
    "use strict";
    
    //********************************************
    //** attributes:
    //********************************************
  
    private _currentKeyMap          : {[key:number]: boolean} = {};
    private _previousKeyMap         : {[key:number]: boolean} = {};
    private _currentMouseBtnMap     : {[key:number]: boolean} = {};
    private _previousMouseBtnMap    : {[key:number]: boolean} = {};
    private readonly _mousePosition : Point = {x: 0, y: 0};

    //********************************************
    //** ctor:
    //********************************************

    public InputManager() {

    }
    
    //********************************************
    //** public:
    //********************************************
    
    /**
     * 
     */
    init(): void {
        window.addEventListener("mousedown", this._onMouseDownEventHandler.bind(this));
        window.addEventListener("mouseup", this._onMouseUpEventHandler.bind(this));
        window.addEventListener("mousemove", this._onMouseMoveEventHandler.bind(this));
        window.addEventListener("keydown", this._onKeyDownEventHandler.bind(this));
        window.addEventListener("keyup", this._onKeyUpEventHandler.bind(this)); 
    }

    /**
     * 
     */
    dispose(): void {
        window.removeEventListener("mousedown", this._onMouseDownEventHandler.bind(this));
        window.removeEventListener("mouseup", this._onMouseUpEventHandler.bind(this));
        window.removeEventListener("mousemove", this._onMouseMoveEventHandler.bind(this));
        window.removeEventListener("keydown", this._onKeyDownEventHandler.bind(this));
        window.removeEventListener("keyup", this._onKeyUpEventHandler.bind(this)); 
    }


    /**
     * Gets the mouse position.
     */
    getMousePosition(relativeElement?: HTMLElement): Point {
        if (relativeElement == null) {
            return this._mousePosition;
        } else {
            let bbox    : ClientRect = relativeElement.getBoundingClientRect(),
                relativeX : number     = this._mousePosition.x - bbox.left,
                relativeY : number     = this._mousePosition.y - bbox.top;

            relativeX = Math.max(0, Math.min(relativeX, bbox.width));
            relativeY = Math.max(0, Math.min(relativeY, bbox.height));

            return {
                x: relativeX,
                y: relativeY
            }
        }
    }

    /**
     * Checks if the given mouse btn is held down.
     * 
     * @param btnCode 
     */
    isMouseButtonDown(btnCode: number|MouseButtonCode): boolean {
        return this._currentMouseBtnMap[btnCode] === true;
    }

    /**
     * Checks if the given mouse btn is pressed.
     * 
     * @param btnCode 
     */
    isMouseButtonPressed(btnCode: number|MouseButtonCode): boolean {
        return this._currentMouseBtnMap[btnCode] === true && this._previousMouseBtnMap[btnCode] !== true;
    }

    /**
     * 
     * @param btnCode 
     */
    isMouseButtonReleased(btnCode: number|MouseButtonCode): boolean {
        return this._currentMouseBtnMap[btnCode] !== true && this._previousMouseBtnMap[btnCode] === true;
    }

    /**
     * Checks if the given key is held down.
     * 
     * @param btnCode 
     */
    isKeyDown(keyCode: number|KeyCode): boolean {
        return this._currentKeyMap[keyCode] === true;
    }

     /**
     * Checks if the given key is pressed.
     * 
     * @param btnCode 
     */
    isKeyPressed(keyCode: number|KeyCode): boolean {
        return this._currentKeyMap[keyCode] === true && this._previousKeyMap[keyCode] !== true;
    }
    
    /**
     * Update input state.
     */
    update(): void {
        this._previousKeyMap = Object.assign({}, this._currentKeyMap);
        this._previousMouseBtnMap = Object.assign({}, this._currentMouseBtnMap);
    }

    //********************************************
    //** private:
    //********************************************
    
    private _onMouseDownEventHandler(event: MouseEvent): void {
        this._currentMouseBtnMap[event.button] = true;
    }

    private _onMouseUpEventHandler(event: MouseEvent): void {
        delete this._currentMouseBtnMap[event.button];
    }

    private _onKeyDownEventHandler(event: KeyboardEvent): void {
        event.preventDefault();
        this._currentKeyMap[event.keyCode] = true;
    }

    private _onKeyUpEventHandler(event: KeyboardEvent): void {
        delete this._currentKeyMap[event.keyCode];
    }

    private _onMouseMoveEventHandler(event: MouseEvent): void {
        this._mousePosition.x = event.clientX;
        this._mousePosition.y = event.clientY;
    }
}