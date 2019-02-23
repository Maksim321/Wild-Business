import Scene from './Scene.js';

function Lib(screen){
  Scene.apply(this, arguments);
  this.assets = [
    {name: 'menu_bg', path: './img/960x540.png'},
    {name: 'background', path: './img/background.png'},
    {name: 'houses', path: './img/Houses.png'},
    {name: 'wolf_1', path: './img/AnimWolf_1.png'},
    {name: 'wolf_2', path: './img/AnimWolf_2.png'},
    {name: 'pigLeft', path: './img/AnimPigLeft.png'},
    {name: 'pigRight', path: './img/AnimPigRight.png'},
    {name: 'pigTwoLeft', path: './img/AnimPigTwoLeft.png'},
    {name: 'pigTwoRight', path: './img/AnimPigTwoRight.png'},
    {name: 'trap', path: './img/Trap.png'},
    {name: 'Rake', path: './img/RakeTrap.png'},
    {name: 'smoke', path: './img/Smoke.png'}
  ]

  this.total = this.assets.length;
  this.loaded = 0;
  this.status = "loading";
  this.loaded_at = 0;
  let self = this;

  for(let i = 0; i < this.total; i++){
  	let img = new Image();
  	img.src = this.assets[i].path;
    img.onload = function() {
      self.loaded++;
    };
  	screen.imgs[this.assets[i].name] = img;
  }  
}

Lib.prototype.render = function () {
  if(this.status == "loading") {
    if(this.loaded == this.total) {
      this.status = "loaded";
    }
    //this.ctx.fillStyle = '#000000';
    //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height );
    this.ctx.drawImage(this.imgs['menu_bg'], 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font="22px Georgia";
    this.ctx.fillText("Loading " + this.loaded + '/' + this.total, 415,345);
    return "lib";
  }

  if(this.status == "loaded") {
      return "menu";
  }
}

export default Lib;