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
  background("gray");
  
  // && --> AND 
  // || --> OR 
  if (mouseX < width / 2 && mouseY < height / 2) {
    fill("orange");
    rect(0, 0, width / 2, height / 2);
  }
  else if (mouseX >= width/2 && mouseY < height/2) {
    fill("pink");
    rect(width / 2, 0, width / 2, height / 2);  
  }
  else if (mouseX < width/2 && mouseY >= height/2) {
    fill('yellow');
    rect(0, height/2, width/2, height/2); 
  }
  else { 
    fill('blue');
    rect(width/2, height/2, width/2, height/2);
  }
}
