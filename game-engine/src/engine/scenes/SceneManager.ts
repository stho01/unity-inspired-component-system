import { StateMachine } from "../state/StateMachine";
import { Game } from "../Game";
import { Scene } from "./Scene";

/**
 * A manager for managing scenes. 
 */
export class SceneManager extends StateMachine<Game> {
    /**
     * Updates the current scene
     * @param deltaTime - time since last frame.
     */
    update(deltaTime: number): void {
        let scene: Scene = this.peek() as Scene;
        if (scene != null) {
            scene.update(deltaTime);
        }
    }

    /**
     * Render the current scene
     */
    renderScene(): void {
        let scene: Scene = this.peek() as Scene;
        
        if (scene != null) {
            scene.draw();
        }
    }
}