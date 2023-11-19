let state = 1;

let pX = 125, pY = 125, spd = 8;

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
}


let backgroundImage;

function preload() {
  // Load the image in the preload function
  backgroundImage = loadImage('mapCropped.png');
  character1 = loadImage('Emote-Icons/UI_EmotionIcon3.png');
  character2 = loadImage('Emote-Icons/UI_EmotionIcon65.png');
  character3 = loadImage('Emote-Icons/UI_EmotionIcon113.png');
  characte4 = loadImage('Emote-Icons/UI_EmotionIcon369.png');
  character5 = loadImage('Emote-Icons/UI_EmotionIcon80.png');
  character6 = loadImage('Emote-Icons/UI_EmotionIcon422.png');
  npc1 = loadImage('Emote-Icons/UI_EmotionIcon192.png');
  npc2 = loadImage('Emote-Icons/UI_EmotionIcon306.png');
  npc3 = loadImage('Emote-Icons/UI_EmotionIcon325.png');
  apple1 = loadImage('apple1.png');
  apple2 = loadImage('apple2.png');
  appleField = loadImage('apple-field.png');


}

function draw() {
  if (state == 1){
    background(0);
    rectMode(CENTER);
    fill(255);
    stroke(255,0,0);
    strokeWeight(5);
    rect(250,350,200,100);
    fill(255);
    noStroke();
    textSize(35);
    text("--game title--", 75,190);
    fill(0)
    text("Start Game",160,362);
  }

  if (state == 2){
    background(0);
    rectMode(CENTER);
    fill(255);
    stroke(255,0,0);
    strokeWeight(5);
    rect(450,350,200,100);
    fill(255);
    noStroke();
    textSize(20);
    text("stand in page for char selection", 75,190);
    fill(0)
    text("select",360,362);
  }

  if (state == 3){
    // Set the loaded image as the background
    background(backgroundImage);


    // Draw a red rectangle at (pX, pY)
    // fill('red');
    // rect(pX - 10, pY - 10, 20, 20);
    const myCh = image(character, pX , pY, 40, 50);
  
  
  
  
      if (keyIsDown(87)||keyIsDown(38)) pY -= spd;
      if (keyIsDown(83)||keyIsDown(40)) pY += spd;
      if (keyIsDown(65)||keyIsDown(37)) pX -= spd;
      if (keyIsDown(68)||keyIsDown(39)) pX += spd;
  
  
      if (pY > windowHeight-125) pY = windowHeight-125;
      if (pX > windowWidth-100) pX = windowWidth-100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
      if (
        pX < windowWidth * 0.5 + 40 &&
        pX + 40 > windowWidth * 0.5 &&
        pY < windowHeight * 0.75 + 50 &&
        pY + 50 > windowHeight * 0.75
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      // prevPX = pX;
      // prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
  
  
  // windowWidth*.77, windowHeight*.25
  
  
  
  
      if (
        pX < windowWidth * 0.77 + 40 &&
        pX + 40 > windowWidth * 0.77 &&
        pY < windowHeight * 0.25 + 50 &&
        pY + 50 > windowHeight * 0.25
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      // prevPX = pX;
      // prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
  
  
  //windowWidth*.35, windowHeight*.45
  
  
  
  
      if (
        pX < windowWidth * 0.35 + 40 &&
        pX + 40 > windowWidth * 0.35 &&
        pY < windowHeight * 0.45 + 50 &&
        pY + 50 > windowHeight * 0.45
      ) {
        // Collision with NPC1, adjust character position or take other actions
        // For now, reset character position to the previous position
        pX = prevPX;
        pY = prevPY;
      }
   
      // Add similar collision detection logic for other NPCs (npc2, npc3)
   
      // Save the current position for the next frame
      prevPX = pX;
      prevPY = pY;
   
      // Boundary constraints for the user's character
      if (pY > windowHeight - 125) pY = windowHeight - 125;
      if (pX > windowWidth - 100) pX = windowWidth - 100;
      if (pY < 20) pY = 20;
      if (pX < 20) pX = 20;
  
  
     
  
      image(npc1, windowWidth*.5, windowHeight*.75,  40, 50);
      image(npc2, windowWidth*.77, windowHeight*.25, 40, 50);
      image(npc3, windowWidth*.35, windowHeight*.45, 40, 50);
  

    fill(255);
    rectMode(CORNER);
    stroke(0);
    strokeWeight(3);
    rect(0,0,75,35);
    noStroke();
    fill(0);
    textSize(25);
    text("back",10,25);
  }
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

function mouseClicked(){
  if (state == 1){
    if (
      mouseX < 350 && 
      mouseX > 150 && 
      mouseY < 400 && 
      mouseY > 300
    ){
      state = 2;
    }
  }

  if (state == 2){
    if (
      mouseX < 550 && 
      mouseX > 350 && 
      mouseY < 400 && 
      mouseY > 300
    ){
      state = 3;
    }
  }

  if (state == 3){
    if (
      mouseX < 75 && 
      mouseX > 0 && 
      mouseY < 35 && 
      mouseY > 0
    ){
      state = 1;
    }
  }
}
