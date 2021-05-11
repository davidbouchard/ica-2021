let x = 0;
let y = 0;

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
  background('DarkTurquoise');

  // easing 
  x += (mouseX - x) * 0.1; 
  y += (mouseY - y) * 0.1; 
  
  // += --> add to the variable 
  // -= --> subtract from a variable    
  // *=, /=  also exist 
  
  circle(x, y, 100);
}
