import Units from './Units.js';

function House(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, 
               sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, hp , houseTypeNum){
  Units.apply(this, arguments);
  this.houseTypeNum = houseTypeNum;
  this.houseState = 0;
  this.hp = hp;
}

House.prototype = Object.create(Units.prototype);
House.prototype.constructor = House;

House.prototype.animate = function(pig){
  if(pig.hp){
    if(pig.pigInHouse)
      this.houseState = 0;
    else
      this.houseState = 1;
  }
  else
    this.houseState = 2;
}

House.prototype.getFrame = function (){
  return { frame_x: this.houseState, frame_y: this.houseTypeNum };
}

export default House;