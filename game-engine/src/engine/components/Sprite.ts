export class Sprite {
    path: string;
    width: number = 0;
    height: number = 0;

    constructor(path: string, width: number = 0, height: number = 0) {
        this.path = path;
        this.width = width;
        this.height = height;
    }
}