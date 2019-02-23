import Scene from './Scene.js';
import Wolf from './units/Wolf.js';

function Spawner(screen, map, interval){
  Scene.apply(this, arguments);

  this.map = map;
  this.interval = interval;
  this.intervalCount = interval;
}

Spawner.prototype.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Spawner.prototype.getWolf = function (type, pos_num_x, pos_num_y) {
  switch(type){
    case 0:
        return new Wolf(this.imgs['wolf_1'], pos_num_x , pos_num_y, -75, -80, 150, 180, 130, 150, 1, this.map, -1.0, 3);
      break;
    case 1:
        return new Wolf(this.imgs['wolf_2'], pos_num_x , pos_num_y, -75, -80, 150, 180, 130, 150, 1, this.map, -1.2, 3);
      break;
  }
}

Spawner.prototype.getRandomWolf = function(pos_num_x, pos_num_y) {
  if(this.intervalCount === 0){
    this.intervalCount = this.interval;
    if(this.getRandomInt(0, 2))
      return this.getWolf(this.getRandomInt(0, 2), pos_num_x, pos_num_y);
  }
  this.intervalCount--;
  return null;
}


export default Spawner;