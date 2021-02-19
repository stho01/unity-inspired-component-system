import {Circle, GameObject, Prefab, ShapeRenderer} from 'game-engine';

const bullet: Prefab = (scene) => {
    const gm = new GameObject(scene);
    const renderer = gm.attachComponent(ShapeRenderer);
    renderer.shape = new Circle(5);
    renderer.color = "black";
    return gm;
};

export default bullet;
