import Scene from './Scene.js';
import Sound from './Sound.js';

function Lib(screen){
  Scene.apply(this, arguments);
  this.assets = [
    {name: 'menu_bg', path: './img/960x540.png'},
    {name: 'game_over', path: './img/game_over.png'},
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

  this.assetsSound = [
    {name: 'tap', path: './sound/tap.ogg', volume: 1},
    {name: 'main_theme', path: './sound/main_theme.ogg', volume: 1},
    {name: 'level_1', path: './sound/level_1.ogg', volume: 0.5},
    {name: 'pig_death', path: './sound/pig_death.ogg', volume: 1},
    {name: 'active_pig', path: './sound/active_pig.ogg', volume: 1},
    {name: 'wolf_death', path: './sound/wolf_death.ogg', volume: 1},
    {name: 'wave_start', path: './sound/wave_start.ogg', volume: 0.8},
    {name: 'rake_trap', path: './sound/rake_trap.ogg', volume: 1},
    {name: 'wolf_trap', path: './sound/wolf_trap.ogg', volume: 1},
    {name: 'smoke', path: './sound/smoke.ogg', volume: 1}
  ]

  this.screen = screen;
  this.total = this.assets.length + this.assetsSound.length;
  this.totalImg = this.assets.length;
  this.totalSound = this.assetsSound.length;
  this.loaded = 0;
  this.status = "loading";
  this.loaded_at = 0;

  for(let i = 0; i < this.totalImg; i++){
  	let img = new Image();
  	img.src = this.assets[i].path;
    img.onload = ()=> {
      this.loaded++;
    };
  	screen.imgs[this.assets[i].name] = img;
  }

  for(let i = 0; i < this.totalSound; i++){
    let audio = new Sound(this.assetsSound[i].path, this.assetsSound[i].volume);
    audio.sound.oncanplay = ()=> {
      this.loaded++;
    };
    screen.sound[this.assetsSound[i].name] = audio;
  }  
}

Lib.prototype.render = function () {
  if(this.status == "loading") {
    if(this.loaded == this.total) {
      this.status = "loaded";
    }

    this.ctx.drawImage(this.imgs['menu_bg'], 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font="22px Georgia";
    this.ctx.fillText("Loading " + this.loaded + '/' + this.total, 415,345);
    return "lib";
  }

  if(this.status == "loaded") {
    //this.screen.sound['main_theme'].play();
    return "menu";
  }
}

export default Lib;