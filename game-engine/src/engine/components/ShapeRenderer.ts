import { Shape } from
        "../geometry/Shape";
import { Component } from "./Component";
import { Transform } from "./Transform";
import { Circle } from "../geometry/Circle";
import { IRenderable } from "../rendering/IRenderable";
import { Rectangle } from "../geometry/Rectangle";
import { Canvas2DRenderer } from "../rendering/Canvas2DRenderer";
import { GameObject } from "../gameobjects/gameobject";
import { Camera } from "../gameobjects/Camera";
import { Vector2D } from "../math/Vector2D";
import { Polygon } from '../geometry/Polygon';
import { Triangle } from '../geometry/Triangle';
import {degreesToRadians} from '../math/Trigonometry';

export class ShapeRenderer extends Component implements IRenderable {

    //********************************************
    //**attributes:
    //********************************************

    public shape : Shape;
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
    render(renderer: Canvas2DRenderer, camera: Camera): void {
        let screenPos: Vector2D = camera.getScreenPosition(this._owner);

        if (this.shape instanceof Circle) {
            renderer.renderCircle(
                screenPos.x,
                screenPos.y,
                this.shape as Circle,
                this.color
            );
        } else if (this.shape instanceof Rectangle) {
            renderer.renderRect(
                screenPos.x,
                screenPos.y,
                this.shape,
                this.color
            );
        } else if (this.shape instanceof Polygon
                || this.shape instanceof Triangle) {
            renderer.renderPolygon(
                screenPos.x,
                screenPos.y,
                this._owner.transform.rotationRad + degreesToRadians(this.shape.rotationOffset),
                this.shape as Polygon,
                this.color
            );
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
