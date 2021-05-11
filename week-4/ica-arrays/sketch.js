let palette = ["#f94144","#f3722c","#f8961e",
               "#f9844a","#f9c74f","#90be6d",
               "#43aa8b","#4d908e","#577590","#277da1"];

let x = []; 
let y = []; 
let colors = [];

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i < 100; i++) {
    x[i] = random(width); 
    y[i] = random(height);     
    colors[i] = random(palette);     
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
  background('white');
  
  for (let i=0; i < 100; i++) {     
    let d = dist(mouseX, mouseY, x[i], y[i]);     
    d = d/2; 
    
    fill( colors[i] );
    circle(x[i], y[i], d );  
  }
  
}
