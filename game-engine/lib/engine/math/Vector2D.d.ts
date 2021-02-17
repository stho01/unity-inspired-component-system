export declare class Vector2D {
    static readonly Zero: Vector2D;
    static readonly One: Vector2D;
    static readonly Left: Vector2D;
    static readonly Right: Vector2D;
    static readonly Up: Vector2D;
    static readonly Down: Vector2D;
    private _x;
    private _y;
    constructor(x?: number, y?: number);
    get x(): number;
    get y(): number;
    get isZero(): boolean;
    get isOne(): boolean;
    /**
     * Adds another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    add(vec: Vector2D | number, y?: number): Vector2D;
    /**
     * Subtracts another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    subtract(vec: Vector2D | number, y?: number): Vector2D;
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    multiply(vec: Vector2D | number, y?: number): Vector2D;
    /**
     * Multiplies another vector to the vector.
     * Returns a new instance of Vector2D
     *
     * @param vec
     */
    divide(vec: Vector2D | number, y?: number): Vector2D;
    /**
     * Normalizes the current vector.
     * Returns a new instance of Vector2D
     */
    normalize(): Vector2D;
    /**
     *
     */
    normal(): Vector2D;
    /**
     * Gets the length of the current vector.
     */
    length(): number;
    /**
     * Checks if the vector x and y is equal to the given vector.
     *
     * @param vec
     */
    equal(vec: Vector2D): boolean;
    /**
     * Finds the dot product between the two vectors.
     *
     * @param vec
     */
    dot(vec: Vector2D): number;
    /**
     * Finds the cross product between two vectors.
     * @param vec
     */
    cross(vec: Vector2D): number;
    /**
     * Checks if the
     *
     * @param vec
     */
    isPerpendicular(vec: Vector2D): boolean;
    /**
     *
     * @param {Vector2D} normal
     * @return {Vector2D}
     */
    reflect(normal: Vector2D): Vector2D;
    /**
     * Rotates the vector.
     *
     * @param {number} angle
     * @return {Vector2D}
     */
    rotate(angle: number): Vector2D;
    /**
     *
     * @return {Vector2D}
     */
    flip(): Vector2D;
}
