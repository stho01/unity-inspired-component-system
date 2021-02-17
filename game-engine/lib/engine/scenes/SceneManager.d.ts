import { StateMachine } from "../state/StateMachine";
import { Game } from "../Game";
/**
 * A manager for managing scenes.
 */
export declare class SceneManager extends StateMachine<Game> {
    /**
     * Updates the current scene
     * @param deltaTime - time since last frame.
     */
    update(deltaTime: number): void;
    /**
     * Render the current scene
     */
    renderScene(): void;
}
