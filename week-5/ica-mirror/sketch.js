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
}

// ------------------------------------------------------------------
// This code only runs when the mouse is both pressed and moved 
function mouseDragged() {
  
  // move the origin to the center of the window 
  translate(width/2, height/2);
  
  // Let's draw a line between the mouse position and the 
  // previous mouse position. We'll represent the end points 
  // of this line as these 4 variables:   
  let x1 = mouseX - width/2;
  let y1 = mouseY - height/2; 
  let x2 = pmouseX - width/2; // previous mouse position 
  let y2 = pmouseY - height/2; 
  
  // measure the distance between the mouse position and 
  // the previous mouse position
  let d = dist(x1, y1, x2, y2);
  
  // let's use that number as our stroke thickness. this 
  // means small movement: thin lines, big movement: thick lines!
  strokeWeight(d);
  
  // this is our "original line" -- the one under the cursor
  line(x1, y1, x2, y2);
  
  // draw a version of this line with the 'x' coordinates mirrored
  push();
  scale(-1, 1);
  line(x1, y1, x2, y2);
  pop();
  
  // draw a version of this line with the 'y' coordinates mirrored
  push();
  scale(1, -1);
  line(x1, y1, x2, y2); 
  pop();
  
  // draw a version of this line with both the 'x' and 
  // the 'y' coordinates mirrored
  push();
  scale(-1, -1);
  line(x1, y1, x2, y2); 
  pop();
  
}

