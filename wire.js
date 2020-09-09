

class wire{
  constructor(i,j){
    this.x = i;
    this.y = j;
    this.isOn = false;
    this.wirePic = [wireOff,wireOn,wireOffU,wireOnU]
    this.above = false;

    this.needUpdate = false;

    if(map.foreGround[this.x-1][this.y-1][0] == turbine1 || map.foreGround[this.x-1][this.y-1][0] == turbine2 || map.foreGround[this.x-1][this.y-1][0] == turbine3){
      this.isOn = true
      this.needUpdate = true;
    }
    if(map.foreGround[this.x+1][this.y-1][0] == turbine1 || map.foreGround[this.x+1][this.y-1][0] == turbine2 || map.foreGround[this.x+1][this.y-1][0] == turbine3){
      this.isOn = true;
      this.needUpdate = true;
    }


    if(this.x!= 0&&map.wireArr[this.x-1][this.y][0]!=undefined){
      if(map.wireArr[this.x-1][this.y][0].isOn == true){
        this.isOn = true;

        this.needUpdate = true;
      }
    }
    if(this.x!= 17 &&map.wireArr[this.x+1][this.y][0]!=undefined){
      if(map.wireArr[this.x+1][this.y][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;
      }
    }
    if(this.y!= 0 && map.wireArr[this.x][this.y-1][0]!=undefined){
      //this.above = true;
      if(map.wireArr[this.x][this.y-1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;

      }
    }
    if(this.y!= 13 &&map.wireArr[this.x][this.y+1][0]!=undefined){
      //this.above = true;
      if(map.wireArr[this.x][this.y+1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;

      }
    }



    if(this.x!= 0&& map.lampArr[this.x-1][this.y][0]!=undefined){
      if(map.lampArr[this.x-1][this.y][0].isOn == true){
        this.isOn = true;

        this.needUpdate = true;
      }
    }
    if(this.x!= 17 &&map.lampArr[this.x+1][this.y][0]!=undefined){
      if(map.lampArr[this.x+1][this.y][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;
      }
    }
    if(this.y!= 0 && map.lampArr[this.x][this.y-1][0]!=undefined){
      //this.above = true;
      if(map.lampArr[this.x][this.y-1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;

      }
    }
    if(this.y!= 13 &&map.lampArr[this.x][this.y+1][0]!=undefined){
      //this.above = true;
      if(map.lampArr[this.x][this.y+1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;

      }
    }
  }







  //!!!!









  update(){
    if(this.needUpdate == true){
    if(this.isOn == true) {
      if(this.above == true) map.midGround[this.x][this.y][0] = this.wirePic[3]
      else map.midGround[this.x][this.y][0] = this.wirePic[1]
    }
    if(this.isOn == false){
      if(this.above == true)map.midGround[this.x][this.y][0] = this.wirePic[2]
      else map.midGround[this.x][this.y][0] = this.wirePic[0]
    }

  }
  }
}
