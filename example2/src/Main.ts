import { Camera, Game, Scene} from "game-engine";
import playerFactory from './game/prefab/Player';
import boxFactory from './game/prefab/Box';
import pentagonFactory from './game/prefab/Pentagon';

const game: Game = new Game({clearColor: "cornflowerblue"});

// create initial scene
const scene: Scene = new Scene(game);

// create and add camera to scene
const camera: Camera = new Camera(scene);
scene.setMainCamera(camera);

// player
const player = playerFactory(scene);
scene.addGameObject(player);

// box
const box1 = boxFactory(scene);
box1.transform.translate(-100, -100);
scene.addGameObject(box1);

const box2 = boxFactory(scene);
box2.transform.translate(100, 0);
scene.addGameObject(box2);

const pentagon = pentagonFactory(scene);
// pentagon.transform.translate()
scene.addGameObject(pentagon);

// push initial scene to game's scene manager.
game.sceneManager.push(scene);

// initialize game
game.init();

// run game loop
game.run();
