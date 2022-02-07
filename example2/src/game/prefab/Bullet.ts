import {Circle, GameObject, Prefab, ShapeRenderer} from 'stho-game-engine';

const bullet: Prefab = (scene) => {
    const gm = new GameObject(scene);
    const renderer = gm.attachComponent(ShapeRenderer);
    renderer.shape = new Circle(5);
    renderer.color = "black";
    return gm;
};

export default bullet;
