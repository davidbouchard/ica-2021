let timer;
let timer2; 

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  textSize(64);
  
  timer = new Timer(2.5);
  
  timer2 = new Timer(4);
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
  
  if (timer.check()) {
    timer.reset(); 
    background('white');
  }
  
  if (timer2.check()) {
    timer2.reset(); 
    background('green');
  }
  
  
  fill('white');
  
  text(timer.timeElapsed(), 50, 100); 
  text(timer2.timeElapsed(), 50, 200); 
  
}

// ------------------------------------------------------------------
class Timer {
  
  constructor(duration) {
    this.duration = duration; 
    this.timestamp = millis()/1000;  
  }
  
  timeElapsed() {
    return millis()/1000 - this.timestamp;   
  }
  
  check() { 
    if (this.timeElapsed() > this.duration) return true;
    else return false;
  }
  
  reset() {
    this.timestamp = millis()/1000;  
  }
  
}
