import {GameObject, Scene, ShapeRenderer, Polygon, Vertex} from 'stho-game-engine';
import {PlayerInputBehaviour} from '../components/PlayerInputBehaviour';

const pentagonVertices: Vertex[] = [];
const angle: number = (Math.PI*2)/5;
for (let i = 0; i < 5; i++) {
    pentagonVertices.push([
        Math.cos(angle*i) * 50,
        Math.sin(angle*i) * 50
    ]);
}

export default function pentagonFactory(scene: Scene): GameObject {
    const pentagon = new GameObject(scene);

    const shapeRenderer = pentagon.attachComponent(ShapeRenderer);
    shapeRenderer.shape = new Polygon(pentagonVertices);
    shapeRenderer.color = "green";

    pentagon.attachComponent(PlayerInputBehaviour);

    console.log(pentagonVertices);

    return pentagon;
}

