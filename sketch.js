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
    platform1 = createSprite(200, 580, 100, 25)    

    //platform2
    platform2 = createSprite(400, 510, 60, 25)   
   
    //platform3
    platform3 = createSprite(600, 440, 120, 25)

    //platform4
    platform4 = createSprite(800, 370, 120, 25)

    //platform5
    platform5 = createSprite(1000, 300, 120, 25)

    //platform6
    platform6 = createSprite(1200, 230, 120, 25)
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

    if(keyWentDown("space")){
        player.velocityY += -10 
    }

    if (keyDown("d")) {
        player.x += 3
    }

    if (keyDown("a")) {
        player.x -= 3
    }

drawSprites();

}

