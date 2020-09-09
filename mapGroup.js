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

  addPrevMapGroup(){
    this.mapGroups[this.prevX][this.prevY][0] = map.mapTiles
    this.mapGroups[this.prevX][this.prevY][1] = map.foreGround
    this.mapGroups[this.prevX][this.prevY][2] = map.midGround
    this.mapGroups[this.prevX][this.prevY][3] = map.wireArr
    this.mapGroups[this.prevX][this.prevY][4] = map.turbineArr
    this.mapGroups[this.prevX][this.prevY][5] = map.lampArr
    this.mapGroups[this.prevX][this.prevY][6] = map.waterTiles
  }
  addToMapGroup(l){
      print('<><><><><><>');
      print('curX ' + this.curMapX);
      print('curY ' + this.curMapY);
      print('prevX ' + this.prevX);
      print('prevY ' + this.prevY);
      if(this.mapGroups[this.curMapX][this.curMapY][0]==undefined){






        map.createMap();
        map.fillMap();
      }
      else this.reCallMapTiles()

  }
  reCallMapTiles(){
    map.mapTiles = [];
    map.wireArr = [];
    map.lampArr = [];
    map.mapTiles = this.mapGroups[this.curMapX][this.curMapY][0];
    map.foreGround = this.mapGroups[this.curMapX][this.curMapY][1]
    map.midGround = this.mapGroups[this.curMapX][this.curMapY][2]
    map.wireArr = this.mapGroups[this.curMapX][this.curMapY][3]
    map.turbineArr = this.mapGroups[this.curMapX][this.curMapY][4]
    map.lampArr = this.mapGroups[this.curMapX][this.curMapY][5]
    map.waterTiles = this.mapGroups[this.curMapX][this.curMapY][6]
  }

}
