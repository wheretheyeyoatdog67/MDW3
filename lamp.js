

class lamp{
  constructor(i,j){
    this.x = i;
    this.y = j;
    this.isOn = false;
    this.lampPic = [lampOff,lampOn]
    this.needUpdate = false;
    this.checkConnectivity();

  }
  update(){
    if(this.needUpdate == true){
    if(this.isOn == true) map.midGround[this.x][this.y-1][0] = this.lampPic[1]
    else map.midGround[this.x][this.y][0] = this.wirePic[0]}
  }



  checkConnectivity(){
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
      if(map.wireArr[this.x][this.y-1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;
      }
    }
    if(this.y!= 13 &&map.wireArr[this.x][this.y+1][0]!=undefined){
      if(map.wireArr[this.x][this.y+1][0].isOn == true){
        this.isOn = true;
        this.needUpdate = true;
      }
    }
  }
}
