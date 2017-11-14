import { IRenderable } from "./IRenderable";
import { Canvas2DRenderer } from "./Canvas2DRenderer";
import {Camera} from "../gameobjects/Camera";
import {Scene} from "../scenes/Scene";
import {ViewPort} from "../types/ViewPort";

export class RenderManager {
      
    //********************************************
    //**attributes:
    //********************************************
    
    private readonly _renderables   : Set<IRenderable>;
    private readonly _renderer      : Canvas2DRenderer;
    private readonly _scene         : Scene;
    private _camera                 : Camera;
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(canvas: HTMLCanvasElement, scene: Scene) {
        this._renderables = new Set<IRenderable>();
        this._renderer = new Canvas2DRenderer(canvas);
        this._scene = scene;
    }
    
    //********************************************
    //**public:
    //********************************************
    
    get camera(): Camera { return this._camera; }
    set camera(camera: Camera) { this._camera = camera; }
    
    /**
     * 
     */
    add(updateable: IRenderable): void {
        if (updateable == null) {
            throw new Error("Updateable cannot be null er undefined");
        }

        this._renderables.add(updateable);
    }

    /**
     * 
     * @param updateable 
     */
    remove(updateable: IRenderable): void {
        if (updateable == null) {
            throw new Error("Cannot delete updateable cannot be null er undefined");
        }

        this._renderables.delete(updateable);
    }

    /**
     * 
     * @param deltaTime 
     */
    render(): void {
        if(this._camera != null) {
            this._renderables.forEach(x => x.render(this._renderer, this._camera));
        } else {
           this._renderNoCameraMessage();
        }
    }
    
    //********************************************************************************
    //** private:
    //********************************************************************************
    
    private _renderNoCameraMessage(): void {
        let viewPort    : ViewPort = this._scene.game.viewPort;
        let txt         : string = "No cameras rendering";
        let txtWidth    : number = this._renderer.getTextWidth(txt);
        let x           : number = viewPort.width/2 - txtWidth/2;
        let y           : number = viewPort.height/2;

        this._renderer.renderText(txt, x, y);
    }
}