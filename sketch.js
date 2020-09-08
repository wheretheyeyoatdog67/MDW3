var cnv;
var width = 900;
var height = 700;
var gameClock = 0;
var iter = 0;

var projectileArr = [];

function setup() {

  createCanvas(900, 760);
  resize();
  imageMode(CENTER)
  player = new player(4,0);
  map = new map();
  mapGroup = new mapGroup();
  map.mapStartUp();
  pMap = new pMap();
  inv = new inv();

}

function draw(){
  background(255)
  gameClock +=1;
  pMap.drawPMap();
  map.drawMap();
  map.darken();
  if(player.isInCabin == true){
  image(cabinInside,width/2,height/2)
}
  player.update();

  inv.update();


  if(dragingItem == true){
    dragItem(indexDrag);
  }




}



function preload() {
    grass = loadImage('Tiles/mapTiles/grass.png');

    grass2 = loadImage('Tiles/mapTiles/grassD.png');
    water1 = loadImage('Tiles/mapTiles/water1.png');
    sand1 = loadImage('Tiles/mapTiles/sand1.png');


    grassSM = loadImage('Tiles/mapTiles/grass.png');

    grass2SM = loadImage('Tiles/mapTiles/grassD.png');
    water1SM = loadImage('Tiles/mapTiles/water1.png');

    berrybush = loadImage('Tiles/foreGround/berrybush.png');
    mush = loadImage('Tiles/foreGround/mush.png');
    rock = loadImage('Tiles/foreGround/rock.png');
    rockInv = loadImage('Tiles/foreGround/rock.png');
    rock2 = loadImage('Tiles/foreGround/rock2.png');
    transparent  = loadImage('Tiles/foreGround/transparent.png');
    tree = loadImage('Tiles/foreGround/tree.png');
    tree2 = loadImage('Tiles/foreGround/tree3.png');

    pf1 = loadImage('PlayerSprite/pf1.png');

    pf2 = loadImage('PlayerSprite/pf2.png');

    pl1 = loadImage('PlayerSprite/pl1.png');

    pl2 = loadImage('PlayerSprite/pl2.png');


    pr1 = loadImage('PlayerSprite/pr1.png');

    pr2 = loadImage('PlayerSprite/pr2.png');

    pu1 = loadImage('PlayerSprite/pu1.png');

    pu2 = loadImage('PlayerSprite/pu2.png');

    axe =  loadImage('Tools/axe1.png');
    pickaxe =  loadImage('Tools/pickaxe1.png');
    shovel =  loadImage('Tools/shovel.png');
    spear = loadImage('Tools/spear.png');
    spearInv =  loadImage('Tools/spearInv.png');
    wand = loadImage('Tools/wand.png');
    wandInv =  loadImage('Tools/wandInv.png');
    torch =  loadImage('Tools/torch.png');
    tomb =  loadImage('Tools/tomb.png');
    logs =  loadImage('Tiles/groundItems/logs.png');

    mush =  loadImage('Tiles/midGround/mush.png');
    trip =  loadImage('Tiles/midGround/mushroom.png');
    reeds =  loadImage('Tiles/midGround/reeds.png');
    treeDead =  loadImage('Tiles/midGround/treeDead.png');
    grassMid =  loadImage('Tiles/midGround/grassMid.png');
    cobblePath =  loadImage('Tiles/midGround/cobblePath.png');
    berries =  loadImage('Tiles/groundItems/berries.png');
    ebush =  loadImage('Tiles/foreGround/ebush.png');
    cabin =  loadImage('Tiles/2by2/cabin.png');
    cabinInv =  loadImage('Tiles/2by2/cabinInv.png');

    furnace =  loadImage('Tiles/2by2/furnace.png');
    furnaceOff =  loadImage('Tiles/2by2/furnaceOff.png');
    furnaceOffInv =  loadImage('Tiles/2by2/furnaceOffInv.png');
    campfire = loadImage('Tiles/foreGround/campfire.png');
    tree5 = loadImage('Tiles/foreGround/tree5.png');
    tree6 = loadImage('Tiles/foreGround/tree6.png');
    cabinInside = loadImage('Cabin/insideCrop.png');
}
function resize(){
  cabinInside.resize(600,450);
  tree6.resize(50,100);
  campfire.resize(50,50);
  furnace.resize(100,100);
  furnaceOff.resize(100,100);
  cabinInv.resize(50,50);
cabin.resize(125,100);
cobblePath.resize(50,50);
berries.resize(50,50);
ebush.resize(40,40);
mush.resize(50,50);
trip.resize(50,50);
reeds.resize(50,50);
treeDead.resize(50,50);
grassMid.resize(50,50);


  axe.resize(50,50);
  pickaxe.resize(50,50);
  shovel.resize(50,50);
  spear.resize(50,50);
  spearInv.resize(50,50);
  wand.resize(50,50);
  wandInv.resize(50,50);
  torch.resize(50,50);
  tomb.resize(30,30);
  logs.resize(40,40);
  rockInv.resize(40,40);

rock.resize(50,50);
rock2.resize(50,50);
transparent.resize(50,50);
tree.resize(50,50);
tree2.resize(50,50);

mush.resize(50,50);
berrybush.resize(40,40);
grass.resize(50,50);
grass2.resize(50,50);
water1.resize(50,50);
sand1.resize(50,50);
grassSM.resize(3,3);
grass2SM.resize(3,3);
water1SM.resize(3,3);
pf1.resize(40,40);
pf2.resize(40,40);
pl1.resize(40,40);
pl2.resize(40,40);
pr1.resize(40,40);
pr2.resize(40,40);
pu1.resize(40,40);
pu2.resize(40,40);
}
