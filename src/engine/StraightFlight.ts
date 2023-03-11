import * as THREE from "three";

import Scene from "../Scene";
// objects
import BaseMode from "./BaseMode";
import StraightFlightSide from "../objects/StraightFlightSide";
import StraightBaseLine from "../objects/StraightBaseLine";

import Stairs from "./stright_flight/Stairs";
import Lines from "./stright_flight/Lines";
import Texts from "./stright_flight/Texts";
import Posts from "./stright_flight/Posts";
import Handrails from "./stright_flight/Handrails";

export default class StrightFlight extends BaseMode {
  side?: StraightFlightSide;
  endBaseLine?: StraightBaseLine;

  stairs?: Stairs;
  lines?: Lines;
  texts?: Texts;
  posts?: Posts;
  handrails?: Handrails;

  constructor(scene: Scene, camera: THREE.PerspectiveCamera) {
    super();

    this.scene = scene;
    this.camera = camera;

    this.mode = "stright_flight";

    this.stairs = new Stairs(this);
    this.lines = new Lines(this);
    this.texts = new Texts(this);
    this.posts = new Posts(this);
  }

  draw() {
    this.stairs?.draw(this.width / 10, this.height / 10, this.going / 10);
    this.lines?.draw(this.width / 10, this.height / 10, this.going / 10);
    this.texts?.draw(this.width / 10, this.height / 10, this.going / 10);
    this.posts?.draw(this.width / 10, this.height / 10, this.going / 10);
    this.handrails?.draw(this.width / 10, this.height / 10, this.going / 10);
    // this.side = new StraightFlightSide(this);
    // this.endBaseLine = new StraightBaseLine(this);

    // this.side.draw(new THREE.Vector3(0, 0, 0), 0);
    // this.endBaseLine.draw(new THREE.Vector3(0, 0, 0), 0);

    // this.scene?.addModel(this.side);
  }
}
