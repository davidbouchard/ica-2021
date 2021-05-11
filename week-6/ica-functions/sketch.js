let n = 100; // number of circles 

let x = [];
let y = []; 
let speedX = [];
let speedY = []; 
let diameter = [];

let maxDist = 300; 

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);   
  
  for (let i=0; i < n; i++) {
    x[i] = 0;
    y[i] = 0;
    speedX[i] = random(-2, 2);
    speedY[i] = random(-2, 2); 
    diameter[i] = 100; 
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
  background('seagreen');  
  
  moveBubbles(); 
  
  // 1st pass 
  noFill();
  strokeWeight(5);
  stroke('black');
  drawBubbles(); 
  
  // 2nd pass
  fill('white');
  noStroke();
  drawBubbles(); 
}

// ------------------------------------------------------------------
function moveBubbles() { 
  for (let i=0; i < n; i++) {
    x[i] += speedX[i]; 
    y[i] += speedY[i]; 

    let d = dist(x[i], y[i], mouseX, mouseY); 
    diameter[i] = (maxDist - d) / 2;

    if (d > maxDist) {
      x[i] = mouseX;
      y[i] = mouseY; 
    }
  }
}


// ------------------------------------------------------------------
function drawBubbles() { 
  for (let i=0; i < n; i++) {
    circle(x[i], y[i], diameter[i]);  
  }
}

