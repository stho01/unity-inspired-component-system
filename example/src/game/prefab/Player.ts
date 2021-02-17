import {Circle, GameObject, Scene, ShapeRenderer} from 'game-engine';
import {PlayerInputBehaviour} from '../components/PlayerInputBehaviour';

export default function playerFactory(scene: Scene): GameObject {
    // create a game object that represents the player.
    let player: GameObject = new GameObject(scene);

    // attach a rendering component to player game object.
    let renderer: ShapeRenderer = player.attachComponent(ShapeRenderer);
    renderer.color = "blue";
    renderer.shape = new Circle(30);

    // attach a PlayerInputBehaviour component to player.
    player.attachComponent(PlayerInputBehaviour);

    return player;
}

