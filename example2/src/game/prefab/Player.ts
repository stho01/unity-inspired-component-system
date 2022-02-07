import {Triangle, GameObject, Scene, ShapeRenderer} from 'stho-game-engine';
import {PlayerInputBehaviour} from '../components/PlayerInputBehaviour';

//********************************************

export default function playerFactory(scene: Scene): GameObject {
    // create a game object that represents the player.
    let player: GameObject = new GameObject(scene);

    // attach a rendering component to player game object.
    let renderer: ShapeRenderer = player.attachComponent(ShapeRenderer);
    renderer.color = "purple";
    renderer.shape = new Triangle(30, 40);
    renderer.shape.rotationOffset = 90;

    // attach a PlayerInputBehaviour component to player.
    player.attachComponent(PlayerInputBehaviour);

    return player;
}
