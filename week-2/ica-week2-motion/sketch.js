// Global variables 
let x = 0;
let speed = 4; 

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
  background('gray');
  
  // basic motion equation 
  x = x + speed;  
   
  // turn around when we reach the right edge 
  // || --> OR 
  // && --> AND 
  
  if ( x >= width || x < 0 ) {
    // placing a 'minus' sign in front of a variable reverses it's sign 
    // ie: 
    // a positive becomes negative
    // a negative becomes positive (because of the double negative!)
    speed = -speed;     
  } 
  
  circle(x, height/2, 100);  
}
