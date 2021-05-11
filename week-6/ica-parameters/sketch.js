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
  background('black');
  stroke('white');
  strokeWeight(4);
  fill('gray');
   
  polygon(width/2, height/2, 5, 200);    
  polygon(mouseX, mouseY, 8, 100);
  
 
}

// ------------------------------------------------------------------
// centerX, centerY: position of the center of the shape
// nSides: number of sides 
// radius: the radius of the shape 
function polygon(centerX, centerY, nSides, radius) {
  push();
  translate(centerX, centerY);  
  beginShape();
  for (let i=0; i < nSides; i++) {
    let angle = map(i, 0, nSides, 0, TWO_PI);      
    let x = cos(angle) * radius; 
    let y = sin(angle) * radius;     
    vertex(x, y); 
  }
  endShape(CLOSE);    
  pop();
} 


