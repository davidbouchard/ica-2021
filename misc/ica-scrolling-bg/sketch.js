let bg;  // background image

let bgHeight; 
let bgWidth; 
let bgX = 0; 



// ------------------------------------------------------------------
function preload() {  
  bg = loadImage('https://cdn.glitch.com/e16a3298-11e2-4b36-ad3c-7c1683220938%2Fdesert_BG.png?v=1618324764617');
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  // calculate background image size while maintaining the aspect ratio 
  bgHeight= height; 
  bgWidth = (bg.width/bg.height) * height; 
  
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
    
  image(bg, bgX, 0, bgWidth, bgHeight);
  image(bg, bgX + bgWidth, 0, bgWidth, bgHeight);
  
//   noFill();
//   stroke('white');
//   strokeWeight(3);
//   rect(bgX, 0, bgWidth, bgHeight);
//   rect(bgX + bgWidth, 0, bgWidth, bgHeight);
    
  bgX -= 5;
  if (bgX < -bgWidth) {
    bgX = 0;   
  }
  
}
