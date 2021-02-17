import { Canvas2DRenderer } from "./Canvas2DRenderer";
import { Camera } from "../gameobjects/Camera";
export interface IRenderable {
    render(renderer: Canvas2DRenderer, camera: Camera): void;
}
