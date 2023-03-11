import Scene from "../Scene";

import StraightFlight from "./StraightFlight";

export default class Engine {
  scene: Scene;

  strightFlight: StraightFlight;

  constructor(scene: Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene;

    this.strightFlight = new StraightFlight(scene, camera);

    this.strightFlight.draw();
  }
}
