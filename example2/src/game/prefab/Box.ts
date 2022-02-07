import {GameObject, Rectangle, Scene, ShapeRenderer} from 'stho-game-engine';

export default function boxFactory(scene: Scene): GameObject {
    const box = new GameObject(scene);
    const render = box.attachComponent(ShapeRenderer);

    render.shape = new Rectangle(100, 100);
    render.color = "red";

    return box;
}
