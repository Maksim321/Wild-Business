import Scene from './Scene.js';
import Units from './units/Units.js';
import Trap from './units/Trap.js';
import Spawner from './Spawner.js';
import Sound from './Sound.js';

function Line(screen, index, pig, house, controls, map, score, sound){
  Scene.apply(this, arguments);

  this.controls = controls;
  this.score = score;
  this.spawner = new Spawner(screen, map, 160);
  this.map = map;
  this.index = index;
  this.sound = sound;

  this.wolfs = [];
  this.traps = [];
  this.pig = pig;
  this.house = house; 
  this.smoke = null;
}

Line.prototype = Object.create(Scene.prototype);
Line.prototype.constructor = Line;

Line.prototype.getPig = function(){
  return this.pig;
}

Line.prototype.getSmoke = function(){
  return this.smoke;
}

Line.prototype.getPigOrSmoke = function(){
  return this.smoke ? this.smoke : this.pig;
}

Line.prototype.getHouse = function(){
  return this.house;
}

Line.prototype.getTraps = function(){
  return this.traps;
}

Line.prototype.getWolfs = function(){
  return this.wolfs;
}

Line.prototype.spawnWolf = function(wolf){
  if(wolf !== null){
    this.wolfs.push(wolf);
  }
}

Line.prototype.update = function(){
  this.update_houses();
  this.update_traps();
  this.update_pigs();
  this.update_wolf();

  if(this.wolfs.length < 10)
    this.spawnWolf(this.spawner.getRandomWolf(6, this.index));
}

Line.prototype.setTargetPosition = function (cell) {
  if(cell && this.pig.pigInHouse){
    if(this.pig.hp){
      this.sound['active_pig'].play();
      this.pig.target_position = cell.pos_num_x;
      this.pig.pigInHouse = false;
      this.pig.trapIndex = this.controls.isChecked;
    }
  }
}

Line.prototype.update_traps = function () {
  this.traps.forEach((trap)=> {
    if(trap.state){
      if(trap.getCountFrame() === trap.getCurrentNumFrame())
        this.trapKillWolf(trap);
      else
        trap.animate(); 
    }
  });
}

Line.prototype.update_wolf = function () {
  this.wolfs.forEach((wolf)=> {
  	let isTrap = this.isWolfTrapped(wolf);
  	if(isTrap >= 0){
  	  this.wolfTrapped(wolf, this.traps[isTrap]);
  	}
    wolf.animate();
  });
}

Line.prototype.update_houses = function () {
  this.house.animate(this.pig);
}

Line.prototype.update_pigs = function () {
  if(this.pig.hp && !this.pigTrapped()){
    if(!this.pig.pigInHouse){
	  if(this.pig.isFinish())
	    this.pig.setDefaultState();
	  else if(this.pig.isTargetPosition() && !this.pig.isFinish())
	    this.update_smoke(this.pig.target_position);    
	  else
	    this.pig.animate();   	
    } 
  }
}

Line.prototype.update_smoke = function (pos_num_x) {
  if(!this.smoke){
    this.smoke = new Units(this.imgs['smoke'], pos_num_x, this.index, -80, -80, 221, 208, 160, 160, 2, this.map);
    this.sound['smoke'].play();
    setTimeout(() => {
      this.setTrap(this.pig.trapIndex, pos_num_x);
      this.smoke = null;      
      this.pig.animate();
     }, 1000);
  }
  this.smoke.animate(); 
}

Line.prototype.hitWolf = function (x, y) {
  for(let i = 0; i < this.wolfs.length; i++){
    if(this.wolfs[i].isHit(x, y)){
      this.wolfs[i].hit();
      if(!this.wolfs[i].hp){
        this.killWolf(i);
      }
      else
        this.sound['tap'].play();
      return;
    }
  }
}

Line.prototype.setTrap = function (type, pos_num_x, pos_num_y) {
  switch(type){
    case 0:   
      this.traps.push(
        new Trap(this.imgs['trap'], pos_num_x, this.index, -35, -10, 99, 98, 79, 78, 1, this.map, 3, this.sound['wolf_trap']));
      break;
    case 1:
      this.traps.push(
        new Trap(this.imgs['Rake'], pos_num_x, this.index, -85, -90, 193, 200, 135, 145, 1, this.map, 3, this.sound['rake_trap']));
      break;
  }
}

Line.prototype.trapKillWolf = function (trap) {
  this.killWolf(this.wolfs.indexOf(trap.wolf));
  this.traps.splice(this.traps.indexOf(trap), 1);
}

Line.prototype.wolfTrapped = function (wolf, trap) {
  wolf.isWolfInTrap = true;
  trap.state = true;
  trap.wolf = wolf; 
  trap.sound.play();
}

Line.prototype.pigTrapped = function () {
  for(let i = 0; i < this.wolfs.length; i++){
    if(this.pig.isTrapped(this.wolfs[i])){
      this.wolfKillPig(this.wolfs[i])
      return true;
    }
  }
  return false;  
}

Line.prototype.wolfKillPig = function (wolf) {
  this.pig.killPig();
  this.sound['pig_death'].play();
  this.killWolf(this.wolfs.indexOf(wolf));   
}

Line.prototype.isWolfTrapped = function (wolf) {
  if(!wolf.isWolfInTrap){
  	for (let i = 0; i < this.traps.length; i++)
  	  if(wolf.isTrapped(this.traps[i]))
  	    return i; 
  } 
  return -1;
}

Line.prototype.killWolf = function (index) {
  this.sound['wolf_death'].play();
  this.score.addScore(1);
  this.wolfs.splice(index, 1);
}

Line.prototype.isPlaceEmpty = function(pos_num_x){
  for(let i = 0; i < this.traps.length; i++){
    if(this.traps[i].default_pos_num_x === pos_num_x)
      return false;
  }
  return true;
}

export default Line;