
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  //ground.x=ground.x/2;
  //console.log(ground.x)
  
  var score = 0;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
background("green");
  
  monkey.bounceOff(ground);
  
  monkey.y = monkey.y + 2
  
  if(keyDown("space") && monkey.y >= 315){
    monkey.y = monkey.y - 200
  }
  
  //console.log(monkey.y)
  
  ground.x=ground.x/2;
  //console.log(ground.x)
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score = " + score, 100,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time =" + survivalTime, 100,80);
  

  
  monkey.velocityY = 3;
  
  spawnbananas()
  spawnstones()
  drawSprites();
}

function spawnbananas(){
  if(frameCount%80===0){
  banana = createSprite(500,300,10,10);
    banana.y = Math.round(random(120,200));
    //banana.x = -1;
  banana.addImage(bananaImage);
  banana.scale = 0.07;
    banana.lifetime=200;
  
    banana.velocityX = -3
    
    bananaGroup.add(banana)
  
  }
}
function spawnstones() {
  if(frameCount%300===0){
  obstacle = createSprite(500,330,10,10); 
  obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
  
}
}