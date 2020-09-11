class animal{
  constructor(type,x,y){
    this.type = type;
    this.x = x
    this.y = y
  }




  update(){
    // this.pixLocX = this.x*50+25;
    // this.pixLocY = this.y*50+25;
    this.move();
    this.draw();

  }

  draw(){
    imageMode(CENTER)
    image(this.type,this.x*50+25,this.y*50+25)

    }
  move(){

    if(gameClock%floor(random(40,100)) == 0){
    if(this.type == fishR || this.type == fishL ){
      let l = random(-1,1);
      let g = random(-1,1);
      if(g <= 0){
        if(l <= 0 && map.mapTiles[this.x+1][this.y]== water1&& map.animalArr[this.x+1][this.y][0]== undefined) {
          map.animalArr[this.x+1][this.y][0] = map.animalArr[this.x][this.y][0]
          map.animalArr[this.x][this.y][0] = undefined
          this.x +=1
          this.type = fishR

        }
        else if (map.mapTiles[this.x-1][this.y]== water1&& map.animalArr[this.x-1][this.y][0]== undefined){
          map.animalArr[this.x-1][this.y][0] = map.animalArr[this.x][this.y][0]
          map.animalArr[this.x][this.y][0] = undefined
          this.x -=1
          this.type = fishL
        }
      }else {
        if(l <= 0 && map.mapTiles[this.x][this.y+1]== water1&& map.animalArr[this.x][this.y+1][0]== undefined) {
          map.animalArr[this.x][this.y+1][0] = map.animalArr[this.x][this.y][0]
          map.animalArr[this.x][this.y][0] = undefined
          this.y +=1
        }
        else if(map.mapTiles[this.x][this.y-1]== water1&& map.animalArr[this.x][this.y-1][0]== undefined) {
          map.animalArr[this.x][this.y-1][0] = map.animalArr[this.x][this.y][0]
          map.animalArr[this.x][this.y][0] = undefined
          this.y -=1
        }
      }
    }
  }







  }
}
