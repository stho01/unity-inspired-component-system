import { IState } from "./State";
/**
 * A state machine for handeling states.
 */
export declare class StateMachine<T> {
    "use strict": any;
    private _options;
    private _stateStack;
    private readonly _entity;
    /**
     *
     * @param entity The owner of this state manager.
     * @param [options] State machine options.
     */
    constructor(entity: T, options?: StateMachineOptions);
    /**
     * Sets the current state.
     *
     * @param state
     */
    push(state: IState<T>): void;
    /**
     * Sets the active state and removes resets history.
     *
     * @param state
     */
    pushAndClearHistory(state: IState<T>): void;
    /**
     * Returns the first element in the stack without
     * removing it.
     */
    peek(): IState<T>;
    /**
     * Sets state history.
     *
     * @param states
     */
    setHistory(states: IState<T>[]): void;
    /**
     * Pops the current state off the top off the history stack
     * and calls resume on next state in the stack.
     */
    pop(): IState<T>;
}
export interface StateMachineOptions {
    maxHistoryLenght?: number;
}
