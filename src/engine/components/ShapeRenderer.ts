import { IShape } from "../geometry/IShape";
import { Component } from "./Component";
import { Transform } from "./Transform";
import { Circle } from "../geometry/Circle";
import { IRenderable } from "../rendering/IRenderable";
import { Rectangle } from "../geometry/Rectangle";
import { Line } from "../geometry/Line";
import { Canvas2DRenderer } from "../rendering/Canvas2DRenderer";
import { GameObject } from "../gameobjects/gameobject";

export class ShapeRenderer extends Component implements IRenderable {
    
    //********************************************
    //**attributes:
    //********************************************
        
    public shape : IShape;
    public color : string;
    private _transform: Transform;

    /**
     *
     */
    constructor(owner: GameObject) {
        super(owner);   
        // add component to renderer. 
        this._owner.scene.renderer.add(this);
    }

    //********************************************
    //**public:
    //********************************************

    /**
     * 
     */
    initialize(): void {
        this._transform = this._owner.getComponent(Transform) as Transform;
    }
    
    /**
     * 
     * @param ctx 
     */
    render(renderer: Canvas2DRenderer): void {
        if (this.shape instanceof Circle) {
            let c: Circle = new Circle(this.shape.r * this._transform.scale.x);
            renderer.renderCircle(
                this._transform.position.x,
                this._transform.position.y,
                c, 
                this.color);

        } else if (this.shape instanceof Rectangle) {
            let rect: Rectangle = new Rectangle(this.shape.width*this._transform.scale.x, this.shape.heigth*this._transform.scale.y);
            renderer.renderRect(
                this._transform.position.x,
                this._transform.position.y,
                this.shape, 
                this.color);

        } else if (this.shape instanceof Line) {
            renderer.renderLine(this.shape, this.color);
        }
    }    

    /**
     * Remove component from renderer.  
     */
    dispose(): void {
        this._owner.scene.renderer.remove(this);
        super.dispose();
    }
}