/* 
let myObject = { 
  attribute1: value1,
  attribute2: value2,
  attribute3: value3,
  etc... 
};
 
*/  
let ball = []; 

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i < 25; i++) {
    
    let x = map(i, 0, 25, 0, width);
    let y = height/2;
    
    ball[i] = new Ball(x, y); 
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
  fill('white');
  noStroke(); 
  
  for (let i=0; i < ball.length; i++) {
    let b = ball[i]; 
    
    b.draw();
    if (mouseIsPressed) b.move();
  }
  
}

// ------------------------------------------------------------------
// define 'class' for the Ball object 
// class -> template 

class Ball {
  
  // Always have a constructor
  constructor(theX, theY) {
    this.x = theX; 
    this.y = theY; 
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1); 
    this.diameter = 25; 
  }
  
  // We also have functions 
  draw() {    
    circle(this.x, this.y, this.diameter);      
  }
  
  move() {
    this.x += this.speedX;
    this.y += this.speedY;   
    if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
  }
  
  
}






