let bubbles = [];
let bubbleImg;


function preload() {
  bubbleImg = loadImage('https://cdn.glitch.com/373c3295-2819-422f-9823-3ceb5de8b131%2Fbubble.png?v=1618321743660');  
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  for (let i=0; i < 100; i++) {
    bubbles[i] = new Bubble();      
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
  background('darkblue');
  
  for (let i=0; i < bubbles.length; i++) {
    bubbles[i].display();  
  }
  
}

// ------------------------------------------------------------------
function mousePressed() {
  for (let i=bubbles.length-1; i >= 0; i--) {
    if (bubbles[i].isMouseInside()) {
      bubbles.splice(i, 1); // delete the object at index i 
      break; // terminates the for loop 
    }  
  }
  
}


// ------------------------------------------------------------------
class Bubble { 

  constructor() {
    this.x = random(width);
    this.y = random(height); 
    this.diameter = random(50, 150);
  }
  
  display() {    
    image(bubbleImg, this.x, this.y, this.diameter, this.diameter);
  }
  
  isMouseInside() {
    let d = dist(mouseX, mouseY, this.x, this.y); 
    if (d < this.diameter/2) {
      return true;
    }
    else {
      return false; 
    }
  }
  
}

