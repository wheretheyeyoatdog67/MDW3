class map{
  constructor(){
    this.mapTiles;
    this.midGround;
    this.foreGround;
    this.groundItem;
    this.twobytwoArr=[];
    this.time=50;
    this.timeDir = 1;
    this.lightArr = [];
    this.campfireArr = [];
    this.demonArr = [];
    this.turbineArr = [];
    this.turbineAnimation = [turbine1,turbine2,turbine3];
    this.turbineDir = 1;
    this.turbineAnFrame = 1
    this.wireArr = [];
    this.lampArr = [];
    this.windVal = 5;
    this.prevX = 10;
    this.prevY = 10;
    this.wirePlacedUpdate = false;
}
  drawMap(){
    this.mapDayNight()

    for (var i = 0; i < 900/50; i++) {
      for (var j = 0; j < 700/50; j++) {
        player.torchLight(i,j);
        this.campfireTorchLight(i,j);
        if(this.midGround[i][j][0]== lampOn){
          this.lampTorchLight(i,j);
        }
        if(this.wireArr[i][j][0]!=undefined){

          this.wireArr[i][j][0].checkConnectivity();

          this.wireArr[i][j][0].update();

        }
        if(this.lampArr[i][j][0]!=undefined){
          this.lampArr[i][j][0].update();
        }
        imageMode(CORNER)
        //if(!player.isInCabin){
          strokeWeight(1)
          rect(50*i,50*j,50,50)
        image(this.mapTiles[i][j],i*50,j*50);
        if(this.midGround[i][j][0]!=undefined){
        if(this.midGround[i][j][0] == lampOn||this.midGround[i][j][0]==lampOff){
          this.twobytwoArr.push([i,j,this.midGround[i][j][0]])
        }else image(this.midGround[i][j][0],i*50,j*50)}
        if(this.groundItem[i][j][0]!=undefined) image(this.groundItem[i][j][0],i*50+10,j*50+10)
        if(this.foreGround[i][j][0]!=undefined)
        {
          if(this.foreGround[i][j][0]==cabin ||this.foreGround[i][j][0]==tree6 ||this.foreGround[i][j][0]==tree5|| this.foreGround[i][j][0]==furnaceOff||this.foreGround[i][j][0]==furnace){
            this.twobytwoArr.push([i,j,this.foreGround[i][j][0]])
          }else if(this.foreGround[i][j][0]==turbine1||this.foreGround[i][j][0]==turbine2||this.foreGround[i][j][0]==turbine3){
            this.twobytwoArr.push([i,j,this.foreGround[i][j][0]])
          }
          else image(this.foreGround[i][j][0],i*50,j*50)

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
  windAlter(){
    if(gameClock%(floor(random(200,250)) == 0)){
      this.windVal = floor(random(1,30))
    }
  }

  animateTurbine(){
    if(gameClock%this.windVal == 0){
      this.turbineAnFrame+=1
      if(this.turbineAnFrame==3) {
        this.turbineAnFrame = 0;

      }

    }
    for (var i = 0; i < this.turbineArr.length; i++) {
      this.foreGround[this.turbineArr[i][0]][this.turbineArr[i][1]][0]=this.turbineAnimation[this.turbineAnFrame]
    }
  }


  darken(){
    if(this.time < 40){
    for (var i = 0; i < 900/50; i++) {
      for (var j = 0; j < 700/50; j++) {
          noStroke();
          if(this.lightArr[i][j]!=1) fill(0,0,0,255-this.time*7)
          else fill(200,200,0,random(25,45));
          rect(i*50,j*50,50,50)
          this.lightArr[i][j] = 0;
      }
    }
  }

  }
  createMap(){
    this.groundItem = []
    this.mapTiles = []
    this.midGround = []
    this.foreGround = []
    this.lightArr = [];
    this.demonArr = [];
    this.wireArr = [];
    this.lampArr = [];
    this.turbineArr =[]
    for (var i = 0; i < 18; i++) {
      this.groundItem[i] = []
      this.mapTiles[i] = []
      this.midGround[i] = []
      this.foreGround[i] = []
      this.lightArr[i] = [];
      this.demonArr[i] = [];
      this.wireArr[i] = [];
      this.lampArr[i] = [];

    }
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 14; j++) {
      this.groundItem[i][j] = []
      this.mapTiles[i][j] = []
      this.midGround[i][j] = []
      this.foreGround[i][j] = []
      this.lightArr[i][j] = [];
      this.demonArr[i][j] = [];
      this.wireArr[i][j] = [];
      this.lampArr[i][j] = [];

    }
  }
  }

  devDestroyForGround(){
    this.foreGround = [];
    for (var i = 0; i < 18; i++) {
      this.foreGround[i] = []
    }
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 14; j++) {
          this.foreGround[i][j] = []
      }}

  }
  fillMap(){
    createWoodlandsBiome();
  }
  mapCheckNewRegion(){
    if(player.x < 0){
      player.x = 17;
      mapGroup.prevX = mapGroup.curMapX
      mapGroup.prevY = mapGroup.curMapY
      mapGroup.curMapX  -=1;
      mapGroup.addPrevMapGroup();
      mapGroup.addToMapGroup(-1)
    }
    else if(player.x > 17){
      player.x = 0;
      mapGroup.prevX = mapGroup.curMapX
      mapGroup.prevY = mapGroup.curMapY
      mapGroup.curMapX +=1;
      mapGroup.addPrevMapGroup();
      mapGroup.addToMapGroup(1)

    }
    else if(player.y < 0){
      player.y = 13;
      mapGroup.prevY = mapGroup.curMapY
      mapGroup.prevX = mapGroup.curMapX
      mapGroup.curMapY -=1;
      mapGroup.addPrevMapGroup();
      mapGroup.addToMapGroup(-2)

    }
    else if(player.y > 13){
      player.y = 0;
      mapGroup.prevY = mapGroup.curMapY
      mapGroup.prevX = mapGroup.curMapX
      mapGroup.curMapY  +=1;
      mapGroup.addPrevMapGroup();
      mapGroup.addToMapGroup(2)
    }
  }
  mapStartUp(){
    this.createMap();
    this.fillMap();
    //this.mapCheckNewRegion();
    player.teleport(10,10,500)
    //player.x = 10;
    //player.y = 10;
  }
  mapDayNight(){
    if(gameClock%50 == 0){
      if(this.time == 0){
        for (var i = 0; i < 5; i++) {
        demArr.push(new enemy())
      }
      }
      if(this.time == 100 || this.time == 0){
        this.timeDir*=-1;
      }
      this.time += 1*this.timeDir
    }
  }
  campfireTorchLight(i,j){
    if(this.foreGround[i][j][0] == campfire){
        this.lightArr[i][j]=1;


        this.lightArr[i][j+1]=1;
        this.lightArr[i][j-1]=1;
        if(i>0){
        this.lightArr[i-1][j]=1;
        this.lightArr[i-1][j+1]=1;
        this.lightArr[i-1][j-1]=1;}
        if(i<16){
        this.lightArr[i+1][j]=1;
        this.lightArr[i+1][j-1]=1;
        this.lightArr[i+1][j+1]=1;
      }
        }
    }

    lampTorchLight(i,j){
      if(this.midGround[i][j][0] == lampOn){
        for (var l = 0; l < 3; l++) {
          for (var m = 0; m < 3; m++) {
            if(i+l <=17)this.lightArr[i+l][j+m]=1;
            if(i-l >=0)this.lightArr[i-l][j-m]=1;
            if(i+l <=17)this.lightArr[i+l][j-m]=1;
            if(i-l>=0)this.lightArr[i-l][j+m]=1;

          }
        }
          // this.lightArr[i][j]=1;
          // this.lightArr[i+1][j]=1;
          // this.lightArr[i-1][j]=1;
          // this.lightArr[i][j+1]=1;
          // this.lightArr[i][j-1]=1;
          // this.lightArr[i-1][j+1]=1;
          // this.lightArr[i+1][j-1]=1;
          // this.lightArr[i-1][j-1]=1;
          // this.lightArr[i+1][j+1]=1;
          // this.lightArr[i-2][j]=1;
          // this.lightArr[i+2][j]=1;
          // this.lightArr[i][j-2]=1;
          // this.lightArr[i][j+2]=1;
          //
          // this.lightArr[i-2][j-2]=1;
          // this.lightArr[i+2][j-2]=1;
          // this.lightArr[i-2][j-2]=1;
          // this.lightArr[i+2][j+2]=1;
          // this.lightArr[i-2][j+2]=1;
          //
          // this.lightArr[i-2][j-1]=1;
          // this.lightArr[i+2][j-1]=1;
          // this.lightArr[i-2][j+1]=1;
          // this.lightArr[i+2][j+1]=1;
          // this.lightArr[i-2][j+2]=1;
          //
          // this.lightArr[i+1][j-2]=1;
          // this.lightArr[i-1][j+2]=1;
          // this.lightArr[i+1][j+2]=1;
          // this.lightArr[i-1][j-2]=1;


          }
          }








}
