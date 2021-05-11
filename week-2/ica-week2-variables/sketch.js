// Variable rules: 
// you can use letters, numbers, _ 
// you cannot start with a number ( x2 is OK, 2x is not )
// you cannot use words that already part of the reference 

// Scope: Global Variables 
let diameter = 100;  
let bgColor = 'gray';
let x = 0; 

// Data types: 
// Numbers: 0, -10, 123, 3.1416 
// String: text, either inside 'yellow' or "orange"

// Boolean variable: True or False 
// Object: Arrays, Images, Sound files, etc.. 


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
  background(bgColor);
  
  // Local variable 
  // - only visible in this section 
  // - expires at the end of the section 
  // let x = 0;
  
  circle(x, height/2, diameter); 
  x = x + 1; 
  
  // arithmetic operations 
  // +, -, *, / 
  //circle(width * 0.75, height/2, diameter * 0.5 )
}
