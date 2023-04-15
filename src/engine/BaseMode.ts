import * as THREE from 'three';

import Scene from '../Scene';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PRODUCT_SCALE } from './Engine';
import Assets from '../Assets';

export type IStairMode = 'straight_flight' | 'quarter_turn';

export default abstract class BaseMode {
  mode: IStairMode;
  scene?: Scene;
  camera?: THREE.PerspectiveCamera;
  controls?: OrbitControls;
  resource!: Assets;

  stair_height: number;

  constructor() {
    this.mode = 'straight_flight';

    this.stair_height = 200 / PRODUCT_SCALE;
  }

  abstract getCenterPoint(): { x: number; y: number; z: number };
}
