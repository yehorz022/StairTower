import BaseMode from "../BaseMode";
import BaseHandrails from "../base/BaseHandrails";

import newel_material from "../../assets/material/riser_material.jpg";

export default class Handrails extends BaseHandrails {
  parent: BaseMode;

  constructor(parent: BaseMode) {
    super(parent);

    this.parent = parent;
  }

  draw(stair_width: number, floor_height: number, stair_going: number) {
    this.setBaseData(stair_width, floor_height, stair_going);
    const stair_height = this.getStairHeight();
    const tread_distance = { left: 0, right: 0 };
    const this_post_height = stair_height * 1.5;

    // Right Side Handrails
    this._createRightSide(this_post_height, stair_height, tread_distance);
    // Left Side Handrails
  }

  _createLeftSide() {}

  _createRightSide(
    this_post_height: number,
    stair_height: number,
    tread_distance: { left: number; right: number }
  ) {
    console.log("_createRightSide");
    const pos_start = {
      x: this.start_position.x + tread_distance.left * this.stair_going,
      y:
        this.start_position.y +
        this_post_height / 2 +
        tread_distance.left * stair_height,
      z: this.start_position.z - this.stair_width / 2 + 2,
    };

    // Option1
    // Need to Optimization
    var temp_post_height =
      stair_height * 0.5 + this.stair_number * stair_height;
    var temp_x =
      this.start_position.x + (this.stair_number - 1) * this.stair_going;

    const pos_end = {
      x: temp_x,
      y: this.start_position.y + temp_post_height / 2,
      z: this.start_position.z - this.stair_width / 2 + 2,
    };

    // Option2
    // var pos_end = {
    //   x: temp_x,
    //   y:
    //     start_position.y +
    //     temp_post_height / 2 +
    //     parseFloat(param.stair_height) * (param.stair_number - 1) -
    //     param.stair_height / 2,
    //   z: start_position.z - param.stair_width / 2 + 2,
    // };

    pos_start.y = this.start_position.y + tread_distance.left * stair_height;
    pos_end.y = this.start_position.y + stair_height * this.stair_number;
    // if (
    //   param.construction == "cut" &&
    //   (param.cut_side == "left" || param.cut_side == "both")
    // ) {
    //   pos_start.x = pos_start.x + 1.5;
    //   pos_start.z = pos_start.z + 0.8;
    //   pos_end.z = pos_end.z + 0.8;
    // }
    this.create_railing_func(
      pos_start,
      pos_end,
      "front",
      this.stair_going / 2,
      stair_height / 2,
      newel_material
    );
    var start = {
      x: tread_distance.left * this.stair_going,
      y: tread_distance.left * stair_height,
    };
    var end = {
      x: (this.stair_number - 1) * this.stair_going,
      y: (this.stair_number - 1) * stair_height,
    };
    var pos = {
      x: this.start_position.x + tread_distance.left * this.stair_going,
      y: this.start_position.y + tread_distance.left * stair_height,
      z: this.start_position.z - this.stair_width / 2,
    };
    this.create_stair_rail_hand(
      start,
      end,
      stair_height,
      0,
      pos,
      newel_material
    );
  }
}
