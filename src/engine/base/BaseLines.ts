import * as THREE from "three";

import { IPosition } from "../../@types/position";
import BaseMode from "../BaseMode";
import Base from "./Base";

export default class BaseLines extends Base {
  create_plan_line(length: number, rotate: number, pos: IPosition) {
    var geometry = new THREE.BoxGeometry(1, 1, length);
    var material = new THREE.MeshPhongMaterial({
      color: 0x000000,
      flatShading: true,
    });
    var line = new THREE.Mesh(geometry, material);
    line.rotation.y = THREE.MathUtils.degToRad(rotate);
    line.position.x = pos.x;
    line.position.y = pos.y;
    line.position.z = pos.z;
    // if (mirror_mode) line.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
    // line.callback = null;

    this.parent.scene?.scene.add(line);
  }

  create_plan_v_line(length: number, pos: IPosition) {
    var geometry = new THREE.BoxGeometry(1, length, 1);
    var material = new THREE.MeshPhongMaterial({
      color: 0x000000,
      flatShading: true,
    });
    var line = new THREE.Mesh(geometry, material);
    line.position.x = pos.x;
    line.position.y = pos.y;
    line.position.z = pos.z;
    // if (mirror_mode) line.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
    // line.callback = null;

    this.parent.scene?.scene.add(line);
  }
}
