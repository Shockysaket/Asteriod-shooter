var jet, jetimg, asteroid1, asteroid1img, asteroid2img , jetleftimg,jetrightimg;
 var asteroid2 , damageasteroid , damageasteroidimg , space , spaceimg, laser, laserimg;
 var laserstraight, laserleft, laserstraightimg, laserleftimg, laseright,laserightimg;
 var asteriodgroup, lasergroup , bgsong, score=0 , directions ="up";
 var gameend , winbg;

function preload () { 
spaceimg =  loadImage("space.jpg")
jetimg= loadImage ( "jet.png")
jetleftimg= loadImage ( "jetleft.png")
jetrightimg= loadImage ( "jetright.png")

asteroid1img= loadImage("asteroid.png")
asteroid2img= loadImage("asteroid2.png")
 damagedasteroidimg= loadImage("damagedasteroid.jpg")
//laserimg= loadImage("laser.png")
laserightimg= loadImage ("laseright.png")
laserleftimg= loadImage ("laserleft.png")
laserstraighttimg= loadImage ("laserstraight.png")
gameend= loadImage("bg5.jpg")
winbg= loadImage ("win.png")

bgsong=loadSound("Fade.mp3")

}








function setup() {
  createCanvas(displayWidth,displayHeight);
 bg=  createSprite (displayWidth/2,displayHeight/2,displayWidth*1.5,600)
bg.addImage ( spaceimg)

jet =  createSprite (displayWidth/2-100, displayHeight-20)
jet.addImage ( jetimg)
jet.scale = 0.3

asteriodgroup= createGroup();
lasergroup= createGroup();



}

function draw() {
  background(255,255,255);  
//bgsong.loop();
 
  
  if (keyDown("UP_ARROW")){
    jet.y= jet.y-10
    jet.addImage(jetimg)
    directions = "up"
  }
  
  if (keyDown("LEFT_ARROW")){
    jet.x= jet.x-10;
    //jet.rotate=90;
    jet.addImage(jetleftimg)
    directions = "left"
  }
  if (keyDown("RIGHT_ARROW")){
    jet.x= jet.x+10
    jet.addImage(jetrightimg)
    directions = "right"
  }
 


  if (keyWentDown("r")&& directions==="up" ) {
var laserstraight= createSprite(jet.x,jet.y-50,10,10)
laserstraight.addImage(laserstraighttimg)
laserstraight.velocityY = -13
laserstraight.scale = 0.5;
lasergroup.add(laserstraight)
  }

  if (keyWentDown("r")&& directions==="right"  ){
    var laseright= createSprite(jet.x+50,jet.y,10,10)
    laseright.addImage(laserightimg)
    laseright.velocityX = +13
    laseright.scale = 0.5;
    lasergroup.add(laseright)
      }

  if (keyWentDown("r")&& directions==="left" ) {
        var laserleft= createSprite(jet.x-50,jet.y,10,10)
        laserleft.addImage(laserleftimg)
        laserleft.velocityX = -13
        laserleft.scale = 0.5;
        lasergroup.add(laserleft)
          }
if (lasergroup.isTouching(asteriodgroup)) {
asteriodgroup.destroyEach();
score = score+2
}
          

  if (jet.y<20){
    jet.y=displayHeight-20
  }
  if (jet.x<0){
    jet.x=displayWidth;
  }
  if (jet.x>displayWidth){
    jet.x=0
  }
     


if (score===2){
text ("YOU WON !! ")
bg.addImage(gameend)
jet.addImage(winbg)
jet.scale=2;
jet.x=displayWidth/2
jet.y=displayHeight/2 
asteriodgroup.destroyEach();
lasergroup.destroyEach()
}


       
  spawnasteroids();
  drawSprites();

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  
}

function spawnasteroids (){
if (frameCount%120===0) {
var asteroid=createSprite(0,0,10,10)
asteroid.x=Math.round(random(0,displayWidth))
asteroid.scale=random(0.1,0.7)
asteroid.velocityY= random(4,8)
var r = Math.round(random(1,2))
switch(r){
  case 1 : asteroid.addImage(asteroid1img)
  break;

  case 2 : asteroid.addImage(asteroid2img)
  break;
  
  default:break;

}
asteroid.lifetine=800;
asteriodgroup.add(asteroid)

}

}