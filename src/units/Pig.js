import Units from './Units.js';

function Pig(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, 
              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, speed, hp, target_position, imgRight){
  Units.apply(this, arguments);

  this.imgRight = imgRight;
  this.imgLeft = img;
  this.pigInHouse = true;
  this.speed = speed;
  this.hp = hp;
  this.distance_moved = 0; 
  this.target_position = target_position;
  this.trapIndex = null;
}

Pig.prototype = Object.create(Units.prototype);
Pig.prototype.constructor = Pig;

Pig.prototype.move = function () {

  if(this.target_position !== 0 && this.isTargetPosition()){
    console.log("rotate");
    this.img = this.imgRight
    this.target_position = 0;
    this.speed *= -1;
  }

  this.distance_moved += this.speed;
};

Pig.prototype.getTargetPos = function () {
  return this.map.positions_num_x[this.target_position] + this.fix_axis_x;
};

Pig.prototype.getMainPos = function () {
  return Units.prototype.getPos.apply(this, arguments);
};

Pig.prototype.getPos = function () {
  return {
    x: this.getMainPos().x + this.distance_moved, 
    y: this.getMainPos().y
  };
};

Pig.prototype.setDefaultState = function (){
  this.speed = Math.abs(this.speed);
  this.pigInHouse = true;
  this.img = this.imgLeft;
  this.distance_moved = 0;
}

Pig.prototype.killPig = function () {
  this.hp = 0;
  this.setDefaultState();   
}

Pig.prototype.isTargetPosition = function (){
  if(Math.abs(this.getPos().x - this.getTargetPos()) <= Math.abs(this.speed))
    return true;
  else
    return false;
}

Pig.prototype.isFinish = function (){
  if(this.target_position === 0 && this.isTargetPosition())
    return true;
  else
    return false;
}

Pig.prototype.isTrapped = function(wolf){
  if(this.getPos().x + this.fix_axis_x >= wolf.getPos().x - (wolf.scale_w/2))
    return true;
  else
    return false;    
}

Pig.prototype.animate = function(){
  Units.prototype.animate.apply(this, arguments);
  this.move();
}

export default Pig;