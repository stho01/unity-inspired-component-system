import { IState } from "./State";

/**
 * A state machine for handeling states.
 */
export class StateMachine<T> {
    "use strict";

    //********************************************
    //** attributes:
    //********************************************
    
    private _options            : StateMachineOptions;
    private _stateStack         : IState<T>[] = [];
    private readonly _entity    : T;

    //********************************************
    //**ctor:
    //********************************************
    
    /**
     * 
     * @param entity The owner of this state manager. 
     * @param [options] State machine options.
     */
    constructor(entity: T, options?:StateMachineOptions) {
        this._options = Object.assign({}, _defaultOptions, options);
        this._entity  = entity;
    }

    /**
     * Sets the current state.
     * 
     * @param state 
     */
    push(state: IState<T>): void {
        if(state == null) {
            throw new Error("Cannot push null or undefinde to state stack");
        }

        if (this._stateStack.length > 0) {
            this.peek().pause(this._entity);
        }

        this._stateStack.push(state);

        // pause until initialized..
        state.pause(this._entity);
        state.initialize(this._entity)
            .then(() => {
                // locked and loaded...
                // start/resume state...
                state.resume(this._entity);
            });
    }

    /**
     * Sets the active state and removes resets history. 
     * 
     * @param state 
     */
    pushAndClearHistory(state: IState<T>): void {
        if (state == null) {
            throw new Error("State cannot be null or undefined");
        }

        this._stateStack = [];
        this._stateStack.push(state);
        state.initialize(this._entity)
    }

    /**
     * Returns the first element in the stack without 
     * removing it.
     */
    peek(): IState<T> {
        if(this._stateStack.length === 0) {
            return null;
        }

        return this._stateStack[this._stateStack.length-1];
    }
    
    /**
     * Sets state history.
     * 
     * @param states 
     */
    setHistory(states: IState<T>[]): void {
        if (states == null) {
            throw new Error("Cannot set history state collection is null or undefined");
        }

        this._stateStack = states.slice(0, this._options.maxHistoryLenght);
    }

    /**
     * Pops the current state off the top off the history stack
     * and calls resume on next state in the stack.
     */
    pop(): IState<T> {
        if (this._stateStack.length <= 0) {
            return null;
        }
        
        let removed = this._stateStack.pop();
        let top = this.peek();
        if (top != null) {
            top.resume(this._entity);
        }

        return removed;
    }
}


export interface StateMachineOptions {
    maxHistoryLenght?: number;
}


let _defaultOptions: StateMachineOptions = {
    maxHistoryLenght: 10
}