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
export declare function isDisposable(object: any): object is IDisposable;
