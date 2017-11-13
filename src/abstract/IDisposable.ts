
/**
 * 
 */
export interface IDisposable {
    /**
     * Dispose object. 
     */
    dispose(): void;
}

/**
 * Checks if object is disposable.
 * @param object 
 */
export function isDisposable(object: any): object is IDisposable {
    return typeof object["dispose"] === "function";
}