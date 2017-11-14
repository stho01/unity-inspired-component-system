# A Unity inspired game component system  

## Description
A unitiy inspired game component system that is written with TypeScript and HTML Canvas 2D Context.

## Example code
```TypeScript
// create game instance. 
let game: Game = new Game({clearColor: "wheat"});

// create initial scene 
let initialScene: Scene = new Scene(game);

// create some game object.
let someGameObject: GameObject = new GameObject(initialScene);
someGameObject.transform.position = new Vector2D(game.viewPort.width/2, game.viewPort.height/2);

// attach a rendering component to game object.
let renderer: ShapeRenderer = someGameObject.attachComponent(ShapeRenderer);
renderer.color = "blue";
renderer.shape = new Circle(30);

// attach a CenterBehaviour component to game object.
someGameObject.attachComponent(CenterBehaviour);

// add game object to scene. 
initialScene.addGameObject(someGameObject);

// push initial scene to game's scene manager. 
game.sceneManager.push(initialScene);

// initialize game
game.init();

// run game loop
game.run();
```

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

