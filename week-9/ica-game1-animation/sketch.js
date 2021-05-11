// References:
// Player and Zombie animations by Jesse Freeman: https://gumroad.com/l/z-art-free
// Female player animation by Zoe Bockasten: https://www.behance.net/zbocka
// Music from: http://ericskiff.com/music/

let assetUrl = "https://cdn.glitch.com/35c70f44-9814-44f1-a58b-85a40ec22cea%2F";

let animationImages = []; 
let animationIndex = 0;

let flip = 1; 

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  let numFrames = 9;
  for (let i=0; i < numFrames; i++) {
    animationImages[i] = loadImage(assetUrl + "Mplayer-" + i + ".png");
  }
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
  
  // determine which direction the mouse is moving (either left or right)
  if (mouseX > pmouseX) flip = 1; 
  if (mouseX < pmouseX) flip = -1; 
  
  translate(mouseX, mouseY);
  scale(flip, 1);
  image(animationImages[animationIndex], 0, 0);
    
  // % 4 --> slow down x4 
  if (frameCount % 4 == 0) animationIndex++;
  if (animationIndex >= animationImages.length) animationIndex = 0;
  
}
