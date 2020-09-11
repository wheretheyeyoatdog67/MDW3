function createOceanBiome(){
  let randomX = random(7,10);
  let randomY = random(5,9);

  for (var i = 0; i < 900/50; i++) {
    for (var j = 0; j < 700/50; j++) {
      let rand = random(0,100);
      if(rand < 50) {map.mapTiles[i][j] = grass}
      else if (rand >= 50) map.mapTiles[i][j] = grass2
      if (dist(i,j,randomX,randomY)<=8)map.mapTiles[i][j] = sand1;
      if (dist(i,j,randomX,randomY)<=6+floor(random(-1,1))){map.mapTiles[i][j] = water1;
        let l = random(0,50)
          if(l<7){
            map.animalArr[i][j][0] = new animal(fishR,i,j);
          }
      map.waterTiles[i][j][0] = 1;
    }
      if( i<17 && j < 13&&map.foreGround[i+1][j][0] == undefined && map.foreGround[i+1][j+1][0] == undefined &&map.foreGround[i][j+1][0] == undefined){
      if(map.mapTiles[i][j] == sand1){
      if(rand < 30){
         map.foreGround[i][j][0] = tree6
          map.foreGround[i][j][1] = 100
      }
      else if(rand<60)map.midGround[i][j][0] = reeds
    }
      if( map.mapTiles[i][j]== water1){
      if(rand < 5) map.midGround[i][j][0] = shell1
      else if(rand < 10) map.midGround[i][j][0] = shell2
      else if(rand < 15) map.midGround[i][j][0] = shell3

      else if(rand < 30) map.foreGround[i][j][0] = rock2
      //map.midGround[i][j+1][0] = transparent
    }

    if( map.mapTiles[i][j] != sand1 && map.mapTiles[i][j] != water1){
    if(rand < 30 ){
      map.foreGround[i][j][0] = rock2
      map.foreGround[i][j][1] = 100
    }
    else if(rand < 40 ) {
      map.foreGround[i][j][0] = rock
      map.foreGround[i][j][1] = 100
    }
    if(rand < 60&& rand >40) {
      map.midGround[i][j][0] = grassMid
    }

    //map.midGround[i][j+1][0] = transparent
  }










    }

    if(rand > 99.5){
      demArr.push(new enemy)
    }
  }
  }
}
