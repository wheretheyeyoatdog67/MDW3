function createWoodlandsBiome(){
  let randomX = random(3,13);
  let randomY = random(3,13);
  let hasLake = floor(random(0,2))
  for (var i = 0; i < 900/50; i++) {
    for (var j = 0; j < 700/50; j++) {
      let rand = random(0,100);

      if(rand < 50) map.mapTiles[i][j] = grass
      else if (rand >= 50) map.mapTiles[i][j] = grass2
      if (dist(i,j,randomX,randomY)<=3 && hasLake == 1)map.mapTiles[i][j] = sand1;
      if (dist(i,j,randomX,randomY)<=2+floor(random(-1,1))&& hasLake == 1)map.mapTiles[i][j] = water1;
      if(map.mapTiles[i][j]!=water1 && map.foreGround[i][j][0]!= transparent && map.midGround[i][j][0]!= transparent){
        if(rand < 20&& map.mapTiles[i][j]!=sand1) map.foreGround[i][j][0] = tree;
        else if (rand < 30&& map.mapTiles[i][j]!=sand1) map.foreGround[i][j][0] = tree2;
        else if (rand < 35&& map.mapTiles[i][j]!=sand1) map.foreGround[i][j][0] = rock;
        else if (rand < 40&& map.mapTiles[i][j]!=sand1) map.foreGround[i][j][0] = rock2;
        else if (rand < 45&& map.mapTiles[i][j]!=sand1) map.foreGround[i][j][0] = berrybush;
        else if (rand < 60 && map.mapTiles[i][j]!=sand1) map.midGround[i][j][0] = grassMid;
        if (rand > 60 && map.mapTiles[i][j]==sand1) map.midGround[i][j][0] =reeds;
        if (rand > 99 && map.mapTiles[i][j]!=sand1) map.midGround[i][j][0] =mush;
          if( i<17 && j < 13&&map.foreGround[i+1][j][0] == undefined && map.foreGround[i+1][j+1][0] == undefined &&map.foreGround[i][j+1][0] == undefined){
            if(rand > 95) {

              map.foreGround[i][j][0] = tree5
              map.foreGround[i+1][j][0] = transparent
              map.midGround[i][j+1][0] = transparent
              map.midGround[i+1][j+1][0] = transparent


            }
          }

      }


    }
  }
}


// for (var x = 0; x < width; x+=10) {
// 		for (var y = 0; y < height; y+=10) {
// 			var c = 255 * noise(0.01 * x, 0.01 * y);
// 			fill(c);
// 			rect(x, y, 10, 10);
// 		}
//   	}
