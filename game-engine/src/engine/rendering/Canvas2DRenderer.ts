import { Rectangle } from '../geometry/Rectangle';
import { Circle } from '../geometry/Circle';
import { Line } from '../geometry/Line';
import { Vector2D } from "../math/Vector2D";
import { Polygon } from '../geometry/Polygon';

export class Canvas2DRenderer {

    //********************************************
    //** attributes:
    //********************************************

    private readonly _ctx           : CanvasRenderingContext2D;

    //********************************************
    //** ctor:
    //********************************************

    constructor(canvas: HTMLCanvasElement) {
        this._ctx = canvas.getContext("2d");
    }


    get renderingContext(): CanvasRenderingContext2D { return this._ctx; }

    //********************************************
    //** public:
    //********************************************

    /**
     *
     * @param x
     * @param y
     * @param w
     * @param h
     * @param colorStyle
     */
    public renderRect(x: number, y: number, rect: Rectangle, colorStyle: string = "gray"): void {
        this._ctx.fillStyle = colorStyle;
        this._ctx.beginPath();
        this._ctx.rect(x, y, rect.width, rect.heigth);
        this._ctx.fill();
    }

    /**
     *
     * @param x
     * @param y
     * @param r
     * @param colorStyle
     */
    public renderCircle(x: number, y: number, c: Circle, colorStyle: string = "gray"): void {
        this._ctx.fillStyle = colorStyle;
        this._ctx.beginPath();
        this._ctx.arc(x, y, c.r, 0, 2 * Math.PI);
        this._ctx.fill();
    }

    /**
     *
     * @param l
     */
    public renderLine(l: Line, color: string = "red"): void {
        this._ctx.strokeStyle = color;
        this._ctx.lineWidth = 2;
        this._ctx.beginPath();
        this._ctx.moveTo(l.p1.x, l.p1.y);
        this._ctx.lineTo(l.p2.x, l.p2.y);
        this._ctx.stroke();
    }

    /**
     *
     * @param l
     * @param color
     */
    public renderDirLine(l: Line, color: string = "red"): void {
        this.renderLine(l);
        let c: Circle = new Circle(10);
        this.renderCircle(l.p2.x, l.p2.y, c, color);
    }

    /**
     *
     * @param l
     * @param color
     */
    public renderFatLine(l: Line, color: string = "red"): void {
        this._ctx.strokeStyle = color;
        this._ctx.lineWidth = 5;
        this._ctx.beginPath();
        this._ctx.moveTo(l.p1.x, l.p1.y);
        this._ctx.lineTo(l.p2.x, l.p2.y);
        this._ctx.stroke();
    }

    /**
     *
     * @param x
     * @param y
     * @param txt
     */
    public renderText(txt: string, x: number|Vector2D, y?: number): void {
        this._ctx.fillStyle = "black";
        this._ctx.font = "30px Arial";

        if (typeof x === "number") {
            this._ctx.fillText(txt, x, y);
        } else {
            this._ctx.fillText(txt, x.x, x.y);
        }
    }

    /**
     *
     * @param txt
     */
    public getTextWidth(txt: string): number {
        this._ctx.font = "30px Arial";
        return this._ctx.measureText(txt).width;
    }

    public renderPolygon(x: number, y: number, rotation: number, polygon: Polygon, color: string = "red") {
        this._ctx.save();
        this._ctx.fillStyle = color;
        const origin = polygon.origin || [0,0];

        this._ctx.translate(x, y);
        this._ctx.translate(origin[0],origin[1]);
        this._ctx.rotate(rotation);
        this._ctx.translate(x-origin[0], y-origin[1]);

        this._ctx.beginPath();
        polygon.vertices.forEach((vertex, i) => {
            (i === 0)
                ? this._ctx.moveTo(vertex[0], vertex[1])
                : this._ctx.lineTo(vertex[0], vertex[1]);
        });
        this._ctx.closePath();

        this._ctx.fill();
        // this._ctx.stroke();
        this._ctx.restore();
    }
}
