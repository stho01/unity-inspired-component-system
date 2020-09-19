import { Game } from "./engine/Game";
import { Scene } from "./engine/scenes/Scene";
import { ShapeRenderer } from "./engine/components/ShapeRenderer";
import { Circle } from "./engine/geometry/Circle";
import { PlayerInputBehaviour } from "./game/components/PlayerInputBehaviour";
import { GameObject } from "./engine/gameobjects/gameobject";
import { Camera } from "./engine/gameobjects/Camera";
import { MoveCameraBehaviour } from "./game/components/MoveCameraBehaviour";
import { Rectangle } from "./engine/geometry/Rectangle";

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
