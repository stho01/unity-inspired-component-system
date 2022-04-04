import Logger from "../infrastructure/Logger"

//********************************************

const logger = Logger.from("Ecs.ts");

//********************************************

export type ComponentConstructor<T> = new(...args: any[]) => T;
export type SystemConstructor<T extends System> = new(...args: any[]) => T;

//********************************************

/**
 * A signature that identifies an entity and
 * what requirements a systems needs.
 */
class Signature {

    //********************************************
    //** fields:
    //********************************************

    private _bits: number;

    //********************************************
    //** ctor:
    //********************************************

    constructor(bits: number = 0) {
        this._bits = bits;
    }

    //********************************************
    //** public:
    //********************************************

    /**
     * Sets the value of a bit (1 | 0)
     * @param index
     * @param flag
     */
    public set(index: number, flag: boolean = true): void {
        if (flag) {
            this._bits |= (1 << index);
        } else {
            this._bits ^= (1 << index);
        }
    }

    /**
     * Checks if bit is set
     * @param index
     */
    public test(index: number): boolean {
        let partition = (1 << index);
        return (partition & this._bits) == partition;
    }

    /**
     * Gets the raw representation of the signature.
     */
    public getBits(): number {
        return this._bits;
    }
}

//********************************************

export class Entity {

    //********************************************
    //** fields:
    //********************************************

    private readonly _id: number;
    private readonly _registry: ECSRegistry;

    //********************************************
    //** ctor:
    //********************************************
    
    constructor(id: number, registry: ECSRegistry) {
        this._id = id;
        this._registry = registry;
    }
    
    //********************************************
    //** getters & setters:
    //********************************************
    
    public get id() {return this._id;}
    public get registry(): ECSRegistry { return this._registry; }
    
    //********************************************
    //** proxies:
    //********************************************
    
    public addComponent<T>(type: ComponentConstructor<T>, ...args: any[]): void { this._registry.addComponent(this, type, ...args); }
    public removeComponent<T>(type: ComponentConstructor<T>): void { this._registry.removeComponent(this, type); }
    public hasComponent<T>(type: ComponentConstructor<T>): boolean { return this._registry.hasComponent(this, type); }
    public getComponent<T>(type: ComponentConstructor<T>): T { return this._registry.getComponent(this, type); }
}


//********************************************

class Component {
    private static _nextId: number = 0;
    static _map: Map<ComponentConstructor<any>, number> = new Map<ComponentConstructor<any>, number>();

    static getId(type: ComponentConstructor<any>): number {
        if(!this._map.has(type)) {
            this._map.set(type, this._nextId++);
        }
        return this._map.get(type);
    }
}

//********************************************

export class System {
    
    //********************************************
    //** fields:
    //********************************************
    
    private readonly _signature: Signature = new Signature();
    private readonly _entities: Entity[] = [];
    
    //********************************************
    //** getters & setters:
    //********************************************
    
    public get entities() {return this._entities;}
    public get signature() {return this._signature;}
    
    //********************************************
    //** public:
    //********************************************
    
    public addEntity(entity: Entity): void {
        this._entities.push(entity);
    }

    public removeEntity(entity: Entity): void {
        Array.prototype.splice.call(this._entities, this._entities.indexOf(entity), 1);
    }

    //********************************************
    //** private & protected:
    //********************************************
    
    /**
     * Defines the component type that entities must have
     * to be considered by the system
     * @param type
     * @protected
     */
    protected requireComponent<T>(type: ComponentConstructor<T>): void {
        const componentId = Component.getId(type);
        this._signature.set(componentId);
    }
}

//********************************************

class Pool<T> {
    components: T[] = [];
    isEmpty(): boolean { return this.components.length == 0; }
    getSize(): number {return this.components.length;}
    clear(): void { this.components = []; }
    add(object: T): void { this.components.push(object); }
    set(index: number, object: T) { this.components[index] = object; }
    get(index: number) : T {return this.components[index];}
}

//********************************************

/**
 * The ECS Registry that keeps track of all the
 * entities, components and systems.
 */
