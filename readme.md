# A Unity inspired game component system  

## Description
A unitiy inspired game component system that is written with TypeScript and HTML Canvas 2D Context.

```TypeScript
// create game instance. 
let game = new Game({clearColor: "wheat"});

// create initial scene 
let initialScene: Scene = new Scene(game);

// create some game object.
let someGameObject: GameObject = new GameObject(initialScene);
someGameObject.transform.position = new Vector2D(game.viewPort.width/2, game.viewPort.height/2);

// create a rendering component 
let renderer = new ShapeRenderer(someGameObject);
renderer.color = "blue";
renderer.shape = new Circle(30);

// attach components to game object.
someGameObject.attachComponent(ShapeRenderer, renderer);
someGameObject.attachComponent(CenterBehaviour, new CenterBehaviour(someGameObject));

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

