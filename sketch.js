var bg,bgImg;
var player;
var ground;

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
    player = createSprite(displayWidth-1150, displayHeight-300, 25, 25);
    player.scale = 1 
 
    player.setCollider("rectangle",0,0,25,25)

    //ground
    ground = createSprite(displayWidth/2, displayHeight - 110, displayWidth, 30)        

}


function draw() {
    background(0); 
    player.velocityY += 0.7
    player.shapeColor = "#fff"
    ground.shapeColor = "#993300"

    player.collide(ground)

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
