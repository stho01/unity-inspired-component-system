import { Rectangle } from './../geometry/Rectangle';
import { Circle } from "./../geometry/Circle";
import { Line } from "./../geometry/Line";
import { Vector2D } from "../math/Vector2D";

export class Canvas2DRenderer {
    "use strict";

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


    public getTextWidth(txt: string): number {
        this._ctx.font = "30px Arial";
        return this._ctx.measureText(txt).width;
    }
}
