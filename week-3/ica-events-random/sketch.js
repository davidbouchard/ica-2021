// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);  
  colorMode(HSB); // from now, we're using H,S,B
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
}

// ------------------------------------------------------------------
// mousePressed event
function mousePressed() { 
  
  let x = random(width);  // returns between 0 and width 
  let y = random(height); // returns between 0 and height
  let diameter = random(50, 250);   
  
  let hue = random(360);   
  fill(hue, 100, 100, 0.5);
  noStroke();
  
  circle(x, y, diameter); 
}

// ------------------------------------------------------------------
// keyPressed event
function keyPressed() { 
  background('white');     
}


