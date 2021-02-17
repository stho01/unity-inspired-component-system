import { GameObject } from "./gameobject";
import { Vector2D } from "../math/Vector2D";
export declare class Camera extends GameObject {
    /**
     * Get screen position
     *
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    getScreenPosition(gameObject: GameObject): Vector2D;
    /**
     * Gets the world position of the game object's position.
     *
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    getWorldPosition(gameObject: GameObject): Vector2D;
}
