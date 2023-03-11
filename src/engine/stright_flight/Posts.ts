import BasePosts from "../base/BasePosts";
import BaseMode from "../BaseMode";

import newel_material from "../../assets/material/riser_material.jpg";

export default class Posts extends BasePosts {
  parent: BaseMode;

  
  constructor(parent: BaseMode) {
    super(parent);

    this.parent = parent;
  }

  draw(stair_width: number, floor_height: number, stair_going: number) {
    // const this_post_height = stair_height * 1.5;
    this.setBaseData(stair_width, floor_height, stair_going);

    this._createMode1();
    this._createMode2();
    // this._createMode3();
    this._createMode4();
    this._createMode5();
    // this._createMode6();
  }

  // Left Position
  _createMode1() {
    const stair_height = this.getStairHeight();
    const this_post_height = stair_height * 1.5;
    const tread_distance = { left: 0, right: 0 };

    var pos_start = {
      x: this.start_position.x + tread_distance.left * this.stair_going,
      y:
        this.start_position.y +
        this_post_height / 2 +
        tread_distance.left * stair_height,
      z: this.start_position.z - this.stair_width / 2 + 2,
    };

    // TODO SOMETHING 602

    this.create_stair_post(
      this_post_height,
      pos_start,
      newel_material
      // newel_style
    );

    // caps
    let cap_pos = pos_start;
    cap_pos.y =
      this.start_position.y + 80 + (tread_distance.left + 1) * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }

  _createMode2() {
    const stair_height = this.getStairHeight();
    const this_post_height = stair_height * 1.5;

    var temp_post_height =
      stair_height * 0.5 + this.stair_number * stair_height;
    var temp_x =
      this.start_position.x + (this.stair_number - 1) * this.stair_going;
    var pos_end = {
      x: temp_x,
      y: this.start_position.y + temp_post_height / 2,
      z: this.start_position.z - this.stair_width / 2 + 2,
    };

    this.create_stair_post(
      temp_post_height,
      pos_end,
      newel_material
      // param.newel_style
    );

    var cap_pos = pos_end;
    cap_pos.y = this.start_position.y + 80 + this.stair_number * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }

  _createMode3() {
    const stair_height = this.getStairHeight();
    const this_post_height = stair_height * 1.5;

    var temp_post_height = stair_height * 2;
    var temp_x =
      this.start_position.x + (this.stair_number - 1) * this.stair_going;
    var pos_end = {
      x: temp_x,
      y:
        this.start_position.y +
        temp_post_height / 2 +
        stair_height * (this.stair_number - 1) -
        stair_height / 2,
      z: this.start_position.z - this.stair_width / 2 + 2,
    };

    this.create_stair_post(
      temp_post_height,
      pos_end,
      newel_material
      // param.newel_style
    );

    var cap_pos = pos_end;
    cap_pos.y = this.start_position.y + 80 + this.stair_number * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }

  // Right Posts
  _createMode4() {
    const tread_distance = { left: 0, right: 0 };
    const stair_height = this.getStairHeight();

    const this_post_height = stair_height * 1.5;

    const pos_start = {
      x: this.start_position.x + tread_distance.right * this.stair_going,
      y:
        this.start_position.y +
        this_post_height / 2 +
        tread_distance.right * stair_height,
      z: this.start_position.z + this.stair_width / 2 - 2,
    };
    // if (tread_distance.right > 0) {
    //   pos_start.y = pos_start.y - (tread_distance.right * stair_height) / 2;
    //   this_post_height = this_post_height + tread_distance.right * stair_height;
    // }
    this.create_stair_post(
      this_post_height,
      pos_start,
      newel_material
      // param.newel_style
    );

    var cap_pos = pos_start;
    cap_pos.y =
      this.start_position.y + 80 + (tread_distance.right + 1) * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }

  _createMode5() {
    const stair_height = this.getStairHeight();
    const this_post_height = stair_height * 1.5;

    var temp_post_height =
      stair_height * 0.5 + this.stair_number * stair_height;
    var temp_x =
      this.start_position.x + (this.stair_number - 1) * this.stair_going;
    var pos_end = {
      x: temp_x,
      y: this.start_position.y + temp_post_height / 2,
      z: this.start_position.z + this.stair_width / 2 - 2,
    };

    this.create_stair_post(
      temp_post_height,
      pos_end,
      newel_material
      // param.newel_style
    );

    var cap_pos = pos_end;
    cap_pos.y = this.start_position.y + 80 + this.stair_number * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }

  _createMode6() {
    const stair_height = this.getStairHeight();
    const this_post_height = stair_height * 1.5;

    var temp_post_height = stair_height * 2;
    var temp_x =
      this.start_position.x + (this.stair_number - 1) * this.stair_going;
    var pos_end = {
      x: temp_x,
      y:
        this.start_position.y +
        temp_post_height / 2 +
        stair_height * (this.stair_number - 1) -
        stair_height / 2,
      z: this.start_position.z + this.stair_width / 2 - 2,
    };

    this.create_stair_post(
      temp_post_height,
      pos_end,
      newel_material
      // param.newel_style
    );

    var cap_pos = pos_end;
    cap_pos.y = this.start_position.y + 80 + this.stair_number * stair_height;
    this.create_stair_cap_post(
      this_post_height,
      cap_pos,
      newel_material
      // param.cap_style
    );
  }
}
