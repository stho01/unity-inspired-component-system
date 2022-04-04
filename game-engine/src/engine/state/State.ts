export interface IState<T> {
    /**
     * Initialize a scene
     */
    initialize(entity: T): Promise<void>;

    /**
     * Unload scene  
     */
    pause(entity: T): void;

    /**
     * 
     */
    resume(entity: T): void;

    /**
     * Dispose scene
     */
    dispose(ebtity: T): void;
}