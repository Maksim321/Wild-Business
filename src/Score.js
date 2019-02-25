function Score(){
  this.score = 0;
}

Score.prototype.getScore = function() {
  return this.score;
}

Score.prototype.clearScore = function() {
  this.score = 0;
}

Score.prototype.addScore = function(score) {
  this.score += score;
}

export default Score;