import "./css/style.css";
import Game from './Game.js';
import Lib from './Lib.js';
import GameOver from './GameOver.js';
import Score from './Score.js';

let lib;
let game;
let startPanel, startButton, trapsPanel;
let scenes = {};
let current_scene = 'lib';

window.onload = function() {
  startButton = document.getElementsByClassName('block-start__button');
  startPanel = document.getElementsByClassName('block-start');
  trapsPanel = document.getElementsByClassName('block-icons');
  screen.canvas = document.getElementById('gameCanvas');
  screen.imgs = {};
  screen.sound = {};
  screen.score = new Score();

  scenes['lib'] = new Lib(screen);
  scenes['game_over'] = new GameOver(screen);

  startButton[0].addEventListener('click', ()=> {
    startPanel[0].classList.add("block_hidden");
    trapsPanel[0].classList.remove("block_hidden");
    screen.score.clearScore();
    scenes['game'] = new Game(screen);
    screen.sound['level_1'].play();
    setTimeout(()=>screen.sound['wave_start'].play(), 1000);
    current_scene = 'game';
    draw();
  }, false);

  draw();
}

function restart(){
  scenes['game'] = new Game(screen); 
  current_scene = "menu";
}


function draw() {
  if(current_scene === "menu" || current_scene === "game_over_menu"){
    startPanel[0].classList.remove("block_hidden");
    trapsPanel[0].classList.add("block_hidden");
  }
  else{
    current_scene = scenes[current_scene].render();
    requestAnimationFrame(draw);
  }
}

