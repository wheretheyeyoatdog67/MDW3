var dragingItem = false;
var indexDrag;
var indexPos;

function keyPressed() {

//MOVEMENT WASD

switch(keyCode){
  case 65:
  if(player.collision(-1,0)){
    console.log("col")
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
    if(inv.backPack == true)
    inv.backPack = false;
    else inv.backPack = true;
  break;


}
}

function mouseClicked() {
let x = floor(mouseX/50);
let y = floor(mouseY/50);
console.log(x)
console.log(y)
if(inv.backPack==false){
switch(inv.invArr[inv.curItem]){
  case wandInv:
    projectileArr.push(new magicAttact())
  break;
  case tomb:
    player.teleport(x,y,100)
  break;
  case axe:
  if(map.foreGround[x][y][0] == tree ||map.foreGround[x][y][0] == tree2){
    if(dist(x,y,player.x,player.y)==1){
      map.midGround[x][y][0] = treeDead
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = logs
    }
  }
  break;
  case pickaxe:
  if(map.foreGround[x][y][0] == rock ||map.foreGround[x][y][0] == rock2){
    if(dist(x,y,player.x,player.y)==1){
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = rockInv
    }
  }
  break;
  case cabinInv:

    if(dist(x,y,player.x,player.y)<3){
      player.place2by2(x,y,cabin)
    }

  break;
  case furnaceOffInv:

    if(dist(x,y,player.x,player.y)<3){
      player.place2by2(x,y,furnaceOff)
    }

  break;
  case campfire:

    if(dist(x,y,player.x,player.y)<2){
      if(map.foreGround[x][y][0]==undefined){
        map.foreGround[x][y][0]=campfire
      }
    }

  break;
  case rockInv:

    if(dist(x,y,player.x,player.y)==1){
      map.midGround[x][y][0] = cobblePath;
      for (var i = 0; i < inv.invArr.length; i++) {
        if(inv.invArr[i]==rockInv){
          inv.itemCount[i]-=1;
        }
      }
    }

  break;
  case shovel:
  if(map.foreGround[x][y][0] == ebush){
    if(dist(x,y,player.x,player.y)==1){
      map.foreGround[x][y][0] = undefined
      map.groundItem[x][y][0] = ebush
    }
  }else if(map.midGround[x][y][0] == treeDead){
    map.midGround[x][y][0] = undefined
    map.groundItem[x][y][0] = logs
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


    }
    if(dist(x,y,player.x,player.y)==1){
      if(map.foreGround[x][y][0]==cabin||map.foreGround[x-1][y][0]==cabin||map.foreGround[x-1][y-1][0]==cabin||map.foreGround[x][y-1][0]==cabin){
        player.isInCabin = true;
        player.houseLoc[0]=player.x
        player.houseLoc[1]=player.y
        player.x = 11;
        player.y = 11;
      }
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
        console.log(l)
        let temp = inv.invArr[l]
        let temp2 = inv.itemCount[l]
        inv.invArr[l] = inv.backPackArr[indexDrag];
        inv.itemCount[l] = inv.backPackArrItemCount[indexDrag]
        inv.backPackArrItemCount[indexDrag] = temp2;
        inv.backPackArr[indexDrag] = temp;
        dragingItem = false;

      }
    }
}




}

function dragItem(l){
  image(inv.backPackArr[l],mouseX,mouseY)
}

function mouseWheel(event) {

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
    else inv.curItem += 1};
}
