import "./css/style.css";
import Game from './Game.js';
import Lib from './Lib.js';

let lib;
let game;
let startPanel, startButton;
let scenes = {};
let screen = {};
let current_scene = 'lib';

window.onload = function() {
  startButton = document.getElementsByClassName('block-start__button');
  startPanel = document.getElementsByClassName('block-start');
  screen.canvas = document.getElementById('gameCanvas');
  screen.imgs = {};

  scenes['lib'] = new Lib(screen);
  scenes['game'] = new Game(screen);

  startButton[0].addEventListener('click', ()=> {
    startPanel[0].classList.add("block-start_hidden");
    current_scene = 'game';
    draw();
  }, false);

  draw();
}


function draw() {
  if(current_scene === "menu")
    startPanel[0].classList.remove("block-start_hidden");
  else{
    current_scene = scenes[current_scene].render();
    requestAnimationFrame(draw);
  }
}

