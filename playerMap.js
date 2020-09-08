class pMap{
  constructor(){
    this.isMap = false;
  }
  drawPMap(){
    if(this.isMap == true){
      fill(210,180,140)
      rect(0,0,900,700);
      for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 18; j++) {
          noFill()
          stroke(255);
          strokeWeight(1)
          //rect(i*52,j*46,50,50)
          let temp = mapGroup.mapGroups[i][j][0]
          if(temp != undefined){
            for (var k = 0; k < 18; k++) {
              for (var l = 0; l < 14; l++) {
              if(temp[k][l] == grass|| temp[k][l] == grass2)image(grassSM,54*i+3*k,41*j+3*l)
              if(temp[k][l] == water1)image(water1SM,54*i+3*k,41*j+3*l)
              }
            }
          }
        }
      }
      noFill();
    }
  }
}
