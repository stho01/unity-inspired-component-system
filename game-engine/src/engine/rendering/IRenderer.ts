import {Rectangle} from "../geometry/Rectangle";
import {Circle} from "../geometry/Circle";
import {Line} from "../geometry/Line";
import {Vector2D} from "../math/Vector2D";
import {Polygon} from "../geometry/Polygon";

export type RenderRect = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default interface IRenderer {
    renderTexture(texture: HTMLImageElement, source: RenderRect, dest: RenderRect, rotation?: number);
    renderRect(x: number, y:number, rect: Rectangle, colorStyle?: string): void;
    renderCircle(x: number, y: number, c: Circle, colorStyle?: string): void;
    renderLine(l: Line, color?: string): void;
    renderDirLine(l: Line, color?: string): void;
    renderFatLine(l: Line, color?: string): void;
    renderText(txt: string, x: number | Vector2D, y?: number): void;
    getTextWidth(txt: string): number;
    renderPolygon(x: number, y: number, rotation: number, polygon: Polygon, color?: string): void;
}