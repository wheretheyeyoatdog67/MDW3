class magicAttact{
  constructor(){
    this.x = player.x*50+25;
    this.y = player.y*50+25;
    this.locX = mouseX;
    this.locY = mouseY;
    this.rot = atan2((this.locY-this.y)/2,(this.locX-this.x)/2);
    this.it = 0;
    this.projLoc = [];
    this.removeit = false;
    this.metX;
    this.metY;
    this.timerExplode = 0;
    this.hasHit = false;
  }
  draw(){
    if(this.hasHit == false){
    push();
    translate(this.x,this.y);
    rotate(this.rot);
    //fill(255)

    strokeWeight(1)
    fill(random(120,200),0,255)
    noStroke()

    ellipse(this.it,0,25,20)
    ellipse(this.it,0,random(30,45),random(10,15))

    ellipse(this.it,10,5,5)
    ellipse(this.it+10,-10,5,5)

    noFill();

    pop();
  }else this.explode();
    this.projLoc[0] = this.x +(  this.it)*cos(this.rot);
    this.projLoc[1] = this.y + ( this.it)*sin(this.rot);
    this.metX=floor((this.projLoc[0]-25)/50)
    this.metY=floor((this.projLoc[1]-25)/50)
    if (floor((this.projLoc[0]-25)/50) <= 0 || floor((this.projLoc[0]-25)/50) >= 17 || floor((this.projLoc[1]-25)/50) <= 0 || floor((this.projLoc[1]-25)/50) >= 13) this.removeit = true;
  }
  move(){
    if(gameClock%1 == 0){
    this.it+=50;
  }
}
  explode(){
    if(this.hasHit == true){
      strokeWeight(1)
      fill(random(120,200),0,255,140)

      ellipse(this.metX*50+25,this.metY*50+25,this.timerExplode*7,this.timerExplode*7);
      this.timerExplode +=1;
      if(this.timerExplode > 10) this.removeit = true;
    }
  }
  collision(){
    for (var i = demArr.length-1; i >= 0; i--) {
      if(demArr[i].isDead== false && dist(this.metX,this.metY, demArr[i].x, demArr[i].y) <1.1 ){

        if(demArr[i].health>0){
          demArr[i].health -= 60;
        }
        if(demArr[i].health<0) {
        demArr[i].health = 0;
        demArr[i].index = i;
        demArr[i].isDead = true;
        map.demonArr[demArr[i].x][demArr[i].y][0] = undefined;
        //this.removeit = true;



      }
      this.hasHit = true;
      return true;
      }
    }
    if(map.foreGround[floor((this.projLoc[0]-25)/50)][floor((this.projLoc[1]-25)/50)][0] != undefined){this.hasHit = true
    return true}else return false
  }

  update(){

    if(!this.hasHit)this.move();

    this.draw();

    if(!this.hasHit)this.collision()


  }
}
