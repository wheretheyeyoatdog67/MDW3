var dragingItem = false;
var indexDrag;
var indexPos;

function keyPressed() {

//MOVEMENT WASD

switch(keyCode){
  case 65:
  if(player.collision(-1,0)){

    player.x -=1
    player.lastDir = 2;
    player.curAnimation = pl1;
    map.mapCheckNewRegion()
    player.pickUpGroundItems(floor(random(1,5)))
    
  }
  break;
  case 68:
  if(player.collision(1,0)){
    player.x +=1
    player.lastDir = 1;
    player.curAnimation = pr1;
    map.mapCheckNewRegion()
    player.pickUpGroundItems(floor(random(1,5)))

  }
  break;
  case 83:
  if(player.collision(0,1)){
    player.y +=1
    player.lastDir = 3;
    player.curAnimation = pf1;
    map.mapCheckNewRegion()
    player.pickUpGroundItems(floor(random(1,5)))

    }

  break;
  case 87:
  if(player.collision(0,-1)){
    player.y -=1
    player.lastDir = 4;
    player.curAnimation = pu1;
    map.mapCheckNewRegion()
  player.pickUpGroundItems(floor(random(1,5)))

}
  break;
  case 77:
    //MAPMODE
    if(pMap.isMap == true)
    pMap.isMap = false;
    else pMap.isMap = true;
  break;
  case 69:
    //MAPMODE
    if(inv.backPack == true){
      inv.backPack = false;

    }

    else {
      craft.isCraft = false;
      inv.backPack = true;
    }
  break;
  case 67:
    if(craft.isCraft != true){craft.isCraft = true
    inv.backPack = false;}
    else craft.isCraft = false;
  break;


  case 49:
    //MAPMODE
    inv.curItem = 0
  break;
  case 50:
    //MAPMODE
    inv.curItem = 1
  break;
  case 51:
    //MAPMODE
    inv.curItem = 2
  break;
  case 52:
    //MAPMODE
    inv.curItem = 3
  break;
  case 53:
    //MAPMODE
    inv.curItem = 4
  break;
  case 54:
    //MAPMODE
    inv.curItem = 5
  break;
  case 55:
    //MAPMODE
    inv.curItem = 6
  break;
  case 56:
    //MAPMODE
    inv.curItem = 7
  break;
  case 57:
    //MAPMODE
    inv.curItem = 8
  break;
  case 48:
    //MAPMODE
    inv.curItem = 9
  break;
  case 82:
    map.devDestroyForGround();
  break;
  case 80:
  if(pause != true)
    pause = true;
  else pause = false;
  break;


}
}

