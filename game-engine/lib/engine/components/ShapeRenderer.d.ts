import { IShape } from "../geometry/IShape";
import { Component } from "./Component";
import { IRenderable } from "../rendering/IRenderable";
import { Canvas2DRenderer } from "../rendering/Canvas2DRenderer";
import { GameObject } from "../gameobjects/gameobject";
import { Camera } from "../gameobjects/Camera";
export declare class ShapeRenderer extends Component implements IRenderable {
    shape: IShape;
    color: string;
    private _transform;
    /**
     *
     */
    constructor(owner: GameObject);
    /**
     *
     */
    initialize(): void;
    /**
     *
     * @param ctx
     */
    render(renderer: Canvas2DRenderer, camera: Camera): void;
    /**
     * Remove component from renderer.
     */
    dispose(): void;
}
