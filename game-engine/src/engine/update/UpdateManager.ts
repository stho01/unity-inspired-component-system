import { IUpdateable } from "./IUpdateable";

export class UpdateManager {
    
    //********************************************
    //**attributes:
    //********************************************
    
    private readonly _updateables: Set<IUpdateable>;
    
    //********************************************
    //**ctor:
    //********************************************
    
    constructor() {
        this._updateables = new Set<IUpdateable>();
    }
    
    //********************************************
    //**public:
    //********************************************
    
    /**
     * 
     */
    add(updateable: IUpdateable): void {
        if (updateable == null) {
            throw new Error("Updateable cannot be null er undefined");
        }

        this._updateables.add(updateable);
    }

    /**
     * 
     * @param updateable 
     */
    remove(updateable: IUpdateable): void {
        if (updateable == null) {
            throw new Error("Cannot delete updateable cannot be null er undefined");
        }

        this._updateables.delete(updateable);
    }

    /**
     * 
     * @param deltaTime 
     */
    update(deltaTime: number): void {
        this._updateables.forEach(x => x.update(deltaTime));
    }
}