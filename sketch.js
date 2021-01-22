var night,nightImage;
var fairy,fairyImage;
var star,starImage;


function preload(){
   //preload the images here
   nightImage.loadImage("starnight.png");
   fairyImage.loadImage("fairy2.png");
   starImage.loadImage("star.png");

}

function setup() {
  createCanvas(800, 750);
  night=createSprite(400,375);
  night.addImage(nightImage);

  fairy=createSprite(700,700);
  fairy.addImage(fairyImage);

  star=createSprite(645,210);
  star.addImage(starImage);


}


function draw() {
  background("black");
 drawSprites();

 fairy.X=Mouse.X;

 if(keyDown(downarrow)){
  star.gravity=false;

 }


}
