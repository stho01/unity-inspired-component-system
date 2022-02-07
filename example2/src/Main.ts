import { Camera, Game, Scene} from "stho-game-engine";
import playerFactory from './game/prefab/Player';

const game: Game = new Game({clearColor: "cornflowerblue"});

// create initial scene
const scene: Scene = new Scene(game);

// create and add camera to scene
const camera: Camera = new Camera(scene);
scene.setMainCamera(camera);

// player
scene.addGameObject(playerFactory(scene));

// push initial scene to game's scene manager.
game.sceneManager.push(scene);

// initialize game
game.init();

// run game loop
game.run();
