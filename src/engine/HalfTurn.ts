import * as THREE from 'three';

import BaseMode from './BaseMode';

import Scene from '../Scene';

export default class HalfTurn extends BaseMode {
  constructor(scene: Scene, camera: THREE.PerspectiveCamera) {
    super();
  }

  public draw() {}

  getCenterPoint(): { x: number; y: number; z: number } {
    return { x: 0, y: 0, z: 0 };
  }
}
