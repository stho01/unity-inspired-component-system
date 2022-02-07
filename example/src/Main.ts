import { Camera, Circle, Game, GameObject, Rectangle, Scene, ShapeRenderer } from "stho-game-engine";
import { MoveCameraBehaviour } from "./game/components/MoveCameraBehaviour";
import { PlayerInputBehaviour } from "./game/components/PlayerInputBehaviour";

let game: Game = new Game({clearColor: "cornflowerblue"});

// create initial scene
let scene: Scene = new Scene(game);

// create and add camera to scene
let camera: Camera = new Camera(scene);
camera.attachComponent(MoveCameraBehaviour);
scene.setMainCamera(camera);

// create a game object that represents the player.
let player: GameObject = new GameObject(scene);

// attach a rendering component to player game object.
let renderer: ShapeRenderer = player.attachComponent(ShapeRenderer);
renderer.color = "blue";
renderer.shape = new Circle(30);

// attach a PlayerInputBehaviour component to player.
player.attachComponent(PlayerInputBehaviour);

// add player to scene.
scene.addGameObject(player);

// create a game object that represents a obstacle
let obstacle: GameObject = new GameObject(scene);
obstacle.transform.translate(100, 100);

let obstacleShape: ShapeRenderer = obstacle.attachComponent(ShapeRenderer);
obstacleShape.color = "red";
obstacleShape.shape = new Rectangle(100, 100);

scene.addGameObject(obstacle);

// push initial scene to game's scene manager.
game.sceneManager.push(scene);

// initialize game
game.init();

// run game loop
game.run();
