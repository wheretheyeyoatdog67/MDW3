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
        this.itemCount[i] = 1;
        this.invArr[i] = transparent
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
    this.invArr[7] = hoe;
    this.invArr[8] = wheetseed
    // this.invArr[7] = cabinInv
    // this.invArr[8] = turbineInv
    // this.invArr[9] = campfire
    // this.backPackArr[0] = furnaceOffInv;
    // this.backPackArrItemCount[0] = 1;
    // this.backPackArr[1] = wireInv;
    // this.backPackArrItemCount[1] = 1;
    // this.backPackArr[2] = lampInv;
    // this.backPackArrItemCount[2] = 1;
    // this.backPackArr[3] = spikes;
    // this.backPackArrItemCount[3] = 10;
  }

  update(){
    this.displayCurItem();
    this.drawXpBar();
    this.drawBackPackNCraft();
    if(this.backPack) this.drawBackPack()
    this.drawInvItems();

    this.displayItemAmount();
    this.displayHealth();

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
      if(this.backPackArr[i] == transparent && this.backPackArr[i+1]!= undefined){
        let temp = this.backPackArr[i];
        let tempC = this.backPackArrItemCount[i];
        this.backPackArr[i] = this.backPackArr[i+1]
        this.backPackArrItemCount[i] = this.backPackArrItemCount[i+1]
        this.backPackArr[i+1] = temp
        this.backPackArrItemCount[i+1] = tempC
      }
      image(this.backPackArr[i],175+i*50,175)
    }
  }
  drawInvItems(){
    for (var i = 0; i < this.invArr.length; i++) {
      image(this.invArr[i],225+i*50,725)
    }
  }
  drawXpBar(){
    player.lvlUp()
    stroke(70,40,70);
    fill(210,180,140)
    strokeWeight(5)
    rect(200,750,500,25);
    rect(700,700,50,75)
    fill(255,255,0)
    let xpBar = player.xp/player.maxXpthisLvl*500
    rect(200,750,xpBar,25)
    fill(255)

    textSize(25)
    text("Lvl",708,730)
    text(player.lvl,714,760)


  }
  drawBackPackNCraft(){
    stroke(70,40,70);
    fill(210,180,140)
    textSize(20)
    rect(100,700,100,75);
    image(craftIcon,150,738)

    rect(0,700,100,75);
    image(backPackIcon,50,733)
    fill(255)
    text("C",175,765)
    text("E",75,765)
  }
  displayCurItem(){
    if(this.invArr[this.curItem]!=undefined){
      if(mouseX > player.x*50+25)image(this.invArr[this.curItem],player.x*50+40,player.y*50+25)
      else image(this.invArr[this.curItem],player.x*50+10,player.y*50+25)
    }
  }

  displayHealth(){

    let h = -692*player.health / 100;
    let m = -692*player.mana / 100;
    let hun =-692*player.hunger / 100;



    strokeWeight(9)
    fill(210,180,140);
    stroke(70,40,70);
    rect(890,0,25,700);
    rect(915,0,25,700);
    rect(940,0,25,700);

    noStroke()
    fill(255,0,0,170)
    rect(892,700-5,20,h);
    fill(120,0,255,190)
    rect(919,700-5,20,m);
    fill(130,205,0,170)
    rect(944,700-5,20,hun);


  }

}
