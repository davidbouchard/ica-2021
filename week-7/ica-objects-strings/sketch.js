let palette = ["#7400b8","#6930c3","#5e60ce","#5390d9","#4ea8de","#48bfe3","#56cfe1","#64dfdf","#72efdd","#80ffdb"];

let message = "HELLO EVERYONE!"; 
let font; 

// ------------------------------------------------------------------
// Runs before setup and allows us to make sure files are fully downloaded
// before running the code 
function preload() {  
  font = loadFont("https://cdn.glitch.com/2ffb5c9d-f8e5-46dd-bb94-986926301e9c%2FYoutube%20Star.ttf?v=1615391368488");    
}


// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  textFont(font);
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
  
  translate(width/2, height/2);
  rotate(180);
  
  angleMode(DEGREES);
  
  textAlign(CENTER);
  textSize(100);
  
  let r = 200;
  let maxAngle = 360 / message.length;
  let angle = map(mouseX, 0, width, 0, maxAngle);
  
  for (let i=0; i < message.length; i++) {
    
    let colorIndex = map(i, 0, message.length-1, 0, palette.length-1);
    colorIndex = floor(colorIndex);
    
    fill(palette[colorIndex]);
    
    push();
    translate(r, 0);
    rotate(90);
    text(message.charAt(i), 0, 0);      
    pop();
    
    rotate(angle);
  }
}
