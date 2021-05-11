// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------------------------------------------------------------
// Main render loop - code placed in draw() will repeat over and over
function draw() {
  // Place your drawing code here
  background("white");
  stroke("lightgray");

  push(); // save the origin/canvas rotation/scale
  
  // shift the origin by a certain amount
  translate(width/2, height/2);
  rotate(frameCount * 0.01);    
  //scale(2, 2);
  
  let gridSize = 50;
  for (let i = 0; i < gridSize; i++) {
    let biggestSide = width;
    if (height > width) biggestSide = height;

    let spacing = map(i, 0, gridSize - 1, 0, biggestSide);
    line(spacing, 0, spacing, height);
    line(0, spacing, width, spacing);
  }
  
  circle(100, 100, 100);
  
  rectMode(CENTER);
  rect(0, 0, 100);
  
  pop(); // restore the translation/rotation/scale from last push()
  
  circle(mouseX, mouseY, 200);
  
}
