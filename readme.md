# A Unity inspired game component system  

<a href="https://www.npmjs.com/package/stho-game-engine">
    <img src="https://img.shields.io/npm/v/stho-game-engine.svg?sanitize=true" />
</a>

## Description
A unitiy inspired game component system that is written with TypeScript and HTML Canvas 2D Context.

## Example code
```TypeScript

// create game instance. 
let game: Game = new Game({clearColor: "wheat"});

// create initial scene 
let initialScene: Scene = new Scene(game);

// create and add camera to scene
let camera: Camera = new Camera(initialScene);
camera.attachComponent(MoveCameraBehaviour);
initialScene.setMainCamera(camera);

// create a game object that represents the player.
let player: GameObject = new GameObject(initialScene);

// attach a rendering component to player game object.
let renderer: ShapeRenderer = player.attachComponent(ShapeRenderer);
renderer.color = "blue";
renderer.shape = new Circle(30);

// attach a PlayerInputBehaviour component to player.
player.attachComponent(PlayerInputBehaviour);

// add player to scene. 
initialScene.addGameObject(player);

// create a game object that represents a obstacle 
let obstacle: GameObject = new GameObject(initialScene);
obstacle.transform.translate(100, 100);

let obstacleShape: ShapeRenderer = obstacle.attachComponent(ShapeRenderer);
obstacleShape.color = "red";
obstacleShape.shape = new Rectangle(100, 100);

initialScene.addGameObject(obstacle);

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
GameObject.add(component: Component);
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


## npm linking

Navigate to the game-engine directory to link game engine as a local npm package.

```
> cd game-engine
```

```
> npm link
```

Then link the game-engine to the example code

```
> cd example
```

```
> npm link game-engine
```

more info https://docs.npmjs.com/cli/v6/commands/npm-link
