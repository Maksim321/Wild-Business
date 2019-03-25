import Scene from './Scene.js';
import Units from './units/Units.js';
import Map from './Map.js';
import Pig from './units/Pig.js';
import House from './units/House.js';
import Trap from './units/Trap.js';
import Controls from './Controls.js';
import Line from './Line.js';
import Score from './Score.js';
import Sound from './Sound.js';

function Game(screen){
  Scene.apply(this, arguments);

  this.score = new Score();
  this.controls = new Controls();
  this.map = new Map();
  this.lines = [
    new Line(
      screen, 0, 
      new Pig(this.imgs['pigRight'], 0, 0, -50, -55, 150, 175, 105, 120, 0, this.map, 2, 1, 0, this.imgs['pigLeft']), 
      new House(this.imgs['houses'], 0, 0, -80, -85, 250, 250, 155, 155, 0, this.map, 1, 2), 
      this.controls, this.map, this.score, this.sound
    ),
    new Line(
      screen, 1, 
      new Pig(this.imgs['pigTwoRight'], 0, 1, -50, -55, 150, 175, 105, 120, 0, this.map, 1.5, 1, 0, this.imgs['pigTwoLeft']), 
      new House(this.imgs['houses'], 0, 1, -75, -85, 250, 250, 155, 155, 0, this.map, 1, 1), 
      this.controls, this.map, this.score, this.sound
    ),
    new Line(
      screen, 2, 
      new Pig(this.imgs['pigTwoRight'], 0, 2, -50, -55, 150, 175, 105, 120, 0, this.map, 1, 1, 0, this.imgs['pigTwoLeft']), 
      new House(this.imgs['houses'], 0, 2, -80, -70, 250, 250, 155, 155, 0, this.map, 1, 0), 
      this.controls, this.map, this.score, this.sound
    )
  ];
  this.canvas.addEventListener('mousedown', this.onClick.bind(this), false);
}

Game.prototype = Object.create(Scene.prototype);
Game.prototype.constructor = Game;

Game.prototype.onClick = function(event){
  let rect = this.canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  let cell = this.map.find_cell(x, y);

  if(cell && this.controls.isChecked === null){
    this.lines[cell.pos_num_y].hitWolf(x, y);
  }
  else if(cell && this.lines[cell.pos_num_y].isPlaceEmpty(cell.pos_num_x, cell.pos_num_y))
    this.lines[cell.pos_num_y].setTargetPosition(cell);
}

Game.prototype.render = function(){
  this.render_background();

  this.lines.forEach((line)=> {
    this.render_house(line.getHouse());
    this.render_traps(line.getTraps());
    this.render_pig(line.getPigOrSmoke());
    this.render_wolfs(line.getWolfs());
    line.update();
  });
  this.render_score();
  return "game";
}

Game.prototype.render_pig = function(pig){
  if(!pig.pigInHouse)
    this.render_sprites(pig);
}

Game.prototype.render_traps = function(traps){
  traps.forEach((trap)=> {
    this.render_sprites(trap);
  });
}

Game.prototype.render_wolfs = function(wolfs){
  wolfs.forEach((wolf)=> {
    this.render_sprites(wolf);
  });
}

Game.prototype.render_house = function (house) {
  this.render_sprites(house);
}

Game.prototype.render_background = function(){
  this.ctx.drawImage(this.imgs['background'], 0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.render_sprites = function (obj) {
  this.ctx.drawImage(
    obj.img, 
    obj.getFrame().frame_x * obj.sprite_w, 
    obj.getFrame().frame_y * obj.sprite_h, 
    obj.sprite_w, obj.sprite_h, 
    obj.getPos().x, 
    obj.getPos().y, 
    obj.scale_w, obj.scale_h
  );    
}

Game.prototype.render_score = function () {
  this.ctx.fillStyle = '#0E000E';
  this.ctx.fillRect(755, 33, 160, 41 );  
  this.ctx.fillStyle = '#FCEA84';
  this.ctx.fillRect(760, 38, 150, 31 );
  this.ctx.fillStyle = '#000104';
  this.ctx.font="bold 24px Verdana";
  this.ctx.fillText("KILLS: " + this.score.getScore(), 770, 62);
}

export default Game;