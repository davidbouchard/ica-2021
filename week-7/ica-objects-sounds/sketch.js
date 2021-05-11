let sound; 
let peaks; // contain amplitude peaks of the sound 

function preload() {  
  sound = loadSound("https://cdn.glitch.com/1c55a459-acd6-4339-b6a2-7a4925bc8d1b%2FAmen-break.wav?v=1615400412391");  
}

// ------------------------------------------------------------------
// Code placed in setup() will run once at the beginning
function setup() {
  // Create a new canvas to match the browser size
  createCanvas(windowWidth, windowHeight);
  
  peaks = sound.getPeaks(width);  // amplitude are numbers between 0 and 1 
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
  stroke('gray');
  
  // let's mess with the playback rate and change it according to mouseY
  // We go between those two boundaries; 
  // -2 -> reverse, 2x slow
  //  2 -> forward, 2x fast
  let newRate = map(mouseY, 0, height, -2, 2);
  sound.rate(newRate);
  
  translate(0, height/2);
  
  // draw the amplitude peaks so that we can visualize the sound 
  for (let i=0; i < width; i++) {
    let peakHeight = peaks[i] * height/3;
    line(i, -peakHeight, i, peakHeight);    
  }
  
  // if the sound is playing, draw a white rectangle to represent the 
  // current position of the 'playhead'
  if (sound.isPlaying() == true) {
    let playhead = map(sound.currentTime(), 0, sound.duration(), 0, width);
    noFill();
    stroke('white');
    rectMode(CENTER);
    rect(playhead, 0, 4, height)
  }
}

// ------------------------------------------------------------------
function mousePressed() {  
  sound.stop();
  sound.loop();      
  // jump to a new position in the sound file based on mouseX
  let newPosition = map(mouseX, 0, width, 0, sound.duration());
  sound.jump(newPosition);
  
}

function mouseReleased() {
  sound.pause();
}
