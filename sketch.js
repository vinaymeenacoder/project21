function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym1.png","gym2.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
move = loadAnimation("move.png","move1.png")
bath = loadAnimation("bath1.png","bath2.png")}


function setup() {
  createCanvas(600, 600);
astronaut = createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale = 0.1

}

function draw() {
  background(bg);
  drawSprites()
  textSize(15)
  fill("white")
  text("up arrow = brushing",50,50)
  text("down arrow = gymming",50,70)
  text("left arrow = eating",50,90)
  text("right arrow = bathing",50,110)
  text(" m key = moving",50,30)

  if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush)
astronaut.changeAnimation("brushing",brush)
astronaut.y = 350
astronaut.velocityX = 0
astronaut.velocityY = 0

  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming",gym)
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
      }
      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating",eat)
        astronaut.changeAnimation("eating",eat)
        astronaut.y = 350
        astronaut.velocityX = 0
        astronaut.velocityY = 0
        
          }
          if(keyDown("RIGHT_ARROW")){
            astronaut.addAnimation("bathing",bath)
            astronaut.changeAnimation("bathing",bath)
            astronaut.y = 350
            astronaut.velocityX = 0
            astronaut.velocityY = 0
            
              }
              if(keyDown("m")){
                astronaut.addAnimation("moving",move)
                astronaut.changeAnimation("moving",move)
                astronaut.y = 350
                astronaut.velocityX = 3
                astronaut.velocityY = 4
                
                  }
}

