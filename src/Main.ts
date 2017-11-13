import { Game } from "./engine/Game";
import { Scene } from "./engine/scenes/Scene";
import { ShapeRenderer } from "./engine/components/ShapeRenderer";
import { Circle } from "./engine/geometry/Circle";
import { Vector2D } from "./engine/math/Vector2D";
import { CenterBehaviour } from "./game/components/CenterBehaviour";
import { GameObject } from "./engine/gameobjects/gameobject";

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