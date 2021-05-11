let img;  // because image() is already 

// ------------------------------------------------------------------
function preload() {  
   img = loadImage("https://cdn.glitch.com/659ecb23-4740-4664-ba5a-935f5e222394%2Flake.jpg?v=1615392427421");  
}

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
  
  imageMode(CENTER);
  
  image(img, mouseX, mouseY, img.width*0.1, img.height*0.1);
}
