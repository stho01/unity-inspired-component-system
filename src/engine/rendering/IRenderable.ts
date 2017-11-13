import { Canvas2DRenderer } from "./Canvas2DRenderer";

export interface IRenderable {
    render(renderer: Canvas2DRenderer): void;
}