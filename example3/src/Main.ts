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


/*
let scene2: Scene = new Scene(game);
const player2 = scene2.createEntity();
player2.addComponent(Transform, Vector2D.from(100, 100));
player2.addComponent(RigidBody, Vector2D.from(100, 0));
player2.addComponent(Sprite, "/box.png", 10, 20);
setTimeout(() => {
    game.sceneManager.push(scene2);
}, 6000);
*/

game.init();
game.run();