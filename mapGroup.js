class mapGroup{
  constructor(){
  this.mapGroups;
  this.curMapX = 10;
  this.curMapY = 10;
  this.prevX =10;
  this.prevY= 10;
  this.createMap();
  }

  createMap(){
    this.mapGroups = []
    for (var i = 0; i < 18; i++) {
      this.mapGroups[i] = []
    }
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 18; j++) {
      this.mapGroups[i][j] = []
    }
  }
  }
  addToMapGroup(l){

      if(this.mapGroups[this.curMapX][this.curMapY][0]==undefined){

          this.mapGroups[this.prevX][this.prevY][0] = map.mapTiles
          this.mapGroups[this.prevX][this.prevY][1] = map.foreGround




        map.createMap();
        map.fillMap();
      }
      else this.reCallMapTiles()

  }
  reCallMapTiles(){
    map.mapTiles = [];
    map.mapTiles = this.mapGroups[this.curMapX][this.curMapY][0];
    map.foreGround = this.mapGroups[this.curMapX][this.curMapY][1]
  }

}
