import { IRenderable } from "./IRenderable";
import { Camera } from "../gameobjects/Camera";
import { Scene } from "../scenes/Scene";
export declare class RenderManager {
    private readonly _renderables;
    private readonly _renderer;
    private readonly _scene;
    private _camera;
    constructor(canvas: HTMLCanvasElement, scene: Scene);
    get camera(): Camera;
    set camera(camera: Camera);
    /**
     *
     */
    add(updateable: IRenderable): void;
    /**
     *
     * @param updateable
     */
    remove(updateable: IRenderable): void;
    /**
     *
     * @param deltaTime
     */
    render(): void;
    private _renderNoCameraMessage;
}
