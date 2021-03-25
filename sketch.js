var gameStatesketch = 0; 
var playerCountsketch;
var allPlayersketch;
var database;

var formobj
var gameobj 
var playerobj;

var car1 , car2 , car3 , car4;
var cars;

function preload()
{
   track = loadImage("Images/ovaltrack.png")
   car1_img = loadImage("Images/chickh.png")
   car2_img = loadImage("Images/jack.png")
   car3_img = loadImage("Images/lqueen.png")
   car4_img = loadImage("Images/fran.png")
}


function setup(){
    createCanvas(displayWidth-10,displayHeight-30);
    database = firebase.database();  
    
    gameobj = new Game();
    gameobj.readGamestate();
    gameobj.start();
}

function draw()
{
  if(playerCountsketch === 4) 
  {
     gameobj.writeGamestate(1);
  }

  if(gameStatesketch === 1)
  {
     clear();
     gameobj.play();
  }

  if(gameStatesketch === 2)
  {
     gameobj.end();
  }
}