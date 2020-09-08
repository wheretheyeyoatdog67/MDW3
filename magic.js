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
  }
  draw(){
    push();
    translate(this.x,this.y);
    rotate(this.rot);
    //fill(255)
    strokeWeight(1)
    fill(random(120,200),0,255)
    ellipse(this.it+random(0,20),0,random(10,40),random(10,15))
    ellipse(this.it-random(0,20),0,random(10,40),random(10,15))
    ellipse(this.it,10,5,5)
    ellipse(this.it+10,-10,5,5)
    noFill();

    pop();
    this.projLoc[0] = this.x +(  this.it)*cos(this.rot);
    this.projLoc[1] = this.y + ( this.it)*sin(this.rot);
    if (floor((this.projLoc[0]-25)/50) <= 0 || floor((this.projLoc[0]-25)/50) >= 17 || floor((this.projLoc[1]-25)/50) <= 0 || floor((this.projLoc[1]-25)/50) >= 13) this.removeit = true;
  }
  move(){
    if(gameClock%1 == 0){
    this.it+=50;
  }
}
  collision(){

    if(map.foreGround[floor((this.projLoc[0]-25)/50)][floor((this.projLoc[1]-25)/50)][0] != undefined){this.removeit = true
    return true}else return false
  }

  update(){

    this.move();

    this.draw();
    this.collision()


  }
}
