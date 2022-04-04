import {
    Game,
    RigidBody,
    Scene,
    Transform,
    Vector2D
} from "stho-game-engine";
import {Sprite} from "stho-game-engine/src/engine/components/Sprite";


let game: Game = new Game({clearColor: "cornflowerblue"});

let scene: Scene = new Scene(game);

const player = scene.createEntity();
player.addComponent(Transform, Vector2D.from(100, 100));
player.addComponent(RigidBody, Vector2D.from(100, 0));
player.addComponent(Sprite, "/box.png", 10, 20);

game.sceneManager.push(scene);

game.init();
game.run();

// initialize game
//game.init();
// run game loop
//game.run();
