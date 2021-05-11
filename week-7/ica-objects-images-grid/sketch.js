let img;  // because image() is already 

// ------------------------------------------------------------------
function preload() {  
   img = loadImage("https://cdn.glitch.com/659ecb23-4740-4664-ba5a-935f5e222394%2Flake.jpg?v=1615392427421");  
}

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
  //image(img, 0, 0, width, height);
  
  let space = 10 + floor(mouseX/20); 
  
  for (let i=0; i < width; i += space) {
    for (let j=0; j < height; j += space) { 
    
      let imgX = floor(map(i, 0, width, 0, img.width));
      let imgY = floor(map(j, 0, height, 0, img.height));    
      let c = img.get(imgX, imgY);    
      fill(c);
      square(i, j, space);
    }
  }
  
  
}
