import Scene from './Scene.js';

function GameOver(screen){
  Scene.apply(this, arguments);
}

GameOver.prototype.render = function () {
  this.ctx.drawImage(this.imgs['game_over'], 0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillStyle = '#ffffff';
  this.ctx.strokeStyle = 'black';
  this.ctx.font = "bold 25px Verdana";
  this.ctx.fillText("KILLS: " + this.score.getScore(), 415, 345);
  this.ctx.strokeText("KILLS: " + this.score.getScore(), 415, 345);
  return "game_over_menu";
}

export default GameOver;