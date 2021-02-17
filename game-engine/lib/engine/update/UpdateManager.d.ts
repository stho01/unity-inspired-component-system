import { IUpdateable } from "./IUpdateable";
export declare class UpdateManager {
    private readonly _updateables;
    constructor();
    /**
     *
     */
    add(updateable: IUpdateable): void;
    /**
     *
     * @param updateable
     */
    remove(updateable: IUpdateable): void;
    /**
     *
     * @param deltaTime
     */
    update(deltaTime: number): void;
}
