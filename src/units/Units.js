function Units(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, 
              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map){
  this.img = img;
  this.sprite_w = sprite_w;
  this.sprite_h = sprite_h;
  this.map = map;
  this.default_pos_num_y = default_pos_num_y;
  this.default_pos_num_x = default_pos_num_x;
  this.fix_axis_x = fix_axis_x;
  this.fix_axis_y = fix_axis_y;
  this.scale_w = scale_w;
  this.scale_h = scale_h;
  this.skipFrame = skipFrame;
  this.skippedFrameCount = 0;
  this.anim_frame = {
  	frame_x: 0, 
  	frame_y: 0
  };
}

Units.prototype.getPos = function () {
  return {
    x: this.map.positions_num_x[this.default_pos_num_x] + this.fix_axis_x, 
    y: this.map.positions_num_y[this.default_pos_num_y] + this.fix_axis_y 
  };
};

Units.prototype.getFrame = function (){
  return this.anim_frame;
}

Units.prototype.getCurrentNumFrame = function (){
  return ((this.img.width / this.sprite_w) * this.getFrame().frame_y) + this.getFrame().frame_x + 1;
}

Units.prototype.getCountFrame = function (){
  return (this.img.width / this.sprite_w) * (this.img.height / this.sprite_h);
}

Units.prototype.animate = function(){
  if(this.skipFrame <= this.skippedFrameCount){
    if(this.anim_frame.frame_x >= (this.img.width / this.sprite_w)-1){
    	this.anim_frame.frame_x = 0;

    	if(this.anim_frame.frame_y >= (this.img.height / this.sprite_h)-1){
    	  this.anim_frame.frame_y = 0;
      }
      else{
        this.anim_frame.frame_y++;	
      }
    }
    else{
    	this.anim_frame.frame_x++;
    }
    this.skippedFrameCount = 0;
  }
  else{
    this.skippedFrameCount++;
  } 
}

export default Units;