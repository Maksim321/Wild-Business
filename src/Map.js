function Map(){
  this.borders_cells_x = [0, 135, 270, 405, 540, 675, 810, 945];
  this.borders_cells_y = [135, 270, 405, 540];
  this.positions_num_x = [68, 203, 338, 473, 608, 743, 878];
  this.positions_num_y = [ 203, 338, 473 ]; 
}

Map.prototype.find_cell = function(x, y){
  for(let i = 1; i < this.borders_cells_y.length; i++){
    if(y < this.borders_cells_y[i] && y > this.borders_cells_y[0]){
      for(let j = 1; j < this.borders_cells_x.length; j++){
        if(x < this.borders_cells_x[j] && x > this.borders_cells_x[0]){
          return {pos_num_x: j-1, pos_num_y: i-1};
        }
      }
    }
  }
  return null;
}

Map.prototype.distance_to_cell = function(num_cell, unit_pos_x){
  return Math.abs(this.positions_num_x[num_cell] - unit_pos_x);
}

export default Map;