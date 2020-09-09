class inv {
  constructor(){
  this.backPack = false;
  this.curItem = 0;
  this.invArr = [];
  this.itemCount = [];
  this.backPackArr = [];
  this.backPackArrItemCount = [];
  this.fillInv();
  this.invCountItems();
  }


  invCountItems(){
    for (var i = 0; i < this.invArr.length; i++) {
      this.itemCount[i] = 1;
    }
  }
  displayItemAmount(){

    for (var i = 0; i < this.invArr.length; i++) {
      if(this.itemCount[i]!=1){
        fill(255)
        textSize(20)
        text(this.itemCount[i],230+i*50,740)
      }
      if(this.itemCount[i] <= 0){
        this.itemCount.splice(i,1)
        this.invArr.splice(i,1)

      }
    }
    if(this.backPack == true){
    for (var i = 0; i < this.backPackArrItemCount.length; i++) {
        if(this.backPackArrItemCount[i]!=1){
          fill(255)
          textSize(20)
          text(this.backPackArrItemCount[i],185+i*50,195)
        }
      }
    }
  }



  fillInv(){
    this.invArr[0] = pickaxe;
    this.invArr[1] = axe;
    this.invArr[2] = shovel;
    this.invArr[3] = spearInv
    this.invArr[4] = wandInv;
    this.invArr[5] = tomb;
    this.invArr[6] = torch;
    this.invArr[7] = cabinInv
    this.invArr[8] = turbineInv
    this.invArr[9] = campfire
    this.backPackArr[0] = furnaceOffInv;
    this.backPackArrItemCount[0] = 1;
    this.backPackArr[1] = wireOff;
    this.backPackArrItemCount[1] = 1;
    this.backPackArr[2] = lampInv;
    this.backPackArrItemCount[2] = 1;
  }

  update(){
    this.displayCurItem();
    if(this.backPack) this.drawBackPack()
    this.drawInvItems();
    this.displayItemAmount();

  }

  drawBackPack(){
    stroke(70,40,70);
    fill(210,180,140)
    strokeWeight(10)
    rect(150,150,600,300)
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 300/50; j++) {
        strokeWeight(2)
        rect(150+i*50,150+j*50,50,50)
      }
    }
    for (var i = 0; i < this.backPackArr.length; i++) {
      //175+i*50
      image(this.backPackArr[i],175+i*50,175)
    }
  }
  drawInvItems(){
    for (var i = 0; i < this.invArr.length; i++) {
      image(this.invArr[i],225+i*50,725)
    }
  }
  displayCurItem(){
    if(this.invArr[this.curItem]!=undefined){
      if(mouseX > player.x*50+25)image(this.invArr[this.curItem],player.x*50+40,player.y*50+25)
      else image(this.invArr[this.curItem],player.x*50+10,player.y*50+25)
    }
  }
}
