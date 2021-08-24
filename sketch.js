var track,trackImg
var car,CarImg
var tyre,tyreImg
var gameover,gameoverImg
var restart,restartImg
var coin,coinImg

function preload(){
  trackImg=loadImage("assets/track.jpg")
  carImg=loadImage("assets/Car.png")
  tyreImg=loadImage("assets/Tyre.png")
  gameoverImg=loadImage("assets/gameOver.png")
  restartImg=loadImage("assets/restart.png")
  coinImg=loadImage("assets/Coin.png")

}


function setup(){
createCanvas(800,800)
track=createSprite(400,400,1200,800)
track.scale=2
track.addImage(trackImg)
track.velocityY=10
 car=createSprite(400,650)
car.addImage(carImg)

}

function draw(){
background(0)
if(track.y>400){track.y=200}
if(keyDown("RIGHT_ARROW")){
  car.x=car.x+5
}
if(keyDown("LEFT_ARROW")){
  car.x=car.x-5
}
 spawnCoin()

drawSprites()
}

function spawnCoin(){
  if(frameCount % 100 === 0){
    var coin = createSprite(0,0)
    coin.x=random(80,720)
    coin.y=random(10,750)
    coin.addImage(coinImg)  
    coin.velocityY=5;
    coin.scale=0.2
  coin.lifetime = 200;
  }
  

}