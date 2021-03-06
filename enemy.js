function demonUpdater(){
  let isAllDead = 0;
  for (var i = 0; i < demArr.length; i++) {
    if(demArr[i]!=0){
      demArr[i].update()
      isAllDead+=1;
    }
  }
  if(isAllDead == 0){
    demArr = [];
  }
}





class enemy{
  constructor(){
    this.spawnX= floor(random(0,2))
    this.spawnX= floor(random(0,2))
    this.x = 1+this.spawnX*14
    this.y = floor(random(3,14));
    this.animationFrame = 1;
    this.animationDir = 1;
    this.dir = 0; // 0 front 1 right 2 left 3 down
    this.anArrF = [df1,df2,df3]
    this.anArrR = [dr1,dr2,dr3]
    this.anArrL = [dl1,dl2,dl3]
    this.anArrU = [du1,du2,du3]
    this.deadArr = [dead1,dead2,demonDust];
    map.demonArr[this.x][this.y][0] = 1;
    this.isDead = false;
    this.deadFrame = 0;
    this.index;
    this.destroy =false;
    this.following = false;
    this.health = 100;
  }
  draw(){
    if(!this.isDead){
    if(this.dir ==0)image(this.anArrF[this.animationFrame],this.x*50+25,this.y*50+25)
    if(this.dir ==1)image(this.anArrR[this.animationFrame],this.x*50+25,this.y*50+25)
    if(this.dir ==2)image(this.anArrL[this.animationFrame],this.x*50+25,this.y*50+25)
    if(this.dir ==3)image(this.anArrU[this.animationFrame],this.x*50+25,this.y*50+25)}
    this.healthBar()



  }

  healthBar(){
    if(this.health != 100){
      strokeWeight(2)
      fill(255,0,0)
      rect(this.x*50+4,this.y*50+45,40,5)
      fill(100,255,0)
      rect(this.x*50+4,this.y*50+45,40*this.health/100,5)
    }
  }
  update(){
    this.checkDist();

    if(!this.isDead){
    this.animate();
    if(this.following){
      this.playerCol();
      this.follow();
    } else this.moveRandom()
    }
    else this.deathAnimation();
    if(this.destroy == true){
      demArr[this.index] = 0;
      player.xp+=25;
      //demArr.splice(this.index,1)
    }
    this.draw();

  }
  checkDist(){
    if(!this.following){
      if(dist(this.x,this.y,player.x,player.y)<3){
        this.following = true
      }
    }
  }
  animate(){

    if(gameClock%5 == 0){
      if(this.animationFrame == 0 || this.animationFrame == 2){
        this.animationDir *=-1;
      }
      this.animationFrame+=1*this.animationDir
    }
  }
  playerCol(){
    if(!this.isDead && this.x == player.x && this.y == player.y){
      if(!player.immune){
        player.health -= 10;
        player.immune = true;
        player.immuneTimer = 10;
      }
    }
  }
  deathAnimation(){
    if(demArr[this.index]!=0){
    if(gameClock%20 == 0){
      if(this.deadFrame<3)this.deadFrame+=1;
      if(this.deadFrame ==3){
        this.destroy = true;

        map.groundItem[this.x][this.y][0]= demonDustGround;
        return 0;
      }
    }
    }
    if(demArr[this.index]!=0)image(this.deadArr[this.deadFrame],demArr[this.index].x*50+25,demArr[this.index].y*50+25)
  }

  follow(){

    if(gameClock%25 == 0){
      if(player.x>this.x){
        this.dir = 1;
        if( map.demonArr[this.x+1][this.y][0]==undefined &&  map.midGround[this.x+1][this.y][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.x += 1;
          this.dir = 1;
          map.demonArr[this.x][this.y][0] = 1;
        }

      }
      else if(player.x<this.x){
        this.dir =2;
        if(map.demonArr[this.x-1][this.y][0]==undefined&&  map.midGround[this.x-1][this.y][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.x -= 1;

          map.demonArr[this.x][this.y][0] = 1;
        }
      }

      else if(player.y>this.y){
        this.dir =0;
        if(map.demonArr[this.x][this.y+1][0]==undefined&&  map.midGround[this.x][this.y+1][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.y += 1;
          this.dir =0;
          map.demonArr[this.x][this.y][0] = 1;
        }
      }


      }
      else if(player.y<this.y){
        this.dir =3;
        if(map.demonArr[this.x][this.y-1][0]==undefined&&  map.midGround[this.x][this.y-1][0]!=spikes){

            map.demonArr[this.x][this.y][0] = undefined;
            this.y -= 1;

            map.demonArr[this.x][this.y][0] = 1;
        }
      }


      else{

      }


  }

  moveRandom(){

    if(gameClock%18 == 0){
      let l = random(-1,1)
      let g = random(-1,1)

      if(l<=0 && g <= 0 && this.x <16){
        this.dir = 1;
        if( map.demonArr[this.x+1][this.y][0]==undefined &&  map.midGround[this.x+1][this.y][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.x += 1;
          this.dir = 1;
          map.demonArr[this.x][this.y][0] = 1;
        }

      }
      else if(l<=0 && g > 0 && this.x >0){
        this.dir =2;
        if(map.demonArr[this.x-1][this.y][0]==undefined&&  map.midGround[this.x-1][this.y][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.x -= 1;

          map.demonArr[this.x][this.y][0] = 1;
        }
      }

      else if(l>=0 && g < 0 && this.y < 13){
        this.dir =0;
        if(map.demonArr[this.x][this.y+1][0]==undefined&&  map.midGround[this.x][this.y+1][0]!=spikes){
          map.demonArr[this.x][this.y][0] = undefined;
          this.y += 1;
          this.dir =0;
          map.demonArr[this.x][this.y][0] = 1;
        }
      }
      else if(l>0 && g>0 && this.y>0){
        this.dir =3;
        if(map.demonArr[this.x][this.y-1][0]==undefined&&  map.midGround[this.x][this.y-1][0]!=spikes){
            map.demonArr[this.x][this.y][0] = undefined;
            this.y -= 1;
            map.demonArr[this.x][this.y][0] = 1;
        }
      }


      else{

      }


  }


}
}
