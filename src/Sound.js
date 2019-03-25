function Sound(src, volume){
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  this.sound.volume = volume;
  document.body.appendChild(this.sound);
}

Sound.prototype.play = function () {
  if (this.sound.paused) {
    this.sound.play();
  }else{
    this.sound.currentTime = 0;
  }
};

Sound.prototype.stop = function () {
  this.sound.pause();
};

export default Sound;