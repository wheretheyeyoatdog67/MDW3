class plant{
  constructor(type,x,y,stageTime){
    this.x = x;
    this.y = y;
    this.type = type
    this.stage = 0
    this.stageArr = [wheet1,wheet2,wheet3];
    this.stageTime = stageTime;
    this.done=false;
  }
  update(){
    this.draw();
  }
  draw(){
    if(!this.done){
    if(gameClock%this.stageTime==0){
      this.stage+=1;
      if(this.stage == 3){this.done = true
      this.stage = 2}
    }
  }
    imageMode(CENTER)
    image(this.stageArr[this.stage],this.x*50+25,this.y*50+25)
  }


}
