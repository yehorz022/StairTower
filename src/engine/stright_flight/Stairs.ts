import * as THREE from "three";

import BaseMode from "../BaseMode";

import riser_material from "../../assets/material/riser_material.jpg";
import tread_material from "../../assets/material/tread_material.jpg";
import { IPosition } from "../../@types/position";

export default class Stairs {
  parent: BaseMode;

  constructor(parent: BaseMode) {
    this.parent = parent;
  }

  draw(stair_width: number, floor_height: number, stair_going: number) {
    const stair_height = 20; // 200
    const stair_number = Math.floor(floor_height / stair_height);

    const h1_width = 500;
    const model_x = stair_number * stair_going;
    const model_y = floor_height;
    const model_z = stair_width;

    const centerPoint = { x: -model_x / 2, y: 0, z: -model_z / 2 };
    const start_position = {
      x: centerPoint.x,
      y: centerPoint.y,
      z: centerPoint.z,
    };

    let end_position = { x: 0, y: 0, z: 0 };

    for (var i = 1; i <= stair_number; i++) {
      end_position.x = centerPoint.x + (i - 1) * stair_going;
      end_position.y = centerPoint.y + (i - 1) * stair_height;
      end_position.z = centerPoint.z;

      // if (i === 1) {
      //   const pos = {
      //     x: end_position.x + stair_going,
      //     y: centerPoint.y,
      //     z: end_position.z,
      //   };
      //   this.create_plan_line(h1_width, 0, pos);
      // }

      // main cube of stair
      var geometry = new THREE.BoxGeometry(2, stair_height, stair_width);
      var texture = new THREE.TextureLoader().load(riser_material);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(0.7, 0.3);
      // texture.anisotropy = renderer.getMaxAnisotropy();
      var material = new THREE.MeshPhongMaterial({
        map: texture,
        flatShading: true,
      });
      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = end_position.x;
      cube.position.y = end_position.y + stair_height / 2;
      cube.position.z = end_position.z;
      // cube.callback = null;
      cube.castShadow = true; //default is false
      cube.receiveShadow = true; //default
      this.parent.scene?.scene.add(cube);

      // top of stair
      var texture2 = new THREE.TextureLoader().load(tread_material);
      texture2.wrapS = THREE.RepeatWrapping;
      texture2.wrapT = THREE.RepeatWrapping;
      texture2.repeat.set(0.4, 1);
      // texture2.anisotropy = renderer.getMaxAnisotropy();

      const material2 = new THREE.MeshPhongMaterial({
        map: texture2,
        flatShading: true,
      });

      const st_going = stair_going + 3;
      const st_x = stair_going / 2 - 0.5;

      var geometry = new THREE.BoxGeometry(st_going, 2, stair_width);

      var cube = new THREE.Mesh(geometry, material2);
      cube.position.x = end_position.x + st_x;
      cube.position.y = end_position.y + stair_height;
      cube.position.z = end_position.z;
      // cube.callback = null;
      cube.castShadow = true;
      cube.receiveShadow = true;

      this.parent.scene?.scene.add(cube);
    }
  }
}
