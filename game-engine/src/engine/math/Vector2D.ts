 export class Vector2D {

    //********************************************
    //** read only attributes.
    //********************************************

    public static readonly Zero     = new Vector2D();
    public static readonly One      = new Vector2D(1,1);
    public static readonly Left     = new Vector2D(-1,0);
    public static readonly Right    = new Vector2D(1,0);
    public static readonly Up       = new Vector2D(0,-1);
    public static readonly Down     = new Vector2D(0,1);

    //********************************************
    //** attributes:
    //********************************************

    private _x: number;
    private _y: number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    //********************************************
    //**
    //********************************************

    get x(): number { return this._x; }
    get y(): number { return this._y; }
    get isZero(): boolean { return this.equal(Vector2D.Zero); }
    get isOne(): boolean { return this.equal(Vector2D.One); }

    //********************************************
    //** public:
    //********************************************

    /**
     * Adds another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    add(vec: Vector2D|number, y?: number): Vector2D {
        let nx: number,
            ny: number;

        if (typeof vec === "number") {
            nx = this._x + vec;
            ny = this._y + (y || vec);
        } else {
            nx = this._x + vec.x;
            ny = this._y + vec.y;
        }

        return new Vector2D(nx, ny);
    }

    /**
     * Subtracts another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    subtract(vec: Vector2D|number, y?: number): Vector2D {
        let nx: number,
            ny: number;

        if (typeof vec === "number") {
            nx = this._x - vec;
            ny = this._y - (y || vec);
        } else {
            nx = this._x - vec.x;
            ny = this._y - vec.y;
        }

        return new Vector2D(nx, ny);
    }

    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    multiply(vec: Vector2D|number, y?: number): Vector2D {
        let nx: number = 0,
            ny: number = 0;

        if (typeof vec === "number") {
            nx = this._x * vec;
            ny = this._y * (y || vec);
        } else {
            nx = this._x * vec.x;
            ny = this._y * vec.y;
        }

        return new Vector2D(nx, ny);
    }

    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    divide(vec: Vector2D|number, y?: number): Vector2D {
        let nx: number = 0,
            ny: number = 0;

        if (typeof vec === "number") {
            nx = this._x / vec;
            ny = this._y / (y || vec);
        } else {
            nx = this._x / vec.x;
            ny = this._y / vec.y;
        }

        return new Vector2D(nx, ny);
    }

    /**
     * Normalizes the current vector.
     * Returns a new instance of Vector2D
     */
    normalize(): Vector2D {
        let lenght: number = this.length();
        if (lenght != 0) {
            return new Vector2D(this._x / lenght, this._y / lenght);
        } else {
            return new Vector2D();
        }
    }

    /**
     *
     */
    normal(): Vector2D {
        return new Vector2D(-this.y, this.x).normalize();
    }

    /**
     * Gets the length of the current vector.
     */
    length(): number {
        return Math.sqrt((this._x * this._x) + (this._y * this._y));
    }

     /**
      * Gets the squared length of the current vector.
      */
    lengthSqr(): number {
        return (this._x * this._x) + (this._y * this._y);
    }

    /**
     * Checks if the vector x and y is equal to the given vector.
     *
     * @param vec
     */
    equal(vec: Vector2D): boolean {
        return vec != null && this._x === vec.x && this._y === vec.y;
    }

    /**
     * Finds the dot product between the two vectors.
     *
     * @param vec
     */
    dot(vec: Vector2D): number {
        let unit1: Vector2D = this.normalize(),
            unit2: Vector2D = vec.normalize();

        return (unit1.x * unit2.x) + (unit1.y * unit2.y);
    }

    /**
     * Finds the cross product between two vectors.
     * @param vec
     */
    cross(vec: Vector2D): number {
        let unit1: Vector2D = this.normalize(),
            unit2: Vector2D = vec.normalize();

        return (unit1.x * unit2.x) - (unit1.y * unit2.y);
    }

    /**
     * Checks if the
     *
     * @param vec
     */
    isPerpendicular(vec: Vector2D): boolean {
        return this.dot(vec) === 0;
    }

    /**
     *
     * @param {Vector2D} normal
     * @return {Vector2D}
     */
    reflect(normal: Vector2D): Vector2D {
        let n: Vector2D = normal.normalize();
        let dot: number = (this.x * n.x) + (this.y * n.y);
        let x: number = this.x - 2 * dot * n.x;
        let y: number = this.y - 2 * dot * n.y;

        return new Vector2D(x, y);
    }

    /**
     * Rotates the vector.
     *
     * @param {number} angle
     * @return {Vector2D}
     */
    rotate(angle: number): Vector2D {
        let x: number = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let y: number = this.x * Math.sin(angle) + this.y * Math.cos(angle);

        return new Vector2D(x, y);
    }

    /**
     *
     * @return {Vector2D}
     */
    flip(): Vector2D {
        return new Vector2D(-this.x, -this.y);
    }

     /**
      * Gets the angle of the vector
      */
    angle(): number {
        return Math.atan2(this.x, this.y);
    }
}
