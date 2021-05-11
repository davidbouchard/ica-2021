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
  background('white');
  strokeWeight(2);
  
  // map(input, inputMin, inputMax, outputMin, outputMax )
  // let diameter = map(mouseX, 0, width, 400, 100);  
  //circle(width/2, height/2, diameter);   
  rectMode(CENTER);
  
  let numLines = 50;
  for (let i=0; i < numLines; i++) {
    let x1 = map(i, 0, numLines-1, 100, width-100);
    let y1 = height/2;     
    let h = random(50, 400);    
    rect(x1, y1, 20, h);
  }
  
  // Note: noLoop() and loop() are unrelated to for and
  // while loops.. they simply pause/start the draw() function
  
  // I point it out because it's a source of confusion sometimes!
  noLoop();  
}
