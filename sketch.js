var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;
var bomb, bombImage;

function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);

  // Moving background
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  //path.x = path.width / 2;

  //creating boy running
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);

  bomb = createSprite(200, 200, 10, 10);
  bomb.scale = 0.3;
  bomb.addAnimation("bombb", bombImage);
  // create left Boundary
  leftBoundary = createSprite(0, 0, 100, 800);
  //leftBoundary.invisible = false;
  //leftBoundary.visible = true;
  //leftBoundary.isvisible = false;
  leftBoundary.visible = false;

  //create right Boundary
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background

  if (path.y > 400) {
    path.y = height / 2;
  }

  /* if(path.y > 400 ){
    path.y = width/2;
  } */

  drawSprites();
}
