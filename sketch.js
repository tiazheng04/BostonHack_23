
let pX = 125, pY = 125, spd = 7;

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
    rectMode(CENTER);
}


let backgroundImage;

function preload() {
  // Load the image in the preload function
  backgroundImage = loadImage('mapCropped.png');
}

function draw() {
  // Set the loaded image as the background
  background(backgroundImage);

  // Draw a red rectangle at (pX, pY)
  fill('red');
  rect(pX - 10, pY - 10, 20, 20);


    if (keyIsDown(87)||keyIsDown(38)) pY -= spd;
    if (keyIsDown(83)||keyIsDown(40)) pY += spd;
    if (keyIsDown(65)||keyIsDown(37)) pX -= spd; 
    if (keyIsDown(68)||keyIsDown(39)) pX += spd;

    if (pY > windowHeight-50) pY = windowHeight-50;
    if (pX > windowWidth-50) pX = windowWidth-50;
    if (pY < 20) pY = 20;
    if (pX < 20) pX = 20;

}


let clicks = 1;

function keyPressed() {
    if (keyCode===70 && clicks >0) {
        // console.log("test")
        clicks*=-1;
    document.getElementById('defaultCanvas0').style.width = "100vw";
    document.getElementById('defaultCanvas0').style.height = "100vh";

    } else if (keyCode===70 && clicks <0){
      console.log("test");
      clicks*=-1;
      document.getElementById('defaultCanvas0').style.width = "95vw";
      document.getElementById('defaultCanvas0').style.height = "95vh";
    }
  }

