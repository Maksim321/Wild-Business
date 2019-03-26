function Scene(screen){
  this.canvas = screen.canvas;
  this.ctx = this.canvas.getContext('2d');
  this.imgs = screen.imgs;
  this.sound = screen.sound;
  this.score = screen.score;
}

export default Scene;