class map{
  constructor(){
    this.mapTiles;
    this.midGround;
    this.foreGround;
    this.groundItem;
    this.twobytwoArr=[];
}
  drawMap(){
    for (var i = 0; i < 900/50; i++) {
      for (var j = 0; j < 700/50; j++) {

        imageMode(CORNER)

        //if(!player.isInCabin){
          strokeWeight(1)
          rect(50*i,50*j,50,50)
        image(this.mapTiles[i][j],i*50,j*50);
        if(this.midGround[i][j][0]!=undefined) image(this.midGround[i][j][0],i*50,j*50)
        if(this.groundItem[i][j][0]!=undefined) image(this.groundItem[i][j][0],i*50+10,j*50+10)
        if(this.foreGround[i][j][0]!=undefined)
        {
          if(this.foreGround[i][j][0]==cabin ||this.foreGround[i][j][0]==tree6 ||this.foreGround[i][j][0]==tree5|| this.foreGround[i][j][0]==furnaceOff||this.foreGround[i][j][0]==furnace){
            this.twobytwoArr.push([i,j,this.foreGround[i][j][0]])
          }else image(this.foreGround[i][j][0],i*50,j*50)
        }

        stroke(70,40,70);
        strokeWeight(10)
        noFill()
        rect(0,0,900,700)
        imageMode(CENTER)
        strokeWeight(5)
      }
    }
    for (var i = 0; i < this.twobytwoArr.length; i++) {
      imageMode(CORNER)
      image(this.twobytwoArr[i][2],this.twobytwoArr[i][0]*50,this.twobytwoArr[i][1]*50)
    }
    imageMode(CENTER)
    this.twobytwoArr=[];
    //DRAW INVENTORY
    for (var i = 0; i < 10; i++) {
      if(i == inv.curItem)fill(255,255,0)
      else fill(210,180,140)
      rect(50*4+i*50,700,50,50)
    }
  }

  createMap(){
    this.groundItem = []
    this.mapTiles = []
    this.midGround = []
    this.foreGround = []
    for (var i = 0; i < 18; i++) {
      this.groundItem[i] = []
      this.mapTiles[i] = []
      this.midGround[i] = []
      this.foreGround[i] = []
    }
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 14; j++) {
      this.groundItem[i][j] = []
      this.mapTiles[i][j] = []
      this.midGround[i][j] = []
      this.foreGround[i][j] = []
    }
  }
  }
  fillMap(){
    createWoodlandsBiome();
  }
  mapCheckNewRegion(){
    if(player.x < 0){
      player.x = 17;
      mapGroup.curMapX  -=1;
      mapGroup.addToMapGroup()
    }
    else if(player.x > 17){
      player.x = 0;
      mapGroup.curMapX +=1;
      mapGroup.addToMapGroup()

    }
    else if(player.y < 0){
      player.y = 13;
      mapGroup.curMapY -=1;
      mapGroup.addToMapGroup()

    }
    else if(player.y > 13){
      player.y = 0;
      mapGroup.curMapY  +=1;
      mapGroup.addToMapGroup()
    }
  }
  mapStartUp(){
    this.createMap();
    this.fillMap();
    this.mapCheckNewRegion();
    player.x = 10;
    player.y = 10;
  }






}
