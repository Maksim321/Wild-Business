function Controls(){
  this.iconsContainer = document.getElementsByClassName("block-icons");
  this.imgButtons = [
    document.getElementById('trapIcon'),
    document.getElementById('rakeIcon')
  ];

  this.inputsButtons = [
    document.getElementById('trapInpt'),
    document.getElementById('rakeInpt')    
  ];

  this.isChecked = null;

  this.inputsButtons.forEach((input)=>
    input.addEventListener('click', this.checkTrap.bind(this), false)
  );
}

Controls.prototype.setImg = function(index, state){
  switch(index){
    case 0:
      this.imgButtons[index].src = `./img/trap_icons/trap_${state}.png`;
      break;
    case 1:
      this.imgButtons[index].src = `./img/rake_icons/rake_${state}.png`;
      break;
  }
}

Controls.prototype.setIconState = function(index, state, status, setCheck){
  this.inputsButtons[index].checked = state;
  this.setImg(index, status);
  this.isChecked = setCheck; 
}

Controls.prototype.setIconActive = function(index){
  this.setIconState(index, true, 'active', index);
}

Controls.prototype.setIconPassive = function(index){
  this.setIconState(index, false, 'passive', null);
}

Controls.prototype.setIconUnavailable = function(index){
  this.setIconState(index, false, 'unavailable', null);
}

Controls.prototype.checkTrap = function(e){
  if(this.isChecked !== null){
    if(this.inputsButtons[this.isChecked] !== e.target){
      this.setIconPassive(this.isChecked);
      this.setIconActive(parseInt(e.target.value));
    }
    else{
      this.setIconPassive(this.isChecked);
    }
  }
  else{
    this.setIconActive(parseInt(e.target.value));
  }
}

export default Controls;
