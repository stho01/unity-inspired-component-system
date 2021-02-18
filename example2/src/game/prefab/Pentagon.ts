import {GameObject, Scene, ShapeRenderer, Polygon, Vertex} from 'game-engine';

const pentagonVertices: Vertex[] = [];
const angle: number = (Math.PI*2)/5;
for (let i = 0; i < 5; i++) {
    pentagonVertices.push([
        Math.cos(angle) * 50,
        Math.sin(angle) * 50
    ]);
}

export default function pentagonFactory(scene: Scene): GameObject {
    const pentagon = new GameObject(scene);

    const shapeRenderer = pentagon.attachComponent(ShapeRenderer);
    shapeRenderer.shape = new Polygon(pentagonVertices);
    shapeRenderer.color = "green";

    return pentagon;
}