function mouseClicked() {
let x = floor(mouseX/50);
let y = floor(mouseY/50);
// console.log(x)
// console.log(y)
if(inv.backPack==false){
switch(inv.invArr[inv.curItem]){
  case wandInv:
    if(player.mana>=5){
    projectileArr.push(new magicAttact())
    player.mana -= 5;}
  break;
  case tomb:
  if(player.mana>=10){
    player.teleport(x,y,100)
    player.mana -= 10;
  }
  break;
  case axe:
  if(map.foreGround[x][y][0] == tree ||map.foreGround[x][y][0] == tree2){
    if(dist(x,y,player.x,player.y)==1){
      map.midGround[x][y][0] = treeDead
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = logs
      player.xp+=2;
    }
  }
  break;
  case pickaxe:
  if(map.foreGround[x][y][0] == rock ||map.foreGround[x][y][0] == rock2){
    if(dist(x,y,player.x,player.y)==1){
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = rockInv
      player.xp+=2;
    }
  }
  break;
  case logs:

    if(dist(x,y,player.x,player.y)<=2){
      map.mapTiles[x][y] = woodPlank
    }

  break;
  case cabinInv:

    if(dist(x,y,player.x,player.y)<3){
      player.place2by2(x,y,cabin)
      player.xp+=25;
    }

  break;
  case furnaceOffInv:

    if(dist(x,y,player.x,player.y)<3){
      player.place2by2(x,y,furnaceOff)
      player.xp+=25;
    }

  break;
  case campfire:

    if(dist(x,y,player.x,player.y)<2){
      if(map.foreGround[x][y][0]==undefined){
        map.foreGround[x][y][0]=campfire
        player.xp+=5;
      }
    }

  break;
  case rockInv:

    if(dist(x,y,player.x,player.y)==1){
      map.midGround[x][y][0] = cobblePath;
      for (var i = 0; i < inv.invArr.length; i++) {
        if(inv.invArr[i]==rockInv){
          inv.itemCount[i]-=1;
          player.xp+=1;
        }
      }
    }

  break;
  case wireInv:
    if(dist(x,y,player.x,player.y)<=3){
      map.midGround[x][y][0]= wireOff;
      map.wireArr[x][y][0] = new wire(x,y);
      map.wirePlacedUpdate = true;
      player.xp+=1;
    }

  break;
  case lampInv:
    if(dist(x,y,player.x,player.y)<=3){
      map.midGround[x][y-1][0]= lampOff;
      map.midGround[x][y][0]= transparent;
      map.lampArr[x][y][0] = new lamp(x,y);
      map.wirePlacedUpdate = true;
      player.xp+=1;
    }
  break;
  case shovel:
  if(map.foreGround[x][y][0] == ebush){
    if(dist(x,y,player.x,player.y)==1){
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = ebush
      player.xp+=1;
    }
  }else if(map.midGround[x][y][0] == treeDead){
    map.midGround[x][y][0] = undefined
    map.groundItem[x][y][0] = logs
    player.xp+=1;
  }else if( map.midGround[x][y][0] == grassMid){
     map.midGround[x][y][0] = undefined
     player.xp+=1;
  }else if( map.midGround[x][y][0] == reeds){
     map.midGround[x][y][0] = undefined
     map.groundItem[x][y][0] = reeds
     player.xp+=1;
  }

  else if( map.mapTiles[x][y] == grass2 || map.mapTiles[x][y] == grass|| map.mapTiles[x][y] == sand1|| map.mapTiles[x][y] == dirt){
    if(dist(x,y,player.x,player.y)<2){
    if( map.foreGround[x][y][0] == undefined){

      if(map.mapTiles[x][y] == sand1){
        map.mapTiles[x][y] = sand2
      }
      else map.mapTiles[x][y] = dirt
      if(map.mapTiles[x+1][y] == water1){
        map.mapTiles[x][y] = water1
        map.waterTiles[x][y][0] = 1;
      }
      if(map.mapTiles[x-1][y] == water1){
        map.mapTiles[x][y] = water1
        map.waterTiles[x][y][0] = 1;
      }
      if(map.mapTiles[x][y+1] == water1){
        map.mapTiles[x][y] = water1
        map.waterTiles[x][y][0] = 1;
      }
      if(map.mapTiles[x][y-1] == water1){
        map.mapTiles[x][y] = water1
        map.waterTiles[x][y][0] = 1;
      }

    }

  }
  }
  break;
  case ebush:

    if(dist(x,y,player.x,player.y)==1){
          map.foreGround[x][y][0]= ebush
          player.xp+=1;
        }
  break;
  case berries:
  for (var i = 0; i < inv.invArr.length; i++) {
    player.hunger += 10;
    if(inv.invArr[i] == berries)inv.itemCount[i]-=1;
    player.xp+=1;
  }
  break;
  case turbineInv:
  if(dist(x,y,player.x,player.y)<=2){

    if(map.foreGround[x][y][0]== undefined &&map.foreGround[x][y-1][0]== undefined){
      map.foreGround[x][y][0] = transparent;
      map.foreGround[x][y-1][0] = turbine1;
      map.turbineArr.push([x,y-1])
      map.wirePlacedUpdate = true;
      player.xp+=10;
    }
  }
  break;
  case mush:
  player.mana += 25;
  for (var i = 0; i < inv.invArr.length; i++) {
    if(inv.invArr[i] == mush)inv.itemCount[i]-=1;
  }

  break;
  case spikes:
  if(dist(x,y,player.x,player.y)<=2){
    map.midGround[x][y][0] = spikes
    for (var i = 0; i < inv.invArr.length; i++) {
      if(inv.invArr[i] == spikes){
        inv.itemCount[i]-=1;
        return 0;
        player.xp+=1;
      }
    }
  }

  break;

  default:

  }
}





  if(dist(x,y,player.x,player.y)==1){
    if(map.foreGround[x][y][0]==berrybush){
      map.groundItem[player.x][player.y][0] = berries;
      map.foreGround[x][y][0] = ebush;
      player.pickUpGroundItems(floor(random(1,3)));
    }
    else if(map.midGround[x][y][0]==mush){
      map.groundItem[player.x][player.y][0] = mush;
      map.midGround[x][y][0] = undefined;
      player.pickUpGroundItems(1);
    }

    return 0;
    }
    else if(craft.isCraft){
      craft.buyItem(x,y);
      player.xp+=5;
    }
    else if(dist(x,y,player.x,player.y)==1){
      if(map.foreGround[x][y][0]==cabin||map.foreGround[x-1][y][0]==cabin||map.foreGround[x-1][y-1][0]==cabin||map.foreGround[x][y-1][0]==cabin){
        player.isInCabin = true;
        player.houseLoc[0]=player.x
        player.houseLoc[1]=player.y
        player.x = 11;
        player.y = 11;
      }
      return 0;
    }
    if(inv.backPack == true ){
      if(dragingItem!=true){
      if(x>=3){let l = x-3;
        if(inv.backPackArr[l]!= undefined){
        dragingItem = true;
        indexDrag = l;}
      }
    }else if(dragingItem == true) {
      if(x>=4 && y >= 14){
        let l = x-4;
        let temp = inv.invArr[l]
        let temp2 = inv.itemCount[l]
        inv.invArr[l] = inv.backPackArr[indexDrag];
        inv.itemCount[l] = inv.backPackArrItemCount[indexDrag]
        inv.backPackArrItemCount[indexDrag] = temp2;
        inv.backPackArr[indexDrag] = temp;
        dragingItem = false;

      }
    }
    return 0;
}




}

function dragItem(l){
  image(inv.backPackArr[l],mouseX,mouseY)
}

function mouseWheel(event) {
if(!craft.isCraft){
  if(event.delta < 0){
    if(inv.curItem == 0){
      inv.curItem = 0;
    }
    else inv.curItem -= 1;
  }
  else {
    if(inv.curItem == 9){
      inv.curItem = 9;
    }
    else inv.curItem += 1}
  }
  else if (craft.isCraft){
    if(event.delta < 0){
      if(craft.arrOffSet  == 0){
        craft.arrOffSet  = 0;
      }
      else craft.arrOffSet  -= 1;
    }
    else {
      console.log(craft.arrOffSet+7)
      console.log(craft.craftArr.length)
      if(craft.arrOffSet+7 >= craft.craftArr.length){

      }
      else craft.arrOffSet  += 1}

  }
}
