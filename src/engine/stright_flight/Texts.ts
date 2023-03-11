import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import Roboto_Regular from "three/examples/fonts/helvetiker_regular.typeface.json";
import { IPosition, IRotation } from "../../@types/position";

import BaseMode from "../BaseMode";

// import Roboto_Regular from "../assets/fonts/Roboto_Regular.json";

export default class Texts {
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
    }

    var text = (floor_height * 10).toFixed(2) + " mm";
    var pos1 = {
      x: centerPoint.x + stair_going * (stair_number - 1),
      y: centerPoint.y + (stair_height * stair_number) / 2,
      z: end_position.z + stair_width / 2 + 20,
    };
    var rotate = { x: 0, y: 0, z: 0 };
    this.create_text(text, pos1, rotate, 1);

    var text = (stair_going * (stair_number - 1) * 10).toFixed(2) + " mm";
    var pos2 = {
      x: centerPoint.x + (stair_number * stair_going) / 3,
      y: centerPoint.y,
      z: end_position.z + stair_width / 2 + 20,
    };
    var rotate = { x: 0, y: 0, z: 0 };
    this.create_text(text, pos2, rotate, 2);
  }

  create_text(text: string, pos: IPosition, rotate: IRotation, index: number) {
    console.log(text);
    const loader = new FontLoader();
    loader.load(Roboto_Regular, (font) => {
      //   const textGeo = new TextGeometry(text, {
      //     font: font,
      //     size: 7,
      //     height: 1,
      //     curveSegments: 0,
      //     bevelEnabled: false,
      //     bevelThickness: 0,
      //     bevelSize: 1,
      //     bevelOffset: 0,
      //     bevelSegments: 0,
      //   });

      const textGeo = new TextGeometry(text, {
        font: font,
        size: 8,
        height: 1.5,
        curveSegments: 1,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 2,
        bevelOffset: 0,
        bevelSegments: 0,
      });
      const materials = new THREE.MeshPhongMaterial({
        color: 0x000000,
        flatShading: true,
      });

      //   console.log(pos, rotate);
      //   const textBufferGeo = new THREE.BufferGeometry().fromGeometry(textGeo);
      const textMesh = new THREE.Mesh(textGeo, materials);
      textMesh.position.x = pos.x;
      textMesh.position.y = pos.y;
      textMesh.position.z = pos.z;
      textMesh.rotation.x = THREE.MathUtils.degToRad(rotate.x);
      textMesh.rotation.y = THREE.MathUtils.degToRad(rotate.y);
      textMesh.rotation.z = THREE.MathUtils.degToRad(rotate.z);
      //   textMesh.callback = null;
    //   if (this.parent.camera)
    //     textMesh.quaternion.copy(this.parent.camera.quaternion);
        // textMesh.quaternion = this.parent.camera.quaternion;
      //   if (mirror_mode) {
      //     //			textMesh.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
      //     //			textMesh.rotation.z = THREE.Math.degToRad(180);
      //   }
      //   scene.add(textMesh);
      this.parent.scene?.scene.add(textMesh);
    });
  }
}
