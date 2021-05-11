let n = 100;

let x = [];
let y = []; 
let diameter = [];

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);   
  
  for (let i=0; i < n; i++) {
    x[i] = random(width);
    y[i] = random(height); 
    diameter[i] = random(25, 50);    
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
  
  for (let i=0; i < n; i++) {     
    if (mouseIsOver(x[i], y[i], diameter[i])) {
      fill('yellow');
    }
    else {
      fill('white');
    }
    
    circle(x[i], y[i], diameter[i]);
  }
}

// ------------------------------------------------------------------
// x, y: center of a circle
// diameter: pretty obvious 
// return: true if the mouse is over, false if it is not 
function mouseIsOver(x, y, diameter) {
  let d = dist(x, y, mouseX, mouseY);
  if ( d < diameter / 2 ) {
    return true;   
  }
  else {
    return false; 
  }
}




