# A Unity inspired game component system  

## Description
A unitiy inspired game component system that is written with TypeScript and HTML Canvas 2D Context.


## Structure
- Game
    - Scene
        - GameObject
            - Component

```TypeScript
Game.add(scene: Scene);
Scene.add(gameobject: GameObject);
GameObject.add(constructor: ComponentConstructor, component: IComponent);
```

## Development environment

Install dependencies: 
```
$ npm install
```

Run dev server: 

```
$ npm run start
```

Build bundle:
```
$ npm run build
```

