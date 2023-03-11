import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { IPosition } from "../../@types/position";
import BaseMode from "../BaseMode";
import Base from "./Base";

const POST_SIZE = 6;

import pyramid from "../../assets/models/pyramid.obj";

export default class BasePosts extends Base {
  create_stair_post(
    post_height: number,
    pos: IPosition,
    texture_url: string
    // cap_style
  ) {
    // post_height = post_height + 72;
    // pos.y = pos.y + 36;

    const post_size = POST_SIZE;
    const geometry = new THREE.BoxGeometry(post_size, post_height, post_size);
    const texture = new THREE.TextureLoader().load(texture_url);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.1, 0.1);
    // texture.anisotropy = renderer.getMaxAnisotropy();
    const material = new THREE.MeshPhongMaterial({ map: texture });

    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = pos.x;
    cube.position.y = pos.y;
    cube.position.z = pos.z;
    // if (mirror_mode) cube.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
    // cube.callback = null;
    cube.castShadow = true;
    cube.receiveShadow = true;

    this.parent.scene?.scene.add(cube);
  }

  async create_stair_cap_post(
    post_height: number,
    pos: IPosition,
    texture_url: string
    // newel_style
  ) {
    var texture = new THREE.TextureLoader().load(texture_url);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    // texture.anisotropy = renderer.getMaxAnisotropy();
    var material = new THREE.MeshPhongMaterial({ map: texture });

    // for (var i = 0; i < newel_objects.length; i++) {
    //   if (newel_objects[i][0] == cap_style) {
    //     this.copy_newel(newel_objects[i][1], pos, material);
    //   }
    // }
    const loader = new OBJLoader();
    const obj = await loader.loadAsync(pyramid);
    this.copy_newel(obj, pos, material);
  }

}
