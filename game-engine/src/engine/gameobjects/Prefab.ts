import {Scene} from '../scenes/Scene';
import {GameObject} from './gameobject';

export type Prefab = {(scene: Scene): GameObject};
