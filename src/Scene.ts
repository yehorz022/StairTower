import * as THREE from "three";

import StairSimulator from "./StairSimulation";
import SimulationObject from "./objects/SimulationObject";

class Scene {
  app: StairSimulator;
  scene: THREE.Scene;

  constructor(app: StairSimulator) {
    this.app = app;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5);
  }

  addModel(object: SimulationObject) {
    // this.scene.add(
    //   new THREE.Mesh(
    //     new THREE.BoxGeometry(10, 10, 10),
    //     new THREE.MeshBasicMaterial({
    //       color: 0xff00000,
    //       side: THREE.DoubleSide,
    //     })
    //   )
    // );
    if (object.mesh) this.scene.add(object.mesh);
  }
}

export default Scene;
