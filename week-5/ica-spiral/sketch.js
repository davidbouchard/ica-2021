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
  background('black');
  //stroke('white');
  //noFill();
  noStroke();
  
  ellipseMode(CORNER);
  colorMode(HSB);
  
  // move the origin to the center of the window
  translate(width/2, height/2);
  
  let n = 50; 
  for (let i=0; i < n; i++) {    
    let diameter = map(i, 0, n-1, 50, 50+mouseY );
    
    let h = map(i, 0, n-1, 0, 360);
    fill(h, 255, 255, 0.3);
    
    rotate(mouseX * 0.01);    
    circle(0, 0, diameter);    
  }
  
}
