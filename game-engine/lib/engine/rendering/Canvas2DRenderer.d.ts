import { Rectangle } from './../geometry/Rectangle';
import { Circle } from "./../geometry/Circle";
import { Line } from "./../geometry/Line";
import { Vector2D } from "../math/Vector2D";
export declare class Canvas2DRenderer {
    "use strict": any;
    private readonly _ctx;
    constructor(canvas: HTMLCanvasElement);
    get renderingContext(): CanvasRenderingContext2D;
    /**
     *
     * @param x
     * @param y
     * @param w
     * @param h
     * @param colorStyle
     */
    renderRect(x: number, y: number, rect: Rectangle, colorStyle?: string): void;
    /**
     *
     * @param x
     * @param y
     * @param r
     * @param colorStyle
     */
    renderCircle(x: number, y: number, c: Circle, colorStyle?: string): void;
    /**
     *
     * @param l
     */
    renderLine(l: Line, color?: string): void;
    /**
     *
     * @param l
     * @param color
     */
    renderDirLine(l: Line, color?: string): void;
    /**
     *
     * @param l
     * @param color
     */
    renderFatLine(l: Line, color?: string): void;
    /**
     *
     * @param x
     * @param y
     * @param txt
     */
    renderText(txt: string, x: number | Vector2D, y?: number): void;
    getTextWidth(txt: string): number;
}
