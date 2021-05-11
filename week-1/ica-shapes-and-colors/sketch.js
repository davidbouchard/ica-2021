// A few simple shape & color examples 

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
  // 0-255 --> gray value
  // r, g, b -> red, green, blue 
  background(128);          // 128 -> gray 
  
  stroke('black');          // list of HTML color names: https://www.w3schools.com/colors/colors_names.asp
  point(100, 200);          // point(x, y);  
  line(175, 75, 225, 325);  // line(x1, y1, x2, y2);
  
  rectMode(CENTER);         // changes from the default, CORNER
  fill('orange');
  rect(400, 200, 50);       // rect(x, y, width, height);
  
  noStroke();               // disable the stroke
  fill(255, 0, 0);          // an example of using R, G, B values for color
  circle(600, 200, 75);     // circle(x, y, diameter)  
}
 

