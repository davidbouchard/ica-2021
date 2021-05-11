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
  background("black");
  fill("white");

  let radius = height / 3;

  translate(width / 2, height / 2);

  // tick marks
  for (let i = 0; i < 12; i++) {
    push(); // saves the origin
    let angle = map(i, 0, 12, 0, TWO_PI);
    rotate(angle);
    translate(radius, 0);
    rect(0, -2, 20, 4);
    pop(); // restores the origin
  }

  // handles
  push();
  let hourAngle = map(hour(), 0, 12, 0, TWO_PI) - PI / 2;
  rotate(hourAngle);
  rect(0, -5, radius / 2, 10);
  pop();

  push();
  let minuteAngle = map(minute(), 0, 60, 0, TWO_PI) - PI / 2;
  rotate(minuteAngle);
  rect(0, -3, radius, 6);
  pop();
  
  push();
  let secondAngle = map(second(), 0, 60, 0, TWO_PI) - PI / 2;
  rotate(secondAngle);
  rect(0, -2, radius, 4);
  pop();
}
