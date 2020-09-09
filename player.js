class player {
  constructor(x,y){
    this.x = -1;
    this.y = y;
    this.curAnimation = pf1;
    this.lastDir = 3;
    this.teleArr = [];
    this.isInCabin = false;
    this.houseLoc = [];
    this.health = 100;
    this.mana =100;
    this.hunger = 100;
    this.immune = false;
    this.immuneTimer = 10;
    this.isDead = false;
  }
  animate(){
    if(gameClock%20 == 0){
      switch(this.lastDir){
        case 1:
          if(this.curAnimation != pr2){
            this.curAnimation = pr2;
          }else if (this.curAnimation != pr1){
            this.curAnimation = pr1;
          }
        break;
        case 2:
          if(this.curAnimation != pl2){
            this.curAnimation = pl2;
          }else if (this.curAnimation != pl1){
            this.curAnimation = pl1;
          }
        break;
        case 3:
          if(this.curAnimation != pf2){
            this.curAnimation = pf2;
          }else if (this.curAnimation != pf1){
            this.curAnimation = pf1;
          }
        break;
        case 4:
          if(this.curAnimation != pu2){
            this.curAnimation = pu2;
          }else if (this.curAnimation != pu1){
            this.curAnimation = pu1;
          }
        break;
        default:



      }




    }
  }

  draw(){

    image(this.curAnimation,(this.x*50)+25,(this.y*50)+25)
  }
  playerDead(){
    if(this.health < 0){
      this.isDead = true;
      this.health = 0;
      fill(60,60,70,150);
      rect(0,0,900,700);
      noFill();
      image(death,480,300)
    }
  }
  hungerDrain(){
    if(gameClock%200 == 0){
      if(this.hunger>100){
        this.hunger = 100;
      }
      this.hunger-=1;
      if(this.hunger<=0){
        //this.health -= 10;
      }
    }
  }
  manaRise(){
    if(gameClock%100 == 0){
      if(this.mana>=100){
        this.mana = 100;
      }else this.mana+=1;
    }
  }
  immuneClock(){
    if(this.immuneTimer < 0) this.immune = false
    if(gameClock%5 == 0){
      this.immuneTimer -=1;
    }
  }
  update(){
    this.animate();
    this.draw();
    this.fireProjectilesNrender();
    this.drawTele();
    this.hungerDrain()
    this.manaRise();
    this.immuneClock();
    this.playerDead()
    if(this.isInCabin == true){
      this.playerLeaveHouse()
    }
  }
  torchLight(i,j){
    if(inv.invArr[inv.curItem] == torch){
      if(dist(i,j,this.x,this.y)<4){
        map.lightArr[i][j]=1;
      }

    }
  }
  collision(xCoord,yCoord){
    if(this.isInCabin==false){
    if(xCoord==-1 && this.x == 0) return true
    else if(xCoord==1 && this.x == 17) return true
    else if(yCoord==-1 && this.y == 0) return true
    else if(yCoord==1 && this.y == 13) return true

    if(xCoord==1) {if(map.foreGround[this.x+1][this.y][0] == undefined) return true
    else return false;}
    else if(xCoord==-1) if(map.foreGround[this.x-1][this.y][0] == undefined) return true
    else return false;
    else if(yCoord==1) if(map.foreGround[this.x][this.y+1][0] == undefined) return true
    else return false;
    else if(yCoord==-1) if(map.foreGround[this.x][this.y-1][0] == undefined) return true
    else return false;
  }
  return true;
  }

  teleport(x,y,time){
  this.teleArr.push([x,y,time]);
  this.x = x;
  this.y = y;
}
drawTele(){
  for (let i = 0;i<this.teleArr.length;i++){
    if(this.teleArr[i][2]<1){
      this.teleArr.splice(i,1)
      return 0;
    }
    else
    {
      if(gameClock%1   == 0){
        this.teleArr[i][2]-=10;
      }
      noFill();

      let t1 = this.teleArr[i][0];
      let t2 = this.teleArr[i][1];
      let t3 = this.teleArr[i][2]/2;

      stroke(70+t3*2,70,255);
      ellipse(t1*50+25,t2*50+25,100-t3,100-t3);
      strokeWeight(3);
      ellipse(t1*50+25,t2*50+25,120-t3,60-t3)
      ellipse(t1*50+25,t2*50+25,60-t3,120-t3)
      ellipse(t1*50+25,t2*50+25,60-t3,60-t3);
    }


  }
}
  playerLeaveHouse(){
    if(this.x == 10 || 11){
      if(this.y == 12){
        this.isInCabin = false;
        this.x = this.houseLoc[0]
        this.y = this.houseLoc[1]
      }

    }
  }

  pickUpGroundItems(quantity){
    if(inv.backPackArr.length!=0){
      if(map.groundItem[this.x][this.y][0]!=undefined){
        for (var i = 0; i < inv.invArr.length; i++) {
          if(inv.invArr[i] == map.groundItem[this.x][this.y][0]){


            inv.itemCount[i]+= quantity;
            map.groundItem[this.x][this.y][0] = undefined;
            return 0;
          }
        }
        for (var i = 0; i < inv.backPackArr.length; i++) {
          if(inv.backPackArr[i] == map.groundItem[this.x][this.y][0]){

          inv.backPackArrItemCount[i]+= quantity;
          map.groundItem[this.x][this.y][0] = undefined;
          return 0;
        }
      }
      inv.backPackArr.push(map.groundItem[this.x][this.y][0])
      inv.backPackArrItemCount.push(1)
      map.groundItem[this.x][this.y][0] = undefined;
      return 0;
      }


    }
    if(map.groundItem[this.x][this.y][0]!=undefined){
      for (var i = 0; i < inv.invArr.length; i++) {

        if(inv.invArr[i] == map.groundItem[this.x][this.y][0]){

          console.log(i)
          inv.itemCount[i]+= quantity;
          map.groundItem[this.x][this.y][0] = undefined;
          return 0;
        }
      }
      if(inv.invArr.length!=10){
      inv.invArr.push(map.groundItem[this.x][this.y][0])
      inv.itemCount.push(quantity)
      map.groundItem[this.x][this.y][0] = undefined;
    }
    else {
      inv.backPackArr.push(map.groundItem[this.x][this.y][0])
      inv.backPackArrItemCount.push(quantity)
      map.groundItem[this.x][this.y][0] = undefined;
    }
    }
  }
  place2by2(i,j,type){
    if( i<17 && j < 13&&map.foreGround[i+1][j][0] == undefined && map.foreGround[i+1][j+1][0] == undefined &&map.foreGround[i][j+1][0] == undefined){

      map.foreGround[i][j][0] = type
      map.foreGround[i+1][j][0] = transparent
      if(type==furnaceOff||type==furnace){

      }else{
        map.foreGround[i][j+1][0] = transparent
        map.foreGround[i+1][j+1][0] = transparent
      }


    }
  }

  fireProjectilesNrender(){
    if(projectileArr[0]!= undefined){
    for (var i = projectileArr.length-1; i >= 0 ; i--) {
      projectileArr[i].update();
      if (projectileArr[i].removeit == true){
        projectileArr.splice(i,1);
      }
    }
  }
  }




}
