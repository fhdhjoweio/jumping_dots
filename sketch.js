var bg,bgImg;
var player;
var ground;
var platform0, platform1, platform2, platform3, platform4, platform5, platform6;


function preload(){
    bgImg = loadImage("./assets/bg.png")  
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    //adding the background image
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    bg.addImage(bgImg)
    bg.scale = 1.1

    //player
    player = createSprite(210,10, 25, 25);
    player.scale = 1 
 
    player.setCollider("rectangle",0,0,25,25)

    //ground
    ground = createSprite(displayWidth/2, displayHeight - 110, displayWidth, 30)  
    
    //platform1 
    platform1 = createSprite(200, 500, 100, 25)    

    //platform2
    platform2 = createSprite(400, 400, 100, 25)   
   
    //platform3
    platform3 = createSprite(620, 380, 100, 25)

    //platform4
    platform4 = createSprite(820, 310, 100, 25)

    //platform5
    platform5 = createSprite(1050, 380, 100, 25)

    //platform6
    platform6 = createSprite(1200, 270, 100, 25)

    //platform7
    platform7 = createSprite(1400, 230, 100, 25)

    //platform8
    platform8 = createSprite(1650, 400, 100, 25)

    //enemy1
    enemy1 = createSprite(300, 945, 20, 20)

    //enemy2
    enemy2 = createSprite(900, 945, 20, 20)

    //enemy3
    enemy2 = createSprite(1600, 945, 20, 20)

}

function draw() {
    background(0); 
    player.velocityY += 0.7
    player.shapeColor = "#fff"
    ground.shapeColor = "#993300"

    player.collide(ground)
    player.collide(platform1)
    player.collide(platform2)
    player.collide(platform3)
    player.collide(platform4)
    player.collide(platform5)
    player.collide(platform6)
    player.collide(platform7)
    player.collide(platform8)

    if(keyWentDown("space")){
        player.velocityY += -10 
    }

    if (keyDown("d")) {
        player.x += 3
    }

    if (keyDown("a")) {
        player.x -= 3
    }

    // lasers
    if (frameCount % 30) {
        progress = createSprite(player.x, 10, 10, 10)
        progress.shapeColor = "#0f0"
    }

    if (frameCount % 120 == 0) {
        laser = createSprite(enemy1.x, 900, 10, 10)
        laser.velocityY = -20
        laser.positionX = player.x

    }

    drawSprites();

}

