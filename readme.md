# HTML 2D Canvas boilerplate  

## Description


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

