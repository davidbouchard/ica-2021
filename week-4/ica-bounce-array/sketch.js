let numberOfShapes = 75; 

let x = [];
let y = [];
let speedX = [];
let speedY = [];

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  for (let i = 0; i < numberOfShapes; i++) {
    x[i] = random(width);
    y[i] = random(height);
    speedX[i] = random(-1, 1);
    speedY[i] = random(-1, 1);
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
  background("black");
  stroke("white");
  strokeWeight(2);
  noFill();

  for (let i = 0; i < x.length; i++) {
    x[i] += speedX[i];
    if (x[i] < 0 || x[i] > width) {
      speedX[i] = -speedX[i];
    }

    y[i] += speedY[i];
    if (y[i] < 0 || y[i] > height) {
      speedY[i] = -speedY[i];
    }

    rect(x[i], y[i], 150, 150, 15);
  }
}
