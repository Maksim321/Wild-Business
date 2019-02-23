import Units from './Units.js';

function Wolf(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, 
              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, speed, hp){
  Units.apply(this, arguments);

  this.speed = speed;
  this.hp = hp;
  this.distance_moved = 120;
  this.isWolfInTrap = false; 
}

Wolf.prototype = Object.create(Units.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.getMainPos = function () {
  return Units.prototype.getPos.apply(this, arguments);
};

Wolf.prototype.getPos = function () {
  return {
    x: this.getMainPos().x + this.distance_moved, 
    y: this.getMainPos().y
  };
};

Wolf.prototype.isHit = function (x, y) {
  if(this.getPos().x < x && this.getPos().y < y && 
     this.getPos().x + this.scale_w > x && 
     this.getPos().y + this.scale_h > y){
    return 1;
  }
  return 0;
}

Wolf.prototype.move = function () {
  this.distance_moved += this.speed;
};


Wolf.prototype.hit = function () {
  this.hp--;
}

Wolf.prototype.animate = function(){
  Units.prototype.animate.apply(this, arguments);
  this.move();
}

Wolf.prototype.isTrapped = function (trap){
  if(!trap.state && this.map.positions_num_x[trap.default_pos_num_x] >= 
      this.getPos().x - (this.fix_axis_x / 2))
    return true;
  else
    return false;
}

export default Wolf;