export class ECSRegistry {

    //********************************************
    //** fields:
    //********************************************

    _numberOfComponents: number = 0;
    _entitySignatures: Record<number, Signature> = {};
    _componentPools: Map<number, Pool<any>> = new Map<number, Pool<any>>();
    _systems: Map<SystemConstructor<any>, System> = new Map<SystemConstructor<any>, System>();
    _entitiesToBeAdded: Entity[] = [];
    _entitiesToBeRemoved: Entity[] = [];

    //********************************************
    //** ctor:
    //********************************************

    constructor() {
        logger.info("ECSRegistry created...");
    }

    //********************************************
    //** public:
    //********************************************

    /**
     * Creates an entity with its own unique id.
     */
    public createEntity(): Entity {
        const entity = new Entity(this._numberOfComponents++, this);
        logger.info(`Created entity with id ${entity.id}`);

        this._entitiesToBeAdded.push(entity);

        this._entitySignatures[entity.id] = new Signature();

        return entity;
    }

    /**
     * Adds or removes queued entities.
     */
    public update(): void {
        this._entitiesToBeAdded.forEach(entity => {
            this._addEntityToSystems(entity);
        });
        this._entitiesToBeAdded = [];

        this._entitiesToBeRemoved.forEach(entity => {
            this._removeEntityFromSystems(entity);
        });
        this._entitiesToBeRemoved = [];
    }

    /**
     * Adds a component to an entity.
     * @param entity - the entity that the component should be attached to.
     * @param type   - the constructor of the component that should be added.
     * @param args   - additional component constructor arguments.
     */
    public addComponent<T>(entity: Entity, type: ComponentConstructor<T>, ...args: any[]): void {
        const componentId = Component.getId(type);

        if (!this._componentPools.get(componentId)) {
            this._componentPools.set(componentId, new Pool<T>());
        }

        const component = new type(...args);

        this._componentPools.get(componentId).set(entity.id, component);

        logger.info(`Added component ${componentId} to entity ${entity.id}`);

        this._entitySignatures[entity.id].set(componentId);
    }

    /**
     * Removes a component from the entity.
     * @param entity
     * @param type
     */
    public removeComponent<T>(entity: Entity, type: ComponentConstructor<T>): void {
        const componentId = Component.getId(type);

        this._entitySignatures[entity.id].set(componentId, false);

        logger.info(`Removed component ${componentId} to entity ${entity.id}`);
    }

    /**
     * Checks if entity has component.
     * @param entity
     * @param type
     */
    public hasComponent<T>(entity: Entity, type: ComponentConstructor<T>): boolean {
        const componentId = Component.getId(type);

        return this._entitySignatures[entity.id].test(componentId);
    }

    /**
     * Retrieves the component of type from the entity.
     * @param entity
     * @param type
     */
    public getComponent<T>(entity: Entity, type: ComponentConstructor<T>): T {
        const componentId = Component.getId(type);
        if (!this._componentPools.has(componentId)){
            return null;
        }

        return this._componentPools.get(componentId).get(entity.id);
    }

    //********************************************

    public addSystem<T extends System>(ctor: SystemConstructor<T>, ...args: any[]): void {
        if (!this._systems.has(ctor)) {
            const system = new ctor(args);
            this._systems.set(ctor, system);
        }
    }

    //********************************************

    public getSystem<T extends System>(ctor: SystemConstructor<T>): T {
        if (this._systems.has(ctor)) {
            return <T>this._systems.get(ctor);
        }
        return null;
    }

    //********************************************
    //** private:
    //********************************************

    /**
     *
     * @private
     */
    private _addEntityToSystems(entity: Entity): void {
        const entitySignature = this._entitySignatures[entity.id];

        this._systems.forEach(system => {
            const isInterested = (system.signature.getBits() & entitySignature.getBits()) == system.signature.getBits();
            if (isInterested) {
                system.addEntity(entity);
            }
        });
    }

    /**
     *
     * @param entity
     * @private
     */
    private _removeEntityFromSystems(entity: Entity): void {
        // todo
    }

}