import { Game } from "./engine/Game";
import { Scene } from "./engine/scenes/Scene";
import { Player } from "./game/gameobjects/player";
import { ShapeRenderer } from "./engine/components/ShapeRenderer";
import { Circle } from "./engine/geometry/Circle";
import { Vector2D } from "./engine/math/Vector2D";

let game = new Game({clearColor: "wheat"});


let initialScene: Scene = new Scene(game);
let player: Player = new Player(initialScene);

let renderer = new ShapeRenderer(player);
renderer.color = "blue";
renderer.shape = new Circle(30);

player.attachComponent(ShapeRenderer, renderer);
player.transform.position = new Vector2D(game.viewPort.width/2, game.viewPort.height/2);

initialScene.addGameObject(player);

game.sceneManager.push(initialScene);
game.init();
game.run();