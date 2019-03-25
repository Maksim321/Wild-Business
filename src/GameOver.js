 import Scene from './Scene.js';

function GameOver(screen, score){
  Scene.apply(this, arguments);
  this.score = score; 
}

GameOver.prototype.render = function () {
  this.ctx.drawImage(this.imgs['game_over'], 0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillStyle = '#ffffff';
  this.ctx.font="22px Georgia";
  this.ctx.fillText("KILLS: " + this.score.getScore(), 415, 345);
  return "game_over";
}

export default GameOver;