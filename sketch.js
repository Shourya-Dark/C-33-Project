const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundImg;

var snowball = [];
var snowSound;


function preload() {
  getBackgroundImg();

  snowSound = loadSound("Falling Snow Sound Effect  Royalty Free Sound Effects.webm");
}

function setup() {
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,height,1200,20);

}

function draw() {

  if(backgroundImg){
    background(backgroundImg)
    }

  Engine.update(engine);


  if(frameCount%3===0){
    snowball.push(new Snowball(random(0, 1200), 10,10));
  
  }

 for (var j = 0; j < snowball.length; j++) {
  
    snowball[j].display();
  }

  

  drawSprites();

}

async function getBackgroundImg() {

  // write code to fetch time from API
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 
  
  //change the data in JSON format
  var responseJson= await response.json()
  console.log("Time",responseJson)

  // write code slice the datetime
  var datetime= responseJson.datetime
  var hour=datetime.slice(11,13)

  console.log(hour);

  
  if(hour >= 20 && hour < 4) {
    bg = "snow2.jpg"; console.log(bg);
    }
    else if (hour >= 4 && hour < 12) {
    bg = "snow1.jpg";
  } 
    else if (hour >= 12 && hour < 20) {
     bg = "snow3.jpg";
  }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);


  }
  

  