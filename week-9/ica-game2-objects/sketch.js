// References:
// Player and Zombie animations by Jesse Freeman: https://gumroad.com/l/z-art-free
// Female player animation by Zoe Bockasten: https://www.behance.net/zbocka
// Music from: http://ericskiff.com/music/

let assetUrl = "https://cdn.glitch.com/35c70f44-9814-44f1-a58b-85a40ec22cea%2F";

let mPlayerFrames = []; 
let fPlayerFrames = [];
let zombieFrames = []; 
 
let player; 
let zombie; 

// ------------------------------------------------------------------
function preload() {
  mPlayerFrames = loadFrames("Mplayer-", 9);
  fPlayerFrames = loadFrames("Fplayer-", 9);
  zombieFrames = loadFrames("zombie-", 6);    
}

// ------------------------------------------------------------------
// load all the images in a sequence into an array 
// return the array 
function loadFrames(prefix, numFrames, extension=".png") {
  let frames = [];  
  for (let i=0; i < numFrames; i++) {
    let file = prefix + i + extension;
    print("Loading: " + file);
    frames[i] = loadImage(assetUrl + file);
  } 
  return frames; 
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  player = new Player(); 
  zombie = new Zombie();
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
   
  player.move();
  player.animate();
  player.display();
  
  zombie.move();
  zombie.animate();
  zombie.display();   
}

// ------------------------------------------------------------------
class Player {
    
  constructor() {
    this.x = 0;
    this.y = 0;
    this.flip = 1; 
    this.animationImages = mPlayerFrames;
    this.animationIndex = 0; 
  }
  
  move() {      
    this.x = mouseX;
    this.y = mouseY;     
    // determine which direction the mouse is moving (either left or right)
    if (mouseX > pmouseX) this.flip = 1; 
    if (mouseX < pmouseX) this.flip = -1;     
  }
  
  display() {    
    push();
    translate(this.x, this.y);
    scale(this.flip, 1);
    image(this.animationImages[this.animationIndex], 0, 0);
    pop();
  }
  
  animate() {    
    // % 4 --> slow down x4 
    if (frameCount % 4 == 0) this.animationIndex++;
    if (this.animationIndex >= this.animationImages.length) this.animationIndex = 0;
  }    
}

// ------------------------------------------------------------------
class Zombie {
    
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2); 
    this.flip = 1; 
    this.animationImages = zombieFrames;
    this.animationIndex = 0; 
  }
  
  move() {      
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) this.speedX *= -1; 
    if (this.y < 0 || this.y > width) this.speedY *= -1; 
    if (this.speedX > 0) this.flip = 1; 
    if (this.speedX < 0) this.flip = -1; 
  }
  
  display() {    
    push();
    translate(this.x, this.y);
    scale(this.flip, 1);
    image(this.animationImages[this.animationIndex], 0, 0);
    pop();
  }
  
  animate() {    
    // % 4 --> slow down x4 
    if (frameCount % 4 == 0) this.animationIndex++;
    if (this.animationIndex >= this.animationImages.length) this.animationIndex = 0;
  }    
}






