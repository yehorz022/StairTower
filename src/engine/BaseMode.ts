import Scene from "../Scene";

export type IStairMode = "stright_flight";

export default class BaseMode {
  mode: IStairMode;
  width: number;
  height: number;
  going: number;
  scene?: Scene;
  camera?: THREE.PerspectiveCamera;

  constructor() {
    this.mode = "stright_flight";
    this.width = 950;
    this.height = 2500;
    this.going = 202;
  }
}
