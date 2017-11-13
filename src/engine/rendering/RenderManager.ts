import { IRenderable } from "./IRenderable";
import { Canvas2DRenderer } from "./Canvas2DRenderer";

export class RenderManager {
      
    //********************************************
    //**attributes:
    //********************************************
    
    private readonly _renderables: Set<IRenderable>;
    private readonly _renderer: Canvas2DRenderer;
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor(canvas: HTMLCanvasElement) {
        this._renderables = new Set<IRenderable>();
        this._renderer = new Canvas2DRenderer(canvas);
    }
    
    //********************************************
    //**public:
    //********************************************
    
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
        this._renderables.forEach(x => x.render(this._renderer));
    }
}