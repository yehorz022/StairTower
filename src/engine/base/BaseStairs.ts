import * as THREE from 'three';
import Base from './Base';

export default class BaseStairs extends Base {
  createShape(
    points: Array<{ x: number; y: number }>,
    startPos: { x: number; y: number } = { x: -1, y: 0 }
  ) {
    const shape = new THREE.Shape();
    shape.moveTo(startPos.x, startPos.y);
    points.forEach((p) => {
      shape.bezierCurveTo(p.x, p.y, p.x, p.y, p.x, p.y);
    });
    return shape;
  }

  createExtrudeGeometry(shape: THREE.Shape, depth: number) {
    const extrudeSettings = {
      depth: depth,
      bevelEnabled: true,
      bevelSegments: 0,
      steps: 1,
      bevelSize: 1,
      bevelThickness: 1,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }

  createRaise(
    geometry: THREE.BufferGeometry,
    position: THREE.Vector3,
    mirror_mode: boolean,
    rotation: THREE.Vector3 = new THREE.Vector3(0, 0, 0)
  ) {
    const tData = this.parent.resource.getTexture('RISER');
    const materialRaiser = new THREE.MeshPhongMaterial({
      map: tData.texture.clone(),
    });

    const meshRiser = new THREE.Mesh(geometry, materialRaiser);
    meshRiser.position.copy(position);
    meshRiser.rotation.setFromVector3(rotation);
    meshRiser.castShadow = true;
    meshRiser.receiveShadow = true;
    if (mirror_mode)
      meshRiser.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, -1));
    return meshRiser;
  }

  createTread(
    geometry: THREE.BufferGeometry,
    position: THREE.Vector3,
    mirror_mode: boolean,
    rotation: THREE.Vector3 = new THREE.Vector3(0, 0, 0)
  ) {
    const tData = this.parent.resource.getTexture('RISER');
    const materialTread = new THREE.MeshPhongMaterial({
      map: tData.texture.clone(),
    });
    const meshTread = new THREE.Mesh(geometry, materialTread);
    meshTread.position.copy(position);
    meshTread.rotation.setFromVector3(rotation);
    meshTread.castShadow = true;
    meshTread.receiveShadow = true;
    if (mirror_mode)
      meshTread.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, -1));
    return meshTread;
  }
}
