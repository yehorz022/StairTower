import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { I2Position, IPosition } from "../../@types/position";
import { radians_to_degrees } from "../../utils";
import BaseMode from "../BaseMode";
import Base from "./Base";

// function get_decimal(value: number) {
//   return parseFloat(Math.round(value * 100) / 100).toFixed(2);
// }
import crown_handrail from "../../assets/models/crown_handrail.obj";

export default class BaseHandrails extends Base {
  create_railing_func(
    start: IPosition,
    end: IPosition,
    direction: "front" | "left" | "right" | "back",
    step_direct: number,
    step_height: number,
    texture_ur: string
  ) {
    var i = 1;
    var current_position = { x: start.x, y: start.y, z: start.z };

    while (true) {
      if (direction == "front") current_position.x = start.x + i * step_direct;

      current_position.y = start.y + 50 + i * step_height;
      i++;

      if (direction == "front" && current_position.x >= end.x) break;

      var geometry = new THREE.BoxGeometry(3, 85, 3);

      var texture = new THREE.TextureLoader().load(texture_ur);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      //   texture.anisotropy = renderer.getMaxAnisotropy();
      var material = new THREE.MeshPhongMaterial({ map: texture });

      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = current_position.x;
      cube.position.y = current_position.y - 2;
      cube.position.z = current_position.z;
      //   if (mirror_mode)
      //     cube.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
      //   cube.callback = null;
      cube.castShadow = true;
      cube.receiveShadow = true;

      this.parent.scene?.scene.add(cube);
    }
  }

  async create_stair_rail_hand(
    start: I2Position,
    end: I2Position,
    stair_height: number,
    rotate: number,
    pos: IPosition,
    texture_url: string
  ) {
    const xx = end.x - start.x;
    const yy = end.y - start.y;
    const rotate_z = radians_to_degrees(Math.atan(yy / xx));
    const len = Math.sqrt(Math.pow(xx, 2) + Math.pow(yy, 2));

    const texture = new THREE.TextureLoader().load(texture_url);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    //	texture.repeat.set( 0.01, 0.01 );
    // texture.anisotropy = renderer.getMaxAnisotropy();
    texture.repeat.set(0.01, 0.01);

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rotation = { x: 0, y: rotate, z: -(90 - rotate_z) };
    // for (var i = 0; i < newel_objects.length; i++) {
    //   if (newel_objects[i][0] == options.handrail_style) {
    //     copy_rail_hand(newel_objects[i][1], len, pos, rotate, material);
    //   }
    // }
    const loader = new OBJLoader();
    const obj = await loader.loadAsync(crown_handrail);
    this.copy_rail_hand(obj, len, pos, rotation, material);
  }
}
