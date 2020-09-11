class craft{
  constructor(){
    this.x = 50;
    this.y = 700;
    this.isCraft = false;
    this.craftArr = [craftCabin,craftCampfire,craftCookedFish,craftFurnace,craftLamp,
    craftSpike,craftTurbine,craftWire];
    this.droppedItem = [cabinInv,campfire,fishCooked,furnaceOffInv,lampInv,spikes,turbineInv,wireInv]
    this.arrOffSet = 0;








  }
  draw(){
    strokeWeight(7)
    stroke(70,40,70);
    noFill();
    //fill(210,180,140,120)
    rect(0,0,300,700)


  }
  update(){
    if(this.isCraft){
      this.drawCraftables()
      this.draw();

    }

}
drawCraftables(){
imageMode(CORNER)

for (var i = this.arrOffSet; i < 7+this.arrOffSet; i++) {
  image(this.craftArr[i],0,(i-this.arrOffSet)*100)
  stroke(70,40,70);
  line(0,(i-this.arrOffSet)*100,300,(i-this.arrOffSet)*100)
}
imageMode(CENTER)

  }

  buyItem(mouseX,mouseY){
    if(mouseX <= 6 && mouseX >=0){
      if(mouseY >=0 && mouseY <=13){
        let objY = floor((mouseY/2) + this.arrOffSet)
        map.groundItem[player.x][player.y][0] = this.droppedItem[objY];
        player.pickUpGroundItems(1);
      }
    }
  }
}
