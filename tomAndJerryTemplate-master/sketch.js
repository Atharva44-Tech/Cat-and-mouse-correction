
var garden,gardenImage;
var cat,catImage2,catImage4;
var mouse,mouseImage2,mouseImage3;


function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");  
    catImage2=loadImage("images/cat2.png");
    catImage4=loadImage("images/cat4.png");
    mouseImage2=loadImage("images/mouse2.png"); 
    mouseImage3=loadImage("images/mouse3.png"); 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(250,300,400,400);
    garden.addImage(gardenImage);
    garden.scale=1.0;
    
    cat=createSprite(480,600,20,50);
    cat.addImage(catImage4);
    cat.scale=0.1
    
    mouse=createSprite(100,600,50,300);  
    mouse.addImage(mouseImage2);
    mouse.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if (cat.isTouching(mouse)){
      cat.x=0;
      mouse.addImage(mouseImage3);
      cat.addImage(catImage4);
    }
    
   
  



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode ===LEFT_ARROW){
cat.x=cat.x-10
cat.addImage(catImage2);
}

}
