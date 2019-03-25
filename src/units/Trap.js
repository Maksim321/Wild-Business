import Units from './Units.js';

function Trap(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, 
              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, hp, sound){
  Units.apply(this, arguments);

  this.hp = hp;
  this.state = false;
  this.wolf = null;
  this.sound = sound;
}

Trap.prototype = Object.create(Units.prototype);
Trap.prototype.constructor = Trap;

export default Trap;