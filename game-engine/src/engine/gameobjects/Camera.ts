import {GameObject} from "./gameobject";
import {Vector2D} from "../math/Vector2D";
import {ViewPort} from "../types/ViewPort";

export class Camera extends GameObject {

    /**
     * Get screen position
     * 
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    getScreenPosition(gameObject: GameObject): Vector2D {
        let viewPort     : ViewPort = this.scene.game.viewPort;
        let cameraOrigin : Vector2D = this.transform.position.flip().add(viewPort.width/2, viewPort.height/2);
        let worldPos     : Vector2D = this.getWorldPosition(gameObject); 
        let offset       : Vector2D = cameraOrigin.add(worldPos);
        
        return (offset);
    }

    /**
     * Gets the world position of the game object's position.
     * 
     * @param {GameObject} gameObject
     * @return {Vector2D}
     */
    getWorldPosition(gameObject: GameObject): Vector2D {
        let worldPos: Vector2D = gameObject.transform.position;
        if (gameObject.parent != null) {
            worldPos = worldPos.add(this.getWorldPosition(gameObject.parent));
        }
        return worldPos;
    }
